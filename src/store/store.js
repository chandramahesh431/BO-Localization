import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import actionWatcher from "../actionWatcher";
import { createLogger } from "redux-logger";

import localizationReducer from "./../reducers/localizeRuducer";

const rootReducer = combineReducers({ localizationReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareLogger = createLogger({ collapsed: true });
const sagaMiddleware = createSagaMiddleware();

export const store = () => {
  return {
    ...createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware, middlewareLogger))
    ),
    runSaga: sagaMiddleware.run(actionWatcher),
  };
};
export default store;
