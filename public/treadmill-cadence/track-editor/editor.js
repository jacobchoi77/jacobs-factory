const FILTERS = [10, 20, 30, 40];
const PUBLISH_API = "/api/treadmill-cadence/catalog";
const GITHUB_CONTENTS =
  "https://api.github.com/repos/jacobchoi77/jacobs-factory/contents/public/treadmill-cadence/catalog.json";
const TOKEN_KEY = "play-cadence.github-token";
const GROUPS = ["beginner", "intermediate", "advanced", "marathoner"];
const GROUP_KO = {
  beginner: "초심자",
  intermediate: "중급",
  advanced: "상급",
  marathoner: "마라토너",
};
const MIN_SPM = 100;
const MAX_SPM = 220;
const MIN_SCORED = 20;
const MIN_WALK = 45;
const WARMUP_S = 90;
const PAD = 28;
const PAD_BOTTOM = 36;
const LINE = "#00d4e0";
const WALK = "#8b97a3";

const $ = (id) => document.getElementById(id);

const state = {
  catalog: emptyCatalog(),
  minutes: 20,
  selectedId: null,
  selectedVert: 0,
  drag: null,
};

function emptyCatalog() {
  return { version: 1, warmup_s: WARMUP_S, filters: FILTERS.slice(), groups: GROUPS.slice(), tracks: [] };
}

function ceilingOf(vertices) {
  const values = vertices.map((v) => v.spm).filter((s) => s != null);
  return values.length ? Math.max(...values) : 0;
}

function segmentsOf(vertices, minutes) {
  const end = minutes * 60;
  const ordered = [...vertices].sort((a, b) => a.t - b.t);
  return ordered.map((v, i) => {
    const stop = i + 1 < ordered.length ? ordered[i + 1].t : end;
    return { spm: v.spm, start: v.t, dur: stop - v.t };
  });
}

function validate(track) {
  const errors = [];
  if (!FILTERS.includes(track.minutes)) errors.push("분은 10·20·30·40만");
  if (!track.vertices.length || track.vertices[0].t !== 0) errors.push("첫 꼭짓점은 t=0");
  const times = track.vertices.map((v) => v.t);
  if (times.some((t, i) => i && t <= times[i - 1])) errors.push("t는 증가해야 함");
  const end = track.minutes * 60;
  if (times.length && times[times.length - 1] >= end) errors.push("마지막 t는 트랙 길이 안");
  let ceiling = null;
  let hold = 0;
  for (const seg of segmentsOf(track.vertices, track.minutes)) {
    if (seg.spm == null) {
      if (seg.dur < MIN_WALK) errors.push(`걷기 ${seg.dur}초 < ${MIN_WALK}`);
      continue;
    }
    if (seg.spm < MIN_SPM || seg.spm > MAX_SPM) errors.push(`SPM ${seg.spm}은 ${MIN_SPM}–${MAX_SPM} 밖`);
    if (seg.dur < MIN_SCORED) errors.push(`채점 ${seg.dur}초 < ${MIN_SCORED}`);
    if (ceiling == null || seg.spm > ceiling) {
      ceiling = seg.spm;
      hold = seg.dur;
    } else if (seg.spm === ceiling) {
      hold += seg.dur;
    }
  }
  if (ceiling == null || hold < MIN_SCORED) errors.push("천장에 홀드가 없음");
  return { errors, ceiling: ceiling ?? 0 };
}

function shapeSlug(track) {
  let shape = (track.shape || "new").trim().replace(/_/g, "-");
  shape = shape.replace(/-\d+$/, "");
  return shape || "new";
}

function makeTitle(track) {
  const ceiling = track.ceiling || ceilingOf(track.vertices || []);
  return `${shapeSlug(track)}-${ceiling}`;
}

function makeId(track) {
  const ceiling = track.ceiling || ceilingOf(track.vertices || []);
  return `${track.group}-${shapeSlug(track)}-${ceiling}-${track.minutes}`;
}

function applyMeta(track) {
  track.shape = shapeSlug(track);
  track.ceiling = ceilingOf(track.vertices || []);
  track.title = makeTitle(track);
  const next = makeId(track);
  if (next !== track.id && state.catalog.tracks.some((t) => t.id === next && t !== track)) return;
  const wasSelected = state.selectedId === track.id;
  track.id = next;
  if (wasSelected) state.selectedId = next;
}

function selected() {
  return state.catalog.tracks.find((t) => t.id === state.selectedId) || null;
}

function visibleTracks() {
  return state.catalog.tracks.filter((t) => t.minutes === state.minutes);
}

function ensureSelected() {
  const vis = visibleTracks();
  if (!vis.some((t) => t.id === state.selectedId)) {
    state.selectedId = vis[0]?.id ?? null;
    state.selectedVert = 0;
  }
}

function renderChips() {
  $("minute-chips").innerHTML = FILTERS.map(
    (m) => `<button type="button" data-min="${m}" class="${m === state.minutes ? "on" : ""}">${m}분</button>`,
  ).join("");
}

function renderList() {
  const root = $("track-list");
  root.innerHTML = "";
  for (const group of GROUPS) {
    const rows = visibleTracks().filter((t) => t.group === group);
    if (!rows.length) continue;
    const h = document.createElement("div");
    h.className = "group-h";
    h.textContent = GROUP_KO[group];
    root.appendChild(h);
    for (const track of rows) {
      const { errors, ceiling } = validate(track);
      const b = document.createElement("button");
      b.type = "button";
      b.className = "track" + (track.id === state.selectedId ? " on" : "");
      b.innerHTML = `${track.shape}<div class="meta">${ceiling} · ${errors.length ? "거부" : "통과"}</div>`;
      b.addEventListener("click", () => {
        state.selectedId = track.id;
        state.selectedVert = 0;
        render();
      });
      root.appendChild(b);
    }
  }
}

function renderFields() {
  const track = selected();
  const disabled = !track;
  for (const id of ["group", "shape", "minutes", "vert-t", "vert-spm", "vert-walk"]) {
    $(id).disabled = disabled;
  }
  if (!track) {
    $("track-id").textContent = "—";
    $("track-title").textContent = "—";
    $("errors").hidden = true;
    $("ok").hidden = true;
    return;
  }
  $("group").value = track.group;
  $("shape").value = track.shape;
  $("minutes").value = String(track.minutes);
  $("track-id").textContent = track.id;
  $("track-title").textContent = track.title;
  const vert = track.vertices[state.selectedVert];
  if (vert) {
    $("vert-t").value = String(vert.t);
    $("vert-t").disabled = state.selectedVert === 0;
    $("vert-walk").checked = vert.spm == null;
    $("vert-spm").disabled = vert.spm == null;
    $("vert-spm").value = String(vert.spm ?? 160);
  }
  const { errors, ceiling } = validate(track);
  applyMeta(track);
  $("shape").value = track.shape;
  $("track-id").textContent = track.id;
  $("track-title").textContent = track.title;
  $("ceiling").textContent = String(ceiling);
  $("ok").hidden = errors.length > 0;
  $("errors").hidden = errors.length === 0;
  $("errors").innerHTML = errors.map((e) => `<p>${e}</p>`).join("");
}

function plotRect(canvas) {
  return {
    x: PAD,
    y: PAD,
    w: canvas.width - PAD * 2,
    h: canvas.height - PAD - PAD_BOTTOM,
  };
}

function minuteStep(minutes) {
  if (minutes <= 10) return 1;
  if (minutes <= 20) return 2;
  return 5;
}

function xy(canvas, minutes, t, spm) {
  const r = plotRect(canvas);
  const x = r.x + (t / (minutes * 60)) * r.w;
  const y = r.y + (1 - (spm - MIN_SPM) / (MAX_SPM - MIN_SPM)) * r.h;
  return { x, y };
}

function fromXy(canvas, minutes, px, py) {
  const r = plotRect(canvas);
  const t = Math.round(((px - r.x) / r.w) * minutes * 60);
  const spm = Math.round(MIN_SPM + (1 - (py - r.y) / r.h) * (MAX_SPM - MIN_SPM));
  return {
    t: clamp(snap(t, 5), 0, minutes * 60 - 5),
    spm: clamp(snap(spm, 5), MIN_SPM, MAX_SPM),
  };
}

function snap(n, step) {
  return Math.round(n / step) * step;
}

function clamp(n, a, b) {
  return Math.min(b, Math.max(a, n));
}

function draw() {
  const canvas = $("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const track = selected();
  const minutes = track?.minutes ?? state.minutes;
  const r = plotRect(canvas);

  ctx.strokeStyle = "#2a3038";
  ctx.lineWidth = 1;
  ctx.font = "11px system-ui";
  for (let spm = MIN_SPM; spm <= MAX_SPM; spm += 20) {
    const p = xy(canvas, minutes, 0, spm);
    ctx.beginPath();
    ctx.moveTo(r.x, p.y);
    ctx.lineTo(r.x + r.w, p.y);
    ctx.stroke();
    ctx.fillStyle = "#8b97a3";
    ctx.textAlign = "left";
    ctx.fillText(String(spm), 6, p.y + 4);
  }

  const step = minuteStep(minutes);
  ctx.textAlign = "center";
  for (let m = 0; m <= minutes; m += 1) {
    const p = xy(canvas, minutes, m * 60, MIN_SPM);
    ctx.beginPath();
    ctx.moveTo(p.x, r.y);
    ctx.lineTo(p.x, r.y + r.h);
    ctx.stroke();
    if (m % step === 0) {
      ctx.fillStyle = "#8b97a3";
      ctx.fillText(`${m}분`, p.x, r.y + r.h + 16);
    }
  }
  ctx.textAlign = "left";

  if (!track) return;
  const verts = track.vertices;
  const end = minutes * 60;
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  for (let i = 0; i < verts.length; i++) {
    const cur = verts[i];
    const nextT = i + 1 < verts.length ? verts[i + 1].t : end;
    if (cur.spm == null) continue;
    const a = xy(canvas, minutes, cur.t, cur.spm);
    const b = xy(canvas, minutes, nextT, cur.spm);
    ctx.strokeStyle = LINE;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    if (i + 1 < verts.length && verts[i + 1].spm != null) {
      const c = xy(canvas, minutes, nextT, verts[i + 1].spm);
      ctx.lineTo(c.x, c.y);
    }
    ctx.stroke();
  }

  verts.forEach((v, i) => {
    const spm = v.spm ?? MIN_SPM;
    const p = xy(canvas, minutes, v.t, spm);
    ctx.beginPath();
    ctx.arc(p.x, p.y, i === state.selectedVert ? 7 : 5, 0, Math.PI * 2);
    if (v.spm == null) {
      ctx.fillStyle = "transparent";
      ctx.strokeStyle = WALK;
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      ctx.fillStyle = LINE;
      ctx.fill();
    }
  });
}

function hitVertex(track, canvas, px, py) {
  let best = -1;
  let bestD = 14;
  track.vertices.forEach((v, i) => {
    const p = xy(canvas, track.minutes, v.t, v.spm ?? MIN_SPM);
    const d = Math.hypot(p.x - px, p.y - py);
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  });
  return best;
}

function addVertex(track, t, spm, walk) {
  if (track.vertices.some((v) => v.t === t)) return;
  track.vertices.push(walk ? { t, spm: null } : { t, spm });
  track.vertices.sort((a, b) => a.t - b.t);
  state.selectedVert = track.vertices.findIndex((v) => v.t === t);
}

function bindCanvas() {
  const canvas = $("canvas");
  const pos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    return { x: (e.clientX - rect.left) * sx, y: (e.clientY - rect.top) * sy };
  };

  canvas.addEventListener("pointerdown", (e) => {
    const track = selected();
    if (!track) return;
    const { x, y } = pos(e);
    const hit = hitVertex(track, canvas, x, y);
    if (hit >= 0) {
      state.selectedVert = hit;
      state.drag = { index: hit };
      canvas.setPointerCapture(e.pointerId);
      render();
      return;
    }
    const { t, spm } = fromXy(canvas, track.minutes, x, y);
    if (t <= 0) return;
    addVertex(track, t, spm, e.shiftKey);
    render();
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!state.drag) return;
    const track = selected();
    if (!track) return;
    const { x, y } = pos(e);
    const { t, spm } = fromXy(canvas, track.minutes, x, y);
    const v = track.vertices[state.drag.index];
    if (state.drag.index > 0) v.t = t;
    if (v.spm != null) v.spm = spm;
    track.vertices.sort((a, b) => a.t - b.t);
    state.selectedVert = track.vertices.indexOf(v);
    state.drag.index = state.selectedVert;
    render();
  });

  canvas.addEventListener("pointerup", () => {
    state.drag = null;
  });
}

function bindFields() {
  $("group").innerHTML = GROUPS.map((g) => `<option value="${g}">${GROUP_KO[g]}</option>`).join("");
  $("minutes").innerHTML = FILTERS.map((m) => `<option value="${m}">${m}</option>`).join("");

  $("minute-chips").addEventListener("click", (e) => {
    const min = Number(e.target.dataset.min);
    if (!min) return;
    state.minutes = min;
    ensureSelected();
    render();
  });

  const rewriteId = () => {
    const track = selected();
    if (!track) return;
    track.group = $("group").value;
    track.shape = $("shape").value.trim() || "new";
    track.minutes = Number($("minutes").value);
    applyMeta(track);
    state.selectedId = track.id;
    state.minutes = track.minutes;
    render();
  };
  for (const id of ["group", "shape", "minutes"]) {
    $(id).addEventListener("change", rewriteId);
    $(id).addEventListener("input", rewriteId);
  }

  $("vert-t").addEventListener("change", () => {
    const track = selected();
    const v = track?.vertices[state.selectedVert];
    if (!v || state.selectedVert === 0) return;
    v.t = clamp(snap(Number($("vert-t").value) || 0, 5), 5, track.minutes * 60 - 5);
    track.vertices.sort((a, b) => a.t - b.t);
    state.selectedVert = track.vertices.indexOf(v);
    render();
  });
  $("vert-spm").addEventListener("change", () => {
    const v = selected()?.vertices[state.selectedVert];
    if (!v || v.spm == null) return;
    v.spm = clamp(snap(Number($("vert-spm").value) || 160, 5), MIN_SPM, MAX_SPM);
    render();
  });
  $("vert-walk").addEventListener("change", () => {
    const v = selected()?.vertices[state.selectedVert];
    if (!v) return;
    v.spm = $("vert-walk").checked ? null : 160;
    render();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Delete" && e.key !== "Backspace") return;
    if (e.target.matches("input, select, textarea")) return;
    const track = selected();
    if (!track || state.selectedVert === 0) return;
    track.vertices.splice(state.selectedVert, 1);
    state.selectedVert = Math.max(0, state.selectedVert - 1);
    render();
  });

  $("new-track").addEventListener("click", () => {
    const shape = `custom-${Date.now().toString(36).slice(-4)}`;
    const track = {
      group: "beginner",
      shape,
      minutes: state.minutes,
      ceiling: 160,
      vertices: [
        { t: 0, spm: 150 },
        { t: 20, spm: 160 },
        { t: state.minutes * 60 - 20, spm: 150 },
      ],
    };
    applyMeta(track);
    state.catalog.tracks.push(track);
    state.selectedId = track.id;
    state.selectedVert = 0;
    render();
  });

  $("dup-track").addEventListener("click", () => {
    const src = selected();
    if (!src) return;
    const shape = `${src.shape}-copy`;
    const track = structuredClone(src);
    track.shape = shape;
    applyMeta(track);
    state.catalog.tracks.push(track);
    state.selectedId = track.id;
    render();
  });

  $("del-track").addEventListener("click", () => {
    const track = selected();
    if (!track) return;
    state.catalog.tracks = state.catalog.tracks.filter((t) => t !== track);
    ensureSelected();
    render();
  });

  $("file").addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    loadCatalog(JSON.parse(await file.text()));
  });

  $("save").addEventListener("click", () => {
    const text = catalogText();
    if (!text) return;
    const blob = new Blob([text], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "catalog.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  $("publish").addEventListener("click", () => {
    publishCatalog();
  });
}

function catalogText() {
  const bad = state.catalog.tracks.filter((t) => validate(t).errors.length);
  if (bad.length && !confirm(`${bad.length}개가 헌법에 안 맞습니다. 그래도 받겠습니까?`)) return null;
  state.catalog.tracks.forEach(applyMeta);
  return JSON.stringify(state.catalog, null, 2) + "\n";
}

function setPublishStatus(text) {
  const el = $("publish-status");
  if (el) el.textContent = text;
}

function githubToken() {
  let token = localStorage.getItem(TOKEN_KEY) || "";
  if (!token) {
    token = (prompt("GitHub 토큰 (contents:write). 이 브라우저에만 남습니다.") || "").trim();
    if (token) localStorage.setItem(TOKEN_KEY, token);
  }
  return token;
}

function utf8ToB64(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin);
}

async function publishViaGithub(text, token) {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const current = await fetch(GITHUB_CONTENTS, { headers });
  if (current.status === 401 || current.status === 403) {
    localStorage.removeItem(TOKEN_KEY);
    throw new Error("토큰이 거부됐습니다. 다시 올리기 하세요.");
  }
  if (!current.ok) throw new Error(`GitHub 읽기 ${current.status}`);
  const meta = await current.json();
  const put = await fetch(GITHUB_CONTENTS, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "트랙 카탈로그를 에디터에서 올린다",
      content: utf8ToB64(text),
      sha: meta.sha,
    }),
  });
  if (!put.ok) throw new Error(`GitHub 쓰기 ${put.status}`);
}

async function postCatalog(text, token) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(PUBLISH_API, { method: "POST", headers, body: text });
}

async function publishCatalog() {
  const text = catalogText();
  if (!text) return;
  const button = $("publish");
  button.disabled = true;
  setPublishStatus("올리는 중…");
  try {
    let api = await postCatalog(text);
    if (api.status === 401 || api.status === 501) {
      const token = githubToken();
      if (!token) {
        setPublishStatus("토큰이 없어 올리지 못했습니다.");
        return;
      }
      api = await postCatalog(text, token);
    }
    if (api.ok) {
      setPublishStatus("올렸습니다. 앱은 다시 켜면 반영됩니다.");
      return;
    }
    if (api.status !== 404) {
      const err = await api.json().catch(() => ({}));
      throw new Error(err.error || `올리기 ${api.status}`);
    }
    const token = githubToken();
    if (!token) {
      setPublishStatus("토큰이 없어 올리지 못했습니다.");
      return;
    }
    await publishViaGithub(text, token);
    setPublishStatus("올렸습니다. 앱은 다시 켜면 반영됩니다.");
  } catch (err) {
    setPublishStatus(err.message || "올리기에 실패했습니다.");
  } finally {
    button.disabled = false;
  }
}

function loadCatalog(raw) {
  if (!raw || !Array.isArray(raw.tracks)) throw new Error("catalog.tracks missing");
  state.catalog = {
    version: Number(raw.version) || 1,
    warmup_s: Number(raw.warmup_s) || WARMUP_S,
    filters: FILTERS.slice(),
    groups: GROUPS.slice(),
    tracks: raw.tracks.map((t) => ({
      id: t.id,
      group: t.group,
      shape: t.shape,
      title: t.title,
      minutes: t.minutes,
      ceiling: t.ceiling,
      vertices: t.vertices.map((v) => ({ t: v.t, spm: v.spm ?? null })),
    })),
  };
  state.catalog.tracks.forEach(applyMeta);
  ensureSelected();
  render();
}

function render() {
  renderChips();
  renderList();
  renderFields();
  draw();
}

async function boot() {
  bindCanvas();
  bindFields();
  const paths = [
    "/treadmill-cadence/catalog.json",
    "../catalog.json",
    "../../tracks/catalog.json",
    "/tracks/catalog.json",
  ];
  for (const path of paths) {
    try {
      const res = await fetch(path);
      if (!res.ok) continue;
      const data = await res.json();
      if (!data || !Array.isArray(data.tracks)) continue;
      loadCatalog(data);
      return;
    } catch {
      /* HTML 200, file://, or missing */
    }
  }
  render();
}

boot();
