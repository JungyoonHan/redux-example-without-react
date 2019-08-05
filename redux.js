// 각 DOM elements에 대한 reference
const elNumber = document.getElementById('number');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

// Define action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action object를 만들어주는 action 생성 함수
const increment = () => ({type : INCREMENT});
const decrement = () => ({type : DECREMENT});

// 초깃값 설정
const initialState = {number : 0};

/*
    This is redux function.
    state와 action을 parameter로 받아옴
    그리고 그에 따라 다음 상태롤 정의 한 다음 반환
*/

// state = initialState는 파라미터의 기본값
const counter = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case INCREMENT:
            return {number : state.number+1};
        case DECREMENT:
            return {number : state.number-1};
        default:
            return state;
    }
}

// store 만들 땐 createStore에 redux function 넣어서 호출
const {createStore} = Redux;
const store = createStore(counter);

// state가 변경 될 때 마다 호출시킬 listener function
const render = () => {
    elNumber.innerText = store.getState().number;
    console.log("execute");
}

// store에 구독을 하고 뭔가 변화가 있다면, render함수 실행
store.subscribe(render);

//초기 렌더링을 위해 직접 실행
render();

// button + event
// store에 변화를 일으키라고 할 때에는 dispatch function에 action object를 넣어서 호출

btnIncrement.addEventListener('click',() => {
    store.dispatch(increment());
})
btnDecrement.addEventListener('click',() => {
    store.dispatch(decrement());
})
