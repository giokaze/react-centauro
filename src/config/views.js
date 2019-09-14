import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Home from 'components/Home';
import User from 'components/User';

const views = {
  home: new Route({
    path: '/',
    component: <Home/>
  }),
  user: new Route({
    path: '/user/:username',
    component: <User/>,
    onEnter: (route, params) => {
      console.log('entering user profile!', params);
    },
    beforeExit: () => {
      console.log('exiting user profile!');
    },
    onParamsChange: (route, params, store) => {
      console.log('params changed to', params);
    }
  })
};
export default views;