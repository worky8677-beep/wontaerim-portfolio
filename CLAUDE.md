# PROJECT.md — 원태림 포트폴리오

## 규칙 (최우선 적용)

1. **한국어로만 응답** (영어 응답 금지)
2. **식별자는 짧게** 작성
3. **단계별로 작업 수행** (한 번에 하나씩)
4. **접근성 속성 넣지 말 것**

---

## 프로젝트 개요

**프로젝트명:** 원태림 포트폴리오 — 신입 UIUX 디자이너 구직용 포트폴리오 사이트  
**참고 사이트:** [https://sudharsan-design.framer.website/]  
**목표:** 참고 사이트를 정확하게 복제하되, 영어 글꼴을 한국어 글꼴로 교체  
**클라이언트 전용:** 백엔드, 서버, 데이터베이스 없음

---

## 팀 구성 & 숙련도

- 개인 프로젝트 (1인)
- 코딩 숙련도: **초급** (코딩 배운지 6개월)
- 코드 구현은 **Claude CLI / Gemini CLI 바이브 코딩**으로 수행
- 초보자가 이해할 수 있는 코드로 작성할 것 (성능 최적화보다 가독성 우선)

---

## 기술 스택

- React 19
- Tailwind CSS v4
- React Router v7
- tailwind-merge

---

## 프론트엔드 코딩 규칙 (반드시 준수)

### 언어 & 라이브러리
- 파일 확장자는 `.jsx` / `.js` — TypeScript 사용 금지
- 아이콘은 `@fortawesome/react-fontawesome` + `@fortawesome/free-solid-svg-icons` 사용 (`@iconify` 금지)
- React Router v7 **data API** 문법 준수: `react-router`에서 import, `createBrowserRouter` + `RouterProvider` 사용
  - `<BrowserRouter>`, `<Routes>`, `<Route>` 구식 패턴 사용 금지
- 라우터 설정(`createBrowserRouter`)은 `main.jsx`에서 정의하고 `RouterProvider`를 직접 렌더링한다
- `App.jsx`는 API·컴포넌트 브릿지 역할: `<Outlet />`으로 자식 라우트를 렌더링하며, 전역 상태·컨텍스트·공통 레이아웃은 여기서 제공한다

### Export 규칙
- `src/components/common/` 하위 컴포넌트는 **named export** 사용 (`export function Foo`)
  - `export default` 금지
  - import 시 반드시 중괄호 사용: `import { Nav } from '../components/common/Nav'`
- 페이지(`src/pages/`) 및 기타 파일은 `export default function` 사용
- barrel 파일(`index.js`, `index.jsx`) 생성 금지

### Tailwind CSS v4
- **v4 전용 문법만 사용** — v3 하위 호환 고려 안 함
- 테마 토큰은 `src/styles/tokens.css`의 `@theme` 블록으로 관리 (`tailwind.config.js` 무시)
- **하드코딩 금지**: hex 색상(`#xxxxxx`), rgba 값 직접 입력 금지
- **유틸리티 클래스 우선**: 디자인 토큰에 있는 색상·크기는 반드시 클래스로 표현
  - 불투명도 조합: `bg-gray-950/60`, `bg-white/12` 등
  - 그라디언트: `bg-linear-[각도] from-* to-*`
  - 토큰에 없는 값 처리 순서:
    1. `@theme` 블록에 토큰 선언 후 유틸리티 클래스 사용
    2. CSS 변수(`--var-name`)로 선언 후 `var()` 참조
    3. 위 두 방법이 불가한 경우에만 arbitrary 값 `[]` 허용
- `tailwind-merge`로 클래스 충돌 방지

### CSS 파일 구조
- 모든 CSS 파일은 `src/styles/` 폴더에서 관리
  - `src/styles/index.css` — 폰트 import, Tailwind, base 스타일
  - `src/styles/tokens.css` — `@theme` 디자인 토큰
- `main.jsx`에서 `import "./styles/index.css"` 로 진입
- 폰트는 HTML `<link>` 금지 — 반드시 `index.css`의 `@import url(...)` 방식으로 로드

### 폰트
- 폰트 로드: `src/styles/index.css` 상단 `@import url(...)` (HTML `<link>` 금지)
- **제목** (Big Shoulders, Oswald, Bebas Neue 대체): **Gmarket Sans** — CDN import
- **본문** (DM Sans, Albert Sans, Mluvka 대체): **Pretendard Std** — CDN import
- 폰트 패밀리 토큰은 `--font-*` 명명 (`--font-family-*` 금지 — v4에서 유틸리티 클래스 미생성)
  - `--font-sans`: Pretendard Std 전체 폴백 스택
  - `--font-gmarket`: Gmarket Sans

### 타이포그래피 토큰 구조
- 텍스트 크기는 `--text-*` + `--text-*--line-height` 쌍으로 선언 (자동 line-height 적용)
- 독립 line-height 클래스: `leading-2`(20px) / `leading-4`(28px) / `leading-6`(36px) / `leading-8`(48px) / `leading-10`(60px)

---

## 페이지 구조

```
header
main
  section.hero
  section.aboutme
  section.projects
footer
```

---

## 디렉토리 구조

```
portfolio/
├── src/
│   ├── main.jsx          # 라우터 설정 + 진입점
│   ├── App.jsx           # 공통 레이아웃 + Outlet
│   ├── pages/            # 페이지 컴포넌트 (export default)
│   ├── components/
│   │   └── common/       # 공통 컴포넌트 (named export)
│   └── styles/
│       ├── index.css     # 폰트 import + Tailwind
│       └── tokens.css    # @theme 디자인 토큰
├── img/                  # 로컬 에셋 (이미지, 아이콘)
└── PROJECT.md
```

---

## 개발 컨벤션

1. **정밀한 편집:** 기존 디자인 무결성 유지하면서 최소한의 변경 우선
2. **명명 규칙:** BEM과 유사한 방식 (예: `.project-card`, `.section-label`)
3. **CSS 변수:** 색상과 글꼴은 `:root` 또는 `@theme` 토큰으로 관리
4. **상호작용:** 부드러운 전환과 마이크로 인터랙션 (커스텀 커서, 스크롤 노출 등) 유지
5. **컴포넌트 단위 작업:** 한 번에 하나씩 요청하고 동작 확인 후 다음 단계 진행

---

## 바이브 코딩 가이드라인

> Claude CLI 또는 Gemini CLI에 자연어로 지시하고,
> 생성된 코드를 반드시 검토한 뒤 커밋하는 흐름을 유지하세요.

- 컴포넌트 단위로 작업 요청할 것
- 코드 생성 후 반드시 동작 확인 후 다음 단계로 진행
- 초보자가 이해할 수 있는 간결한 코드 우선

---

## 배포

- 플랫폼: **Render** 또는 **Vercel / GitHub Pages**
- `index.html` (Vite 빌드 결과)은 반드시 루트 디렉토리에 위치

## 디자인 피크마 링크
https://www.figma.com/design/WE6mqzQqDDnXWLZyel3Dw2/%EC%9B%90%ED%83%9C%EB%A6%BC-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=163-772&m=dev
