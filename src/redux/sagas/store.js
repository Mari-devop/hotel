import { createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga";
import rootSaga from '.';
import rootReducer from "../reducers/mainReducer"
import { composeWithDevTools } from 'redux-devtools-extension';


// const composeEnchancers = 
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const configureStore = (preloadedState) => createStore (
//     reducer, 
//     preloadedState,
//     composeEnhancers(applyMiddleware(sagaMiddleware)),
   
// );
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;



