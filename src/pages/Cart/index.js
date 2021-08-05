import React from 'react';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart(){

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
                    <tr>
                        <td>
                            <img src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom1.jpg" 
                            alt="Produto" />
                        </td>
                        <td>
                            <strong>Tênis muita massa</strong>
                            <span>R$ 135,50</span>
                        </td>
                        <td className="buttons">
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1" />
                            </button>
                            <input type="number" readOnly value={2} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1" />
                            </button>
                        </td>
                        <td>
                            <strong>R$271,00</strong>
                        </td>
                        <td type="button">
                            <MdDelete size={20} color="#7159c1" />
                        </td>
                    </tr>
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


export default Cart;