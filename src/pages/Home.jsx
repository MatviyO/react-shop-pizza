import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryName = ['Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}]

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);

    useEffect(() => {
        if (items.length) {
            dispatch(fetchPizzas());
        }
    }, []);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory}
                            items={categoryName}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </div>
    );
}

export default Home;
