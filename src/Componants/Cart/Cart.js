import React, { useEffect, useState } from 'react';
import img from './profile.jpg'
import './Cart.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart } = props;
    const [breaktime, setbreakTime] = useState(0);
    // console.log(cart)
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
        // console.log(product.time)
    }
    
    const totalhandler = (time) => {
        setbreakTime(time);
        localStorage.setItem('breaktime',time)
    }


    // local storage added 
    useEffect(() => {
        const getvalue = localStorage.getItem('breaktime');
        // console.log(getvalue)
    setbreakTime(getvalue);
},[])


    return (
        <div className='cart-body'>
            <div className="cart-profile">
                <div>
                    <img className='profile-image' src={img} alt="" />
                </div>
                <div>
                    <small className='small'>Mohammad Mustafijur Rahman</small><br />
                    <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>    
                    <small>   Chittagong, Bangladesh</small>
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
            <br />
            <small>Add a Break</small>
            <div className='btn-single'>
                <button value={10} onClick={(e)=>totalhandler(e.target.value)}>10s</button>
                <button value={20} onClick={(e)=>totalhandler(e.target.value)} className='primary-btn'>20s</button>
                <button value={30} onClick={(e)=>totalhandler(e.target.value)}>30s</button>
                <button value={40} onClick={(e)=>totalhandler(e.target.value)}>40s</button>
            </div>
            <br />
            <small>Exercise Details</small>
            <br />
            <p className='exersice-time'>Exercise Time : { total}</p>
            <p>Break Time : { breaktime} </p>
            <button className='activity' onClick={()=>toast.success('Yeh! your Activity was complete')}>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;