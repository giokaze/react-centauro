import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'mobx-router';
import views from 'config/views';

class Home extends Component {
  render() {

    const {store} = this.props;
    const {router: {goTo}} = store;

    return (
      <div>
        <h3> Home </h3>

        <button onClick={() => goTo(views.user, {usergit: 'kitze'}, store)}>
          go to usergit
        </button>

      </div>
    );
  }
}

export default inject('store')(observer(Home));

