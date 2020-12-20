const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    tottalPricce: getTotalPrice(currentPizzaItems)
                }

            }}
            const items = Object.values(newItems).map(obj => obj.items);
            const allPizas = [].concat.apply([], items);
            const tottalPricce = getTotalPrice(allPizas)

            return {
                ...state,
                items: newItems,
                totalCount: allPizas.length,
                tottalPricce
            }

        default:
            return state;

    }
}

export default cartReducer;
