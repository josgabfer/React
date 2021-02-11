import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Mi blog personal</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/blog">Blog</Link>
                <Link to="acerca-de">Acerca de</Link>
            </nav>
        </header>
    );
};

export default Header;