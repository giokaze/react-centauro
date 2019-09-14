import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {extendObservable} from 'mobx';

import './home.css';
import logo from '../../assets/logo.svg';

//router
import views from 'config/views';

class Home extends Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      username: ''
    });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const {username} = this;
    const {store} = this.props;
    const {router: {goTo}} = store;
    goTo(views.user, username, store)
  }

  onChange = e => {
    const { name, value } = e.target;
    this[name] = value;
  }
  
  render() {
    
    const {username} = this;

    return (
        <div className="login-content">
          <form onSubmit={this.onSubmit}>
              <img src={logo} alt="github"/>
              <input type="text" placeholder="Digite o usuário do Github" name="username" value={username} onChange={this.onChange}></input>
              <button>
                go to usergit
              </button>
          </form>
        </div>
    );
  }
}

export default inject('store')(observer(Home));

