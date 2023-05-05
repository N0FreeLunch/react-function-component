## useState

- useState를 사용할 때 변수를 const로 사용한다.
- 리액트의 핵심은 스테이터스를 변경하는 것인데 어떻게 불변인 const의 값을 바꿀 수 있을까?
- 리액트가 랜더링 될 때는 함수 컴포넌트를 다시 호출하는 방식으로 호출한다고 봐야 한다.
- 컴포넌트가 호출되면서 useState의 두 번째 인자인 초기값을 호출하는 것이 아닌 변경된 스테이터스 값을 전달 받아 초기화가 이뤄진다고 볼 수 있다.
- useState의 setState 함수는 랜더링 과정을 발동시키는 트리거이다. 트리거가 발동이 되면 리액트는 랜더링을 다시 하려고 한다.
- 함수 컴포넌트가 재실행 되고 const인 state에는 변경이후의 값을 넣고 return으로 JSX를 React-element를 만들고 변경 값을 이전 React-element 엘리먼트 트리와 비교를 한 후 렌더링을 한다.