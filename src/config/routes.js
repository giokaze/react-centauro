import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Login from '../pages/login/Login';
import Main from '../pages/main/Main';

const routes = {
    login: new Route({
      path: '/',
      component: <Login/>
    }),
    user: new Route({
      path: '/user/:username',
      component: <Main/>
    })
};

export default routes;