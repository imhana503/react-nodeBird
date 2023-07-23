import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './../reducers';
import rootSaga from './../sagas';

const configuerStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware,];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middleware))
  : composeWithDevTools(applyMiddleware(...middleware))
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store
}

const wrapper = createWrapper(configuerStore, {
  debug:process.env.NODE_NEW === 'development',
});

export default wrapper;