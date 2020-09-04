
import {combineReducers} from "redux";
import pizzasReducer from "./pizzas";
import filterReducer from "./filters";

const rootReducer = combineReducers({
    filers: filterReducer,
    pizzas: pizzasReducer
});

export default rootReducer;
