import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LeftNav from './common/leftNav';
import {HashRouter, Route} from 'react-router-dom';
import Seller from './pages/seller';
import Home from './pages/home/Home';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <div>
            <HashRouter>
              <LeftNav/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/seller' exact component={Seller}></Route>
            </HashRouter>
          </div>
        </Provider>
      </Fragment>
    )
  }
}


export default App;
