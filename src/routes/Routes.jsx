import React from 'react';
import { Router } from '@reach/router';

import Home from '@/views/Home';
import Search from '@/views/Search';
import Discover from '@/views/Discover';
import Order from '@/views/Order';
import Profile from '@/views/Profile';
import Address from '@/views/Profile/Address';
import Login from '@/views/Login';
import Exchange from '@/views/Exchange';
import SuperVip from '@/views/SuperVip';
import NotFound from '@/views/NotFound';

const Routes = () => (
  <Router>
    <Home path='/' />
    <Discover path='discover' />
    <Order path='order' />
    <Profile path='profile'>
      <Address path='/address' />
    </Profile>
    <Login path='login' />
    <Exchange path='exchange' />
    <SuperVip path='supervip' />
    <Search path='search' />
    <NotFound default />
  </Router>
);

export default Routes;
