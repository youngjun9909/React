"use strict";
//! 타입 스크립트를 사요한 카운터 제작
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
// 카운터 숫자를 생성하는 함수
// : 객체값을 생성해내는 class의 생성자와 동일
function createCounter() {
    var state = { count: 0 };
    function increment() {
        state.count += 1;
        displayCount();
    }
    function decrement() {
        state.count -= 1;
        displayCount();
    }
    function displayCount() {
        var counterValue = document.getElementById('counterValue');
        if (counterValue) {
            counterValue.textContent = "Counter: ".concat(state.count);
        }
    }
    return { increment: increment, decrement: decrement };
}
// createCounter 함수 호출
var counter = createCounter();
(_a = document.getElementById('incrementBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    counter.increment();
});
(_b = document.getElementById('decrementBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    counter.decrement();
});
