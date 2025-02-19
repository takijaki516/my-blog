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

Next.js를 사용해 client, api를 개발하였습니다.

API endpoint가 여러개 필요하지 않고 복잡하지 않아 따로 API server를 개발할 필요가 없다고 판단하여 Next.js의 api route handler로 api를 개발하였습니다.

개발하고자 하는 API가 매우 IO bound이기 때문에 Vercel의 fluid compute기능을 사용하였습니다.

fluid compute은 최근에 vercel에서 발표한 기능으로 serverless function에서 idle time에 다른 request가 같은 serverless function instance를 사용할 수 있도록 해줍니다.

vercel function은 AWS lambda에서 동작하는데 lambda는 request가 response를 줄때까지 다른 request를 받지 않습니다(Node.js의 장점인 이벤트루프 기반 비동기 활용할 수 없음).

따라서 Idle time이 발생해 비효율적일 수 있는데, fluid compute는 이를 해결해줍니다.

외부 LLM API를 많이 사용하기에 IO bound가 매우 높은 프로젝트였습니다. 따라서 적합하다고 판단하여 사용하였습니다.

Database는 Oregon에 위치하고 있기 때문에 물리적인 거리를 최소화화여 latency를 줄이기 위해 vercel function의 위치를 US West로 설정하였습니다.

Youtube를 크롤링하는 부분에서 youtube의 anti crawling을 우회하기 위해 residential proxy를 사용하였습니다.
