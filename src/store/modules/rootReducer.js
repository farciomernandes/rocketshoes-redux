import { combineReducers } from 'redux';

//Se for preciso ter mais de 1 reducer no app é necessário
//combinar todos com a função combineReduce

import cart from './cart/reducer';

export default combineReducers({
    cart,
});