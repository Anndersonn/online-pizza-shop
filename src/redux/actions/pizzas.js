import axios from 'axios';

export const fetchPizzas = () => dispatch => { // Возвращает ассинхронную функцию. Я дожидаюсь запрос и сохраняю все данные с помощью dispatch(setPizzas()) в обьект setPizzas
    axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzas(data)))
}

export const setPizzas = (items) => (
    {
        type: 'SET_PIZZAS', // ключ, по которому я понимаю что мне приносит dispatch
        payload: items // в items падают данные, которые я потом рендерю на странице
    }
)