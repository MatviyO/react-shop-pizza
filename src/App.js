import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import {Header} from './components';
import {Home, Cart} from "./pages";
import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3001/pizzas')
            .then(({data}) => this.props.savePizzas(data))
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" exact render={() => <Home items={this.props.items} /> } />
                    <Route path="/cart" exact component={Cart} />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
       items: state.pizzas.items
    }
}
const mapDispatchToProps = (dispatch) => {
   return {
       savePizzas: (items) => dispatch(setPizzasAction(items))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
