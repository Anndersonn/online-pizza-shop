import React, { useEffect, } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import './scss/app.scss'
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzas(data)))
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
