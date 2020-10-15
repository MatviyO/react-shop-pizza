import axios from "axios";

export const fetchPizzas = () => {
    axios.get('http://localhost:3001/pizzas')
        .then(({data}) => {
            setPizzas(data)
        });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});



