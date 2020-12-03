import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watchAllSagas from './sagas';
import reducers from './reducers';

const configureStore = initialState => {
  const saga = createSagaMiddleware();

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancer(applyMiddleware(saga));

  const store = createStore(reducers, initialState, enhancer);

  saga.run(watchAllSagas);

  return store;
}

export default configureStore
