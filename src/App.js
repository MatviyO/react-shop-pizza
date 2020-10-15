import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from "./pages";
import {fetchPizzas } from "./redux/actions/pizzas";

function App() {

    useEffect(() => {
        fetchPizzas();
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
