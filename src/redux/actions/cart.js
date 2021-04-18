export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const removeItemCart = (id) => ({
    type: 'REMOVE_ITEM_CART',
    payload: id
})

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id
})

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
})