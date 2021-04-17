import React, { useCallback, useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{ name: 'популярности', type: 'popular', order: 'desc' }, { name: 'цене', type: 'price', order: 'desc' }, { name: 'алфавиту', type: 'name', order: 'asc' }]

function Home() {
    const dispatch = useDispatch();
    const { category, sortBy } = useSelector(state => {
        return {
            category: state.filters.category,
            sortBy: state.filters.sortBy,
        }
    });
    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [sortBy, category]);

    const { items } = useSelector(state => {
        return {
            items: state.pizzas.items,
        }
    });
    const { isLoaded } = useSelector(state => {
        return {
            isLoaded: state.pizzas.isLoaded,
        }
    });

    const cartItems = useSelector(state => state.cart.items)

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback(type => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryItems} />
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(obj => <PizzaBlock onClickAddPizza={handleAddPizza} addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} key={obj.id} {...obj} />) : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    );
}

export default Home;