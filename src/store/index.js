import { createStore } from 'redux';

import rootReducer from './modules/rootReducer'

const store = createStore(rootReducer); //Enviar apenas um reducer
//com a informação que deve ficar na store


export default store;