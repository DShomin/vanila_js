# Momentum 클론

이 프로젝트는 Chrome의 Momentum 확장 프로그램을 모방한 웹 애플리케이션입니다. 시계, 할 일 목록, 날씨 정보, 랜덤 명언 등의 기능을 제공합니다.

## 기능

- 실시간 시계
- 사용자 이름 저장 및 인사 메시지
- 할 일 목록 (추가 및 삭제 가능)
- 랜덤 배경 이미지
- 랜덤 명언
- 현재 위치 기반 날씨 정보 (OpenWeatherMap API 사용)

## 사용 방법

1. 이 저장소를 클론하거나 다운로드합니다.
2. `index.html` 파일을 웹 브라우저에서 엽니다.
3. 처음 사용 시 이름을 입력하라는 메시지가 표시됩니다.
4. 날씨 정보를 보려면 OpenWeatherMap API 키가 필요합니다:
   - [OpenWeatherMap](https://openweathermap.org/)에서 무료 계정을 만들고 API 키를 발급받습니다.
   - 애플리케이션에서 API 키 입력 요청이 표시되면 발급받은 키를 입력합니다.

## 프로젝트 구조

- `index.html`: 메인 HTML 파일
- `css/style.css`: 스타일시트
- `js/`:
  - `clock.js`: 시계 기능
  - `greetings.js`: 사용자 이름 및 인사 기능
  - `todo.js`: 할 일 목록 기능
  - `quotes.js`: 랜덤 명언 기능
  - `background.js`: 랜덤 배경 이미지 기능
  - `weather.js`: 날씨 정보 기능

## 개인정보 보호

- 사용자 이름과 할 일 목록은 브라우저의 로컬 스토리지에 저장됩니다.
- OpenWeatherMap API 키는 로컬 스토리지에 저장되며, 서버로 전송되지 않습니다.

## 온라인 접속

이 프로젝트는 GitHub Pages를 통해 호스팅되고 있습니다. 다음 링크를 통해 온라인으로 접속할 수 있습니다:

[Momentum 클론 접속하기](https://dshomin.github.io/vanila_js/momentum/index.html)

