const initialState = {
    items: [],
    isLoaded: false
}

const pizzasReducer = (state = initialState, action) => {
    console.log(action.type)
    if  (action.type === 'SET_PIZZAS') {
        return {
            ...state,
           items: action.payload,
            isLoaded: true
        }
    }
    return state;
}

export default pizzasReducer;
