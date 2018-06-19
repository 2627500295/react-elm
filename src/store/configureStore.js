import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import composeEnhancers from '@/store/composeEnhancers';
import reducers from '@/reducers';

function configureStore() {
  // 创建中间件
  const sagaMiddleware = createSagaMiddleware();

  // 中间件列表
  const middlewares = [
    sagaMiddleware,
    loggerMiddleware,
  ];

  // 创建 store
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  store.run = sagas => sagaMiddleware.run(sagas);
  return store;
}

export default configureStore;
