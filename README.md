# Assignment 04 · HTML Form & CSS

## Assignment 2-2. HTML Form & CSS

배산 · 22300344 · 02분반

### 실습 페이지

- [form1.html](form1.html): 브라우저 기본 스타일로 HTML Form 구조 확인
- [form1_css.html](form1_css.html): 같은 Form에 직접 작성한 CSS 적용
- [index.html](index.html): 기존 동아리 가입 신청서에서 두 실습 페이지로 이동
- `form.css`: 입력 요소, 폼 영역, 반응형 배치, focus/hover 스타일
- `js/form.js`: 두 페이지의 입력 확인 및 초기화 처리

Clone Coding 원본: https://getbootstrap.com/docs/5.2/examples/checkout/

원본의 주문자 이름, 사용자 이름, 이메일, 주소, 국가·지역·우편번호,
체크박스, 결제 방법 라디오 버튼, 주문 요약 구조를 참고했다.
도서 주문서로 내용을 바꾸고 배송 희망일, 포장 색상, 수령 장소, 요청사항을 추가했다.
카드 상세 정보와 쿠폰 기능은 생략했다. Bootstrap CSS는 사용하지 않았다.
실제 주문·결제·서버 저장 없이 브라우저 기본 검증과 완료 안내만 실행한다.

### Weekly Review

#### Key Learning

1. `form`은 입력 요소를 묶고, `name`은 전송 데이터의 이름을 지정한다. `label`의 `for`는 입력 요소의 `id`와 연결한다.
2. 같은 `name`의 radio는 하나만 선택하며 checkbox는 각각 선택할 수 있다. `required`, `type`, `pattern`으로 기본 입력 검증을 지정한다.
3. HTML은 구조와 의미를 정의하고 CSS는 색상, 간격, 배치와 상태 표현을 담당한다. 같은 구조에 CSS를 적용해 차이를 비교할 수 있다.

#### Form Elements

라디오 그룹을 한 항목으로 세어도 총 16개 입력 항목이다.

| 요소 | 항목과 용도 |
| --- | --- |
| `input type="text"` | 이름, 성, 사용자 이름, 주소, 상세 주소, 우편번호, 수령 장소 |
| `input type="email"` | 이메일 형식 검증 |
| `input type="date"` | 배송 희망일 선택 |
| `input type="checkbox"` | 동일 주소 여부, 선물 포장 선택 |
| `input type="radio"` | 신용카드·체크카드·계좌이체 중 하나 선택 |
| `select`, `option`, `optgroup` | 국가와 지역 선택, 지역 선택지 그룹화 |
| `textarea` | 최대 300자 배송 요청사항 |
| `input type="color"` | 포장 색상 선택 |
| `datalist` | 수령 장소 추천과 직접 입력 |
| `fieldset`, `legend` | 주문자·배송 옵션·결제 방법 그룹화 |
| `button` | 제출 검증 및 초기화 |

#### HTML vs CSS

`form1.html`과 `form1_css.html`의 본문 및 동작은 같다.
CSS 버전은 별도 스타일시트를 연결해 `color`, `background-color`, `border`,
`border-radius`, `padding`, `margin`, `width`, `display`를 적용했다.
넓은 화면에서는 Form과 주문 요약을 나란히 배치하고 760px 이하에서는 한 열로 배치한다.
입력 요소의 focus와 버튼·링크의 hover 상태도 구분했다.

#### Problem & Solution

- 여러 결제 방법을 동시에 선택하지 않도록 모든 radio의 `name`을 `payment`로 통일했다.
- 우편번호의 앞자리 0을 유지하도록 number 대신 text와 `inputmode="numeric"`, `pattern="[0-9]{5}"`를 사용했다.
- 체크박스와 radio까지 너비 100%가 적용되지 않도록 CSS 선택자에서 제외했다.
- 정적 페이지에 실제 제출 서버가 없어 submit 이벤트의 기본 동작을 취소하고 검증 완료 메시지를 표시했다.

#### Reflection (제출 전 본인 경험에 맞게 검토)

label 연결과 fieldset 구성이 디자인과 별개로 Form의 사용성을 높인다는 점을 배울 수 있다.
브라우저 기본 검증과 서버 검증의 역할 차이를 더 알아보고 싶다.

### Weekly Question — AI 생성 초안

1. **객관식:** 결제 방법 세 가지 중 하나만 선택하도록 radio 버튼을 구성할 때 같아야 하는 속성은?
   - ① id ② name ③ value ④ placeholder
   - **정답: ② name.** 같은 form 안에서 같은 name을 가진 radio 버튼은 하나의 선택 그룹이 된다. id는 각 요소를 구분한다.
2. **OX:** `input:focus`는 입력 요소 위에 마우스 포인터가 올라가 있는 동안에만 적용된다.
   - **정답: X.** focus는 클릭이나 Tab 이동 등으로 입력 요소에 초점이 있을 때 적용된다. 마우스 포인터가 올라간 상태는 hover다.

문제 제출: https://forms.gle/QoxoyWP8ZiJTyJu67 (아직 제출하지 않음)

### 저장소 및 배포

- 학교 제출용 (`origin`): https://github.com/2026-2-OSS/assign04-c02-22300344
- 개인용 (`personal`): https://github.com/distort1074/assign04-c02-22300344
- 학교 저장소를 먼저 clone한 뒤 개인 저장소의 기존 main 이력을 가져왔다.
- 기존 동아리 가입 신청서와 `application-viewer.html`을 유지하고 Form 실습 페이지를 추가했다.
- 변경사항은 같은 main 브랜치를 `git push origin main`, `git push personal main`으로 각각 반영한다.
- 새 Netlify Project 연결 및 배포 URL 확인은 아직 필요하다.
- 과제 본문은 Netlify, 제출내용은 Vercel을 지정하므로 최종 제출 플랫폼 확인이 필요하다.
### 참고 자료

- https://www.w3schools.com/html/html_forms.asp
- https://www.w3schools.com/css/css_form.asp

---

