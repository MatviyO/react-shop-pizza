import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Header} from './components';
import {Home, Cart} from "./pages";
import {Route} from 'react-router-dom';

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then(({data}) => setPizzas(data))
    }, [])

  return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <Route path="/" exact render={() => <Home pizzas={pizzas} /> } />
              <Route path="/cart" exact component={Cart} />
          </div>
      </div>
  );
}

export default App;
