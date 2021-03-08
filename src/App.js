import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './scss/app.scss'
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';



function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas))

  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={() => <Home items={pizzas} />} />
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
