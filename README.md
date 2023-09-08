# 원티드 프리온보딩 인턴십 프론트엔드 - 3주차 과제

## 주제

[한국임상정보](https://clinicaltrialskorea.com/) 홈페이지에서 `질환명 검색 및 검색어 추천 기능 구현`

![logo](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-3-7/assets/52682692/8c1d916a-2d12-41ee-9f2d-bced871a7d97)

## 프로젝트 소개

원티드 프리온보딩 프론트엔드 - 3주차 과제 내용을 구현한 Search Clinical Trial 프로젝트입니다!

[목표] [한국임상정보](https://clinicaltrialskorea.com/) 클론하여 검색 및 캐싱 기능을 구현한 웹 사이트 구축

[요구사항] [링크](https://sonicrok.notion.site/Week-3-b4b432b8e53e4a50b83a1c969c7bd2d9?pvs=4)

## 지원자 소개

<img src="https://avatars.githubusercontent.com/SeungrokYoon" width="130" height="130">

[@SeungrokYoon](https://github.com/SeungrokYoon)

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

### Network & Route

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

## 프로젝트 실행 방법

다음 명령어를 사용하여 프로젝트를 clone 하시거나 (git이 설치되어 있어야 합니다.)

우측 상단의 `Code` 버튼 -> `Download ZIP` 를 눌러 프로젝트를 다운로드 하실 수 있습니다.

```shell
git clone https://github.com/SeungrokYoon/search-clinical-trial.git
```

프로젝트 다운로드가 끝났다면, 해당 디렉토리로 이동하여 프로젝트 실행에 필요한 패키지를 설치합니다.

```shell
npm install
```

패키지 설치가 끝났다면, 다음 명령어를 사용하여 프로젝트를 실행하실 수 있습니다!

```shell
npm start
```

### 로컬 실행

1. env 파일 사용시

- `.env.local` 파일을 생성하고,

```text
REACT_APP_BASE_URL = https://json-server-6gjfchfpb-wanted-team7.vercel.app
```

를 입력 후 `npm start`

2. env 파일을 사용 안하고, 로컬 JSON-server 구동

```
//두 개의 쉘에서 아래 스크립트를 각각 실행해줍니다.
npm start
npm run server-start
```

## 배포 링크

배포 링크: [https://search-clinical-trial.vercel.app](https://search-clinical-trial.vercel.app)

배포는 `vercel` 서비스를 사용했습니다.

서버 또한 `vercel`을 통해 `JSON-SERVER`를 배포하여 사용했습니다.

서버 레포지토리는 [여기](https://github.com/wanted-pre-onboarding-team-12th-7/json-server)입니다!

## 데모영상

![final](https://github.com/SeungrokYoon/search-clinical-trial/assets/44149596/683e8800-cd0b-4ea5-800f-81155ddb00ae)

## 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

### 1-1. 검색창 컴포넌트 - Search 설계

리덕스 툴킷으로 컴포넌트의 상태를 관리하였습니다.

![image](https://github.com/SeungrokYoon/search-clinical-trial/assets/44149596/46191c1f-f2ef-411f-a827-91de3623f4ea)

### 1-2 서버 데이터 호출

- `useSuggestion` 커스텀 훅에서 데이터, 로딩, 에러상태를 리턴합니다.

## 2. API 호출 별 로컬 캐싱 구현

![image](https://github.com/SeungrokYoon/search-clinical-trial/assets/44149596/042a915f-25d5-4f4d-9c72-63c09b6c9a80)

### 2-1. 캐시를 어디에 저장 방법?

> **1) LocalStorage**
>
> 검색어 기록을 남길 것이라면 localStorage를 사용하는게 맞으나, 검색어의 결과를 브라우저가 닫혀도 저장할 필요는 없다 생각하여 localStorage는 선택지에서 제외하였습니다.
> 또한 로컬 스토리지에서 언제 데이터를 지워야 할 지를 고려하면서 로컬 스토리지의 사용에 의문을 품게 되었습니다.
>
> **2) Redux Slice**
>
> 두 번째로 고려했던 방법은 Redux Slice였습니다. 인 메모리 방식의 전역 캐시 상태를 구독하는 것이 직관적으로 생각해 보았을 때 좋은 해결책으로 보였습니다.
> 하지만 구현 과정에서, 어떤 타입의 데이터가 캐시 객체에 들어올지 예측하기 어려워 리덕스 상태로 캐시를 관리하는 것에 무리가 있음을 깨달았습니다.
>
> **2) Memory**
>
> 결국, 클래스 객체 형태로 메모리에 직접 캐시를 저장하기로 결정하였습니다.

### 2-2. 캐시 구성

![Untitled](https://github.com/SeungrokYoon/search-clinical-trial/assets/44149596/65b128e2-1a59-48aa-8d62-80f422c5c3ea)

[React-Query 공식블로그 - Inside React Query](https://tkdodo.eu/blog/inside-react-query) 글에서 영감을 받았습니다.

> `CacheStore` : 단순한 `Map` 객체입니다. 검색어와 검색 결과가 각각 키:값 쌍으로 저장되게 됩니다.
>
> `CacheClient`: CacheStore를 다양한 매서드를 통해 조작하는 클래스입니다. CacheStore는 private하게 관리됩니다.
>
> `CacheContextProvider` : 컨텍스트 API를 통해 전역으로 캐시 클라이언트에 접근할 수 있도록 맥락을 설정해줍니다.
>
> `useCacheContext` : 하위 컴포넌트들에서 해당 훅을 통해 캐시 클라이언트에 접근하여 정해진 인터페이스를 통해 캐시를 조작할 수 있습니다.

### 2-3. Expire time 구현

- 캐시 데이터 저장 시, CacheStore 생성자 함수에 전달된 `expireMinute` 을 `ms` 로 변환하여 `Date.now()`와 합쳐 저장합니다.
- 특정 쿼리키 데이터의 만료시간 = `expireMinute * 60000` + `현재 시간`
- 비동기 요청함수가 실행되면, 캐시를 먼저 검사하여 유효한(expired 되지 않은) 캐시를 리턴받아 데이터로 업데이트해줍니다.
- 만약 캐시가 존재하지 않으면 그대로 네트워크 함수를 호출합니다.

![스크린샷 2023-09-08 오후 11 02 13](https://github.com/SeungrokYoon/search-clinical-trial/assets/44149596/7e27a167-65aa-4ba1-a660-d132b20d65f6)

- 설정해놓은 1분이 지나니, `expired`되어 새로 데이터를 호출해옵니다.

## 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- 디바운스를 구현하였습니다.
- 해당 훅은 Search 컴포넌트 하위의 SearchInput에서 사용됩니다.
- `useDebounce`는 네트워크 호출을 하는 콜백을 인자로 받아, 디바운스된 콜백 함수를 인자로 리턴해줍니다.

```ts
function SearchInput({ focus, onSearch, changeFocus }: SearchInputProps) {
  const { searchTerm } = useAppSelector(selectSearch)
  const dispatch = useAppDispatch()

  const handleSearch = useDebounce(
    (term: string) => {
      onSearch(term)
    },
    DEBOUNCE_INTERVAL,
    []
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    dispatch(setSearchTerm(value))
    handleSearch(value)
  }

  const blurWithEmptyInput = focus < -1 && searchTerm.length === 0

  return (
    <SearchInputWrapper>
      <Container>
        <InputWrapper>
          {blurWithEmptyInput && (
            <PlaceHolderBox>
              <ResultSearchIcon height={18} width={18} />
              질환명을 입력해주세요
            </PlaceHolderBox>
          )}
          <label htmlFor="searchInput">
            <StyledInput
              name="q"
              type="search"
              value={searchTerm}
              onBlur={() => changeFocus(-2)}
              onChange={handleChange}
              onFocus={() => changeFocus(-1)}
            />
          </label>
        </InputWrapper>
        <ButtonWrapper>
          <SearchIconButton
            onClick={() => {
              onSearch(searchTerm)
            }}
          />
        </ButtonWrapper>
      </Container>
    </SearchInputWrapper>
  )
}

export default SearchInput

```

## 3-1. useDebounce hook을 통해 매 입력마다 호출 방지

- `useDebounce` 훅은 디바운스된 값을 리턴하는 훅으로 처음에 설계를 하였습니다.
- 그러나 디바운스된 값을 리턴하게되면, 사용하는 측에서 `useEffect`를 사용하여 디바운스된 값의 변동을 감지하는 로직이 필요해졌습니다.
- 그래서 콜백함수를 인자로 받아, 디바운스가 적용이된 `함수`를 리턴하는 방식으로 구현하였습니다.

## 4. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- `Search` 컴포넌트가 마운트되었을 때 window에 keydown 이벤트핸들러를 등록하여 관련 키보드 동작을 구현했습니다.
- 해당 동작관련 로직들은 `useKeyboardNavigation`에서 관리합니다.

### 4-1. 사용 방법

> - `↑` : 추천 검색어의 이전(위) 요소로 이동합니다. 첫 번째 요소에서 입력 시 추천 검색어 목록을 닫습니다.
> - `↓`: 추천 검색어의 다음(아래) 요소로 선택 이동합니다. 마지막 요소에서 입력 시 동작하지 않습니다.
> - `esc`: 추천 검색어 목록을 닫습니다.
> - 마우스 호버시 키보드와 동일하게 추천 검색어 요소를 선택 이동 가능합니다.

## 5. 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜instance.ts
 ┃ ┗ 📜suggestion.ts
 ┣ 📂components
 ┃ ┣ 📂AsyncButton
 ┃ ┃ ┗ 📜AsyncButton.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜HeaderIconButton.tsx
 ┃ ┣ 📂Search
 ┃ ┃ ┣ 📜ResultSearchIcon.tsx
 ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┣ 📜SearchIcon.tsx
 ┃ ┃ ┣ 📜SearchIconButton.tsx
 ┃ ┃ ┣ 📜SearchInput.tsx
 ┃ ┃ ┣ 📜SearchResult.tsx
 ┃ ┃ ┗ 📜searchSlice.ts
 ┃ ┗ 📂common
 ┃ ┃ ┗ 📜BaseButton.tsx
 ┣ 📂context
 ┃ ┗ 📜cacheContext.ts
 ┣ 📂hooks
 ┃ ┣ 📜useCacheContext.ts
 ┃ ┣ 📜useDebounce.ts
 ┃ ┣ 📜useKeyboardNavigation.ts
 ┃ ┗ 📜useSuggestion.ts
 ┣ 📂pages
 ┃ ┣ 📜NotFoundPage.tsx
 ┃ ┗ 📜RootPage.tsx
 ┣ 📂provider
 ┃ ┗ 📜CacheContextProvider.tsx
 ┣ 📂store
 ┃ ┣ 📜cacheClient.ts
 ┃ ┣ 📜cacheStore.ts
 ┃ ┣ 📜reduxHooks.ts
 ┃ ┗ 📜reduxStore.ts
 ┣ 📂style
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜DefaultTheme.ts
 ┃ ┃ ┣ 📜GlobalStyle.ts
 ┃ ┃ ┗ 📜styled.d.ts
 ┃ ┗ 📂constants
 ┃ ┃ ┣ 📜color.ts
 ┃ ┃ ┣ 📜flex.ts
 ┃ ┃ ┗ 📜fontsize.ts
 ┣ 📂utils
 ┃ ┗ 📜debounce.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```
