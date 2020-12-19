const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? []
                    : [...state.items[action.payload.id], action.payload
                    ]

            }
            const allPizas = Object.values(newItems).flat();
            const tottalPricce = allPizas.reduce((sum, obj) => obj.price + sum, 0)

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
