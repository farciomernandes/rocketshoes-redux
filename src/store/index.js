import { createStore } from 'redux';

import rootReducer from './modules/rootReducer'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

//const sagaMiddlewares = createSagaMiddleware();

//const middlewares = [sagaMiddlewares];

/*if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}*/

const store = createStore(rootReducer); //Enviar apenas um reducer
//com a informação que deve ficar na store

//sagaMiddlewares.run();

export default store;