import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Routes from '@/routes';

@hot(module)
class App extends Component {
  render = () => <Routes />;
}

export default App;
