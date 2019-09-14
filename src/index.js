import React from 'react';
import ReactDOM from 'react-dom';
import {MobxRouter, startRouter} from 'mobx-router';
import 'index.css';

//mobx
import {Provider} from 'mobx-react';
import store from 'mobx/store';

//router
import views from 'config/views';
startRouter(views, store);

ReactDOM.render(
  <Provider store={store}>
      <MobxRouter/>
  </Provider>, document.getElementById('root')
)