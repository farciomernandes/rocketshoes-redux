/**
 * 
 * action: Dentro dela vem o TYPE e PAYLOAD
 * state: É o valor antigo do return, antes de executar a função
 */

import produce from 'immer';

export default function cart(state = [], action){ //Primeiro reducer
    switch(action.type){
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.payload.id);

                if(productIndex >= 0){
                    draft[productIndex].amount += 1;
                }else{
                    draft.push({
                        ...action.payload,
                        amount: 1
                    });
                }
            })
        case 'REMOVE_FROM_CART':
            return produce(state, draft=> {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if(productIndex >= 0){
                    draft.splice(productIndex, 1);
                }
            })
        default:
            return state;
    }


    return []; //Valor inicial do reducer
}
