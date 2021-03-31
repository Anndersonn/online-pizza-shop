import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const fetchPizzas = (sortBy, category) => dispatch => { // Возвращает ассинхронную функцию. Я дожидаюсь запрос и сохраняю все данные с помощью dispatch(setPizzas()) в обьект setPizzas
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => dispatch(setPizzas(data)))
}

export const setPizzas = (items) => (
    {
        type: 'SET_PIZZAS', // ключ, по которому я понимаю что мне приносит dispatch
        payload: items // в items падают данные, которые я потом рендерю на странице
    }
)