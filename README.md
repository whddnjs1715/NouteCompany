| 이름 | 김종원 |

<br>

## ✨ 프로젝트 실행 방법

```bash
# 설치방법
 $ yarn install 

# 실행방법
 $ yarn start
```

## ✨ Coding Convention

```
[feat] : 새로운 기능 추가
[fix] : 버그 수정
[docs] : 문서 추가 및 변경
[style] : 코드 포맷팅, 로직의 변화는 없이 띄어쓰기나 탭 문자 등의 사소한 변화
[refactor] : 리팩토링
[test] : 테스트 코드 수정 및 변경
[chore] : 그 외 사소한 변경
```

## ✨ 질문

```
1. 작성한 테스트 코드에서 개선되어야 할 점이 무엇인가요?
 - 일단은 폴더 구조를 개선해야할 것 같습니다.
    상세페이지와 상품리스트 부분에서 사용하는 컴포넌트를 분리해야 할 것 같습니다.
 - 상품리스트를 화면에서 보여줄때 4개씩 보여주기 위해서 그리드로 작성했는데
   이렇게 하다보니까 다른 상단 탭을 누르다 보면 화면리스트에 5개씩 상품이 보이는 경우가 생깁니다.
   이런 경우에는 api로 받아온 데이터를 배열에 담아 slice를 통해 4개씩 보여주는 경우와
   데이터 배열을 map을 통해 4개씩 화면에 보여주면 코드가 개선이 될것 같습니다.
2. 테스트를 진행하면서 어떤 부분이 가장 어려웠나요?
 - style 주는 부분이 시간이 많이 소요되었습니다.
    Figma에서 보여지는 style이 꽤 있어서 style을 작성하다보니 시간이 많이 소요되었습니다.
3. 테스트 코드에서 가장 자신있는 부분은 어디인가요?
 - 상품리스트 부분이 잘 구현된것 같습니다.
    useEffect hook을 사용하여 axios를 통해 데이터를 가져와서 화면에 보이도록 UI를 구성하였습니다.
 - 페이징 처리도 잘 된 것 같습니다.
    상품리스트에서 상품을 클릭하면 해당 상품의 상세페이지로 이동됩니다.
```

## 📝 폴더구조

```bash
src
 ┣ api
 ┃  ┣ index.js
 ┣ components
 ┃  ┣ body
 ┃  ┃  ┣ DetailBody.js
 ┃  ┃  ┣ ListBody.js
 ┃  ┃  ┗ ProductList.js
 ┃  ┣ footer
 ┃  ┃  ┗ Pagination.js 
 ┃  ┣ header
 ┃  ┃  ┗ Header.js 
 ┣ pages
 ┃  ┗ Main.js
 ┣ routes
 ┃  ┗ DetailPage.js
 ┃  ┗ ListPage.js
 ┣ App.js
 ┣ index.js
 ┗ triple2x.png

```