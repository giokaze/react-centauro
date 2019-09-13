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
    component: <User/>
  })
};
export default views;