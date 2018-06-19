import { compose } from 'redux';

function composeEnhancers(...enhancers) {
  const COMPOSE = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return COMPOSE(...enhancers);
}

export default composeEnhancers;
