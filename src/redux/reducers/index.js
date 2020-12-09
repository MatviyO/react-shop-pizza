
import {combineReducers} from "redux";
import pizzasReducer from "./pizzas";
import filterReducer from "./filters";
import cartReducer from './cart'

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
});

export default rootReducer;
