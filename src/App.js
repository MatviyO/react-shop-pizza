import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from "react-redux";

import {Header} from './components';
import {Home, Cart} from "./pages";
import {setPizzas } from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then(({data}) => dispatch(setPizzas(data)));
    }, []);


    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" exact component={Home} />
                <Route path="/cart" exact component={Cart} />
            </div>
        </div>
    )
}


export default App;
