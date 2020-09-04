const initialState = {
    items: [],
    isLoaded: false
}

const pizzasReducer = (state = initialState, action) => {
    console.log(action.type)
    if  (action.type === 'SET_PIZZAS') {
        return {
            ...state,
           items: action.payload
        }
    }
    return state;
}

export default pizzasReducer;
