import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home(props){
    const [ products, setProducts ] = useState([]);

    useEffect(async() => {
        const response = await api.get('products');
        const data = response.data.map(product =>({
            ...product,
            priceFormatted: formatPrice(product.price),
        }))
        setProducts(data);
    },[])

    function handleAddProduct(procuct){
        const { dispatch } = props;
        dispatch({
            type: 'ADD_TO_CART',
            payload: procuct
        });
    }

    return(
        <ProductList>
                {products.map(product=>(
                    <li key={product.id}>
                      <img src={product.image} 
                      alt={product.title}
                      />
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                      
                      <button type="button" onClick={()=> handleAddProduct(product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" />  
                            3
                        </div>
                    
                        <span>ADICIONAR AO CARRINHO</span>
                      </button>
                    </li>
  
                ))}
        </ProductList>
    )
}


export default connect()(Home);