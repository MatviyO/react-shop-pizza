import axios from "axios";

export const setLoaded = (value) => ({
    type: 'SET_LOADED',
    payload: value
})


export const  fetchPizzas =  (sortBy, category) => async (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false
    });
    await axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}
    &_sort=${sortBy.type}&_order=desc`)
        .then(({data}) => {
            console.log(data)
            dispatch(setPizzas(data));
        });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

