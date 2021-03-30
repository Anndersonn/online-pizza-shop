import React, { useCallback, useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{ name: 'популярности', type: 'popular' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'alphabet' }]

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [dispatch]);

    const { items } = useSelector(state => {
        return {
            items: state.pizzas.items,
        }
    });

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoryItems} />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </div>
    );
}

export default Home;