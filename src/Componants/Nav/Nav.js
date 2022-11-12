import React from 'react';
import imagebrand from './brand.png'
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav>
                <img className='brand-logo' src={imagebrand} alt="" />
            </nav>
        </div>
    );
};

export default Nav;