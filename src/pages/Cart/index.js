import React from 'react';

import { connect } from 'react-redux';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }){

    return(
        <Container>
            <ProductTable>
                <thead>
                    <td>
                        <th /> 
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th /> 
                    </td>
                </thead>
                <tbody>
                    {cart.map(product => (
                    <tr key={product.id}>
                        <td>
                            <img src={product.image} 
                            alt={product.title} />
                        </td>
                        <td>
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>
                        </td>
                        <td className="buttons">
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1" />
                            </button>
                            <input type="number" readOnly value={product.amount} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1" />
                            </button>
                        </td>
                        <td>
                            <strong>R$271,00</strong>
                        </td>
                        <td type="button" onClick={()=> dispatch({ type: 'REMOVE_FROM_CART', id: product.id})}>
                            <MdDelete size={20} color="#7159c1" />
                        </td>
                    </tr>
            
                    ))}
                </tbody>

            </ProductTable>

            <footer>
                <button type="button">
                    Finalizar pedido
                </button>
                
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 1920,28</strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart,
})


export default connect(mapStateToProps)(Cart);