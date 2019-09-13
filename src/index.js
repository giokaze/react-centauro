import React from 'react';
import ReactDOM from 'react-dom';
import {MobxRouter, startRouter} from 'mobx-router';

import './index.css';

//mobx
import {Provider} from 'mobx-react';
import store from 'mobx/store';

//router
import routes from 'config/routes';
startRouter(routes, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>{store.app.title}</h1>
      <button onClick={() => store.router.goTo(routes.login)}> go home</button>
      <MobxRouter/>
    </div>
  </Provider>, document.getElementById('root')
)