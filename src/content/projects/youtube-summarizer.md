---
title: YouTube Summarizer
description: LLM을 활용해 유튜브 영상을 요약해줍니다.
techStacks:
  [
    "Next.js",
    "Tanstack query",
    "zustand",
    "Better Auth",
    "PostgreSQL",
    "drizzle-orm",
    "Vercel",
  ]
githubURL: "https://github.com/takijaki516/youtube-summarize"
demoURL: "https://yt.taekgogo.com/"
---

## 주요 기능

유튜브 영상 URL를 입력받아 LLM으로 요약을 제공합니다.

## 프로젝트 구조

![youtube-summarizer](/images/youtube-summarizer.png)

## 프로젝트 tech stack

1. Next.js + Vercel

- Next.js를 사용해 client, api를 개발하였습니다.

- API endpoint가 여러개 필요하지 않고 복잡하지 않아 Next.js의 api route handler로 API를 개발하였습니다.

- 개발하고자 하는 API가 LLM을 자주 사용하고 이때 serverless function의 특성상 idle time이 발생해 하면 비효율적이기 때문에 Vercel의 fluid compute기능을 사용하였습니다.\
  Vercel의 fluid compute은 최근에 vercel에서 발표한 기능으로 serverless function에서 idle time에 다른 request가 같은 serverless function instance를 사용할 수 있도록 해줍니다.\
  Vercel function은 AWS lambda에서 동작하는데 lambda는 request를 받고 response를 응답해줄때 까지 다른 request를 받지 않습니다.\
  이때 async function을 사용할 시 Idle time이 발생해 비효율적일 수 있는데, fluid compute는 이를 해결해줍니다.
- PostgreSQL Database는 Oregon에 위치하고 있기 때문에 물리적인 거리를 최소화화여 latency를 줄이기 위해 Vercel function의 위치를 US West로 제한하였습니다.

2. Tanstack Query + Zustand

- Tanstack Query로 서버 state를 관리하였습니다.
- Zustand로 client side 상태를 관리하였습니다.

3. Auth with Better Auth

- Better Auth라는 최근 개발된 오픈소스 Auth라이브러리로 session 기반의 인증/인가를 구현하였습니다.
- Google OAuth2.0를 사용한 google login과 email/password를 사용한 login을 구현하였습니다.

4. Neon Database + PgVector

- Neon은 Serverless PostgreSQL이기 때문에 Vercel의 Serverless function과 잘 어울릴것 같아 선택하였습니다
- RAG를 구현하기위해 text embedding vector를 저장하기 위해 때문에 PgVector를 사용하였습니다.

5. residential proxy

- Youtube를 크롤링하는 부분에서 youtube의 anti crawling을 우회하기 위해 residential proxy를 사용하였습니다.

## 기술적인 어려움 / 느낀점

Youtube가 anti crawling을 매우 엄격하게 적용하고 있어서 크롤링하는 부분에서 많은 어려움을 겪었습니다.\
이를 해결하기 위해 residential proxy를 사용하였습니다.\
허나 이를 latency가 높아지는 단점이 있었습니다. 또한 비용이 발생하였습니다.

LLM API의 loading state를 어떻게 처리할지 고민이 많았습니다.\
LLM 응답까지 시간이 꽤 걸리기 때문에 사용자 경험을 증가시키기 위해 현재 진행사항을 보여주는 UI를 구현하였습니다.
