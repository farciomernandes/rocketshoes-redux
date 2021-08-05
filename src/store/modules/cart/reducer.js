/**
 * 
 * action: Dentro dela vem o TYPE e PAYLOAD
 * state: É o valor antigo do return, antes de executar a função
 */

export default function cart(state = [], action){ //Primeiro reducer
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.payload];
        default:
            return state;
    }


    return []; //Valor inicial do reducer
}
