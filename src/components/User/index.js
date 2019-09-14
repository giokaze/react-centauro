import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import views from 'config/views';

class User extends Component {
  render() {

    const {store} = this.props;
    const {router: {params, goTo}} = store;

    console.log(params);

    return (
      <div>
        <p>{params.username}</p>
        <button onClick={() => goTo(views.home, store)}></button>
      </div>
    );
  }
}

export default inject('store')(observer(User));

