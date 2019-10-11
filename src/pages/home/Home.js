import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.less';

class Home extends Component {

  render(){
   
    
    return (
      <div className={'normal'}>
        <div className={'welcome'}>
        </div>
        <ul className={'list'}>
          <li>Welcome to <code>douDaDa</code> and have fun.</li>
          <li>
              <Link to='/seller'>
                Getting Started
              </Link>
          </li>
        </ul>
      </div>
    )
  }
  
}

export default Home;