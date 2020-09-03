import React, {useEffect, useState} from 'react';
import {Header} from './components';
import {Home, Cart} from "./pages";
import {Route} from 'react-router-dom';

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/pizzas').then((res) => res.json()).then(data => {
            setPizzas(data.pizzas);
        })
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
