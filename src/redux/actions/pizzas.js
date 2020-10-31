import axios from "axios";

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false
    });
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}
    &_sort=${sortBy}&_order=desc`)
        .then(({data}) => {
            dispatch(setPizzas(data));
        });
}

export const setPizzas = (items) => ({
    type: 'SET_LOADED',
    payload: items
});

export const setLoaded = value => ({
    type: 'SET_LOADING',
    payload: value
})

