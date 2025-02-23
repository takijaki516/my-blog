---
title: Coach247
description: 운동 일지 관리, 식단 관리, AI 음식 칼로리 인식 기능을 구현한 프로젝트입니다. 웹과 PWA를 지원합니다.
techStacks:
  [
    "React(vite)",
    "PWA",
    "zustand",
    "Tanstack Router",
    "Tanstack Query",
    "Better Auth",
    "Hono.js + Cloudflare Worker",
    "PostgreSQL",
    "drizzle-orm",
    "Cloudflare R2",
  ]
githubURL: "https://github.com/takijaki516/npg-web"
demoURL: "https://coach247.taekgogo.com/"
---

## 주요 기능

1. 운동 일지 관리
2. 신체(키,몸무게) 정보 기록
3. 식단 기록
4. 목표 체중 설정
5. AI로 음식 칼로리 인식
6. AI로 목표 체중 달성을 위한 칼로리 추천
7. PWA 지원

## 프로젝트 구조

![Coach247](/images/coach247.png)

## Tech Stack

1. React + Tanstack Router + PWA

- Next.js를 사용하지 않고 React(vite)를 사용한 이유는 개발하고자 하는 애플리케이션이 유저의 인증/인가후 사용되는 dynamic한 client이기 때문에 SPA로 개발하였습니다.
- Next.js를 사용하면서도 위와 상응하는 기능을 구현할 수 있지만 굳이 Next.js를 SPA로 빌드해 사용하는 것은 over engineering이라고 판단하였습니다.
- Tanstack Router로 client side의 routing을 구현했습니다.\
  Tanstack Router는 type safe한 라우팅을 지원합니다.\
  또한 Next.js처럼 file based한 라우팅도 지원합니다.
- Static hosting은 Cloudflare Pages를 사용하였습니다.\
  AWS S3 + AWS cloudfront처럼 global edge에 배포할 수 있고 bandwidth가 무제한 무료라는 엄청난 장점이 있어 선택하였습니다.
- web에서도 동작하지만 보다 app같은 환경을 위해 PWA기능을 추가하였습니다.

2. Tanstack Query + Zustand

- Tanstack Query로 서버 state를 관리하였습니다.
- Cache를 적절히 사용하여 불필요한 network request를 제거하였으며.
- 의존적이지 않은 request를 한번에 처리하여서 network request waterfall를 최소화 하였습니다.
- Tanstack Query의 useSuspenseQueries를 React Component에서 data 존재유무를 파악하는 if문을 최소화 하였습니다.
- Client side 상태 관리는 zustand를 사용하였습니다.

3. Auth with Better Auth

- Better Auth라는 최근 개발된 오픈소스 Auth라이브러리로 session 기반의 인증/인가를 구현하였습니다.
- Google OAuth2.0를 사용한 google login과 email/password를 사용한 login을 구현하였습니다.

3. Cloudflare Worker with Hono.js

- API server로는 Cloudflare Worker를 사용하였습니다.\
  Cloudflare Worker역시 bandwidth가 무제한이고 하루에 100,000 requests를 무료로 제공해 충분히 합리적인 가격에 이끌려 선택하였습니다.
- Hono.js는 edge runtime에서 개발을 쉽게 해주는 framework로 cloudflare worker와 궁합이 잘맞아 선택하였습니다.
- AWS Lambda + API Gateway도 고려하였지만 개발할 API서버가 edge runtime만을 사용해 구현가능하다는 점, AWS Lambda의 cold start, Worker는 CPU time만을 과금한다는 점에 worker를 선택하였습니다.

4. Cloudflare R2

- Frontend와 Backend를 Cloudflare에 이미 배포를 했기 때문에 object storage는 Cloudflare R2를 사용하였습니다.
- R2와 Cloudflare Image를 사용해 이미지 resize를 쉽게 구현할 수 있었습니다.

5. Neon Database

- PostgreSQL기반 database를 편리하게 제공하는 서비스이기에 선택하였습니다.
- Serverless PostgreSQL이기 때문에 Serverless API server와 잘 어울릴것 같아 선택하였습니다.

## 기술적인 어려움 / 느낀점

Cloudflare가 한국의 높은 망사용료 인해 ICN리전은 free유저에게 지원해주지 않는다는 점을 몰랐습니다.

따라서 한국에서 사용해도 주로 싱가폴,도쿄,미국 서부 리전에서 data를 보내줍니다...

Database는 global하게 distribute되어 있지 않고 미국 Oregon에 위치해 있어 edge에 위치한 Worker와 DB간의 latency가 높아졌습니다.

이를 해결하기 위해 Cloudflare Worker가 제공하는 smart location을 사용해 DB와 Worker간의 물리적인 거리를 최소화하려고 노력하였습니다. 허나 실질적인 효과가 있는지는 모르겠습니다.

빌드된 React를 edge network에 배포하는 것은 확실한 장점이 느껴지나, API server를 edge network에 배포하는 것에 회의적으로 느껴졌습니다.\
하나의 HTTP request life cycle동안 DB에 request를 여러번하는데 이러면 오히려 edge location API server가 존재하는 것이 단점으로 다가옵니다.

인프라 레벨에서 문제점이 생기면 해결하기가 어렵다는 것을 느꼈습니다.

Next.js가 엄청난 인기를 끌고 있지만, 굳이 Next.js가 필요한지에 대한 의문점이 들었습니다.\
Tanstack Router / React Router를 사용해도 충분하지 않을까라는 생각입니다.\
Next.js는 Vercel에 배포할 때 엄청나게 편리하고 Vercel 맞춤형 framework같다는 생각입니다.