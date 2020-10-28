import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, PizzaLoadingBlock} from "../components";
import Index from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
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
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const { category, sortBy} = useSelector(({filters}) => filters);


    useEffect(() => {
        if (items.length) {
            dispatch(fetchPizzas());
        }
    }, [category]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);
    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClickCategory={onSelectCategory}
                            items={categoryName}/>
                <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(obj => <Index key={obj.id} isLoading={true} {...obj} />)
                : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    );
}

export default Home;
