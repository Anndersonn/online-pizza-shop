import { createStore } from 'redux';

function hello(state, action) {
    console.log('kek')
}

const store = createStore(hello)

export default store;