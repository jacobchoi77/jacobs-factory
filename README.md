# Jacobs Factory

직접 쓰는 앱을 공개 테스트 중인 1인 개발 페이지입니다.

## 로컬에서 보기

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## Vercel에 올리기

1. [GitHub](https://github.com/new)에서 저장소를 만듭니다. 이름은 `jacobs-factory`처럼 소문자면 됩니다.
2. 이 폴더에서 원격 저장소를 연결하고 올립니다.

```bash
git init
git add .
git commit -m "Add Jacobs Factory developer site"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/jacobs-factory.git
git push -u origin main
```

3. [Vercel](https://vercel.com/new)에 GitHub로 로그인한 뒤 그 저장소를 Import합니다.
4. Framework Preset은 Next.js 그대로 두고 Deploy를 누릅니다.
5. 끝나면 `*.vercel.app` 주소가 생깁니다. 커스텀 도메인은 **https://jacobs-factory.com** 입니다.

AdMob `app-ads.txt`는 `public/app-ads.txt`에 있고, 배포 후 **https://jacobs-factory.com/app-ads.txt** 에서 한 줄 텍스트가 보여야 합니다. Play Console 개발자 웹사이트는 경로 없이 `https://jacobs-factory.com` 이어야 합니다.

내 건강 일기: **https://jacobs-factory.com/my-health-diary**  
SayNote: **https://jacobs-factory.com/saynote**  
Play Cadence 개인정보처리방침: **https://jacobs-factory.com/play-cadence/privacy**
