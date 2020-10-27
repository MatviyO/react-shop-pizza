import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://localhost:3001/pizzas')
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

