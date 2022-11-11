import React from 'react';
import img from './profile.jpg'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    return (
        <div className='cart-body'>
            <div className="cart-profile">
                <div>
                    <img className='profile-image' src={img} alt="" />
                </div>
                <div>
                    <small className='small'>Mohammad Mustafijur Rahman</small><br />
                    <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>    
                    <small>   chittagon, bangladesh</small>
                </div>
            </div>
            <div className='person-weight'>
                <span>
                    75<small> kg</small>
                    <br />
                    weight
                </span>
                <span className='single-span'>
                    6.5 <br />
                    Height
                </span>
                <span>
                    25 <small>yrs</small> <br />
                    Age
                </span>
            </div>
            <small>Add a Break</small>
            <div className='btn-single'>
                <button>10s</button>
                <button className='primary-btn'>20s</button>
                <button>30s</button>
                <button>40s</button>
            </div>
            <small>Exercise Details</small>
        </div>
    );
};

export default Cart;