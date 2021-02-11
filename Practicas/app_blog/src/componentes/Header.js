import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <ContenedorHeader>
            <Title>Mi blog personal</Title>
            <Menu>
                <NavLink to="/" exact={true}>Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="acerca-de">Acerca de</NavLink>
            </Menu>
        </ContenedorHeader>
    );
};

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;
const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;

const Menu = styled.nav`
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }
    a:hover{
        color: #191668;
    }
    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
`;

export default Header;