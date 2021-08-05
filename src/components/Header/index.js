import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

function Header(props){
    return(
        <Container>
            <Link to="/">
                <img src={logoImg} alt="Rocketshoes Logo" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{props.cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />

            </Cart>
        </Container>
    )
}

export default connect(state => ({
    cart: state.cart,
    cartSize: state.cart.length,
}))(Header);