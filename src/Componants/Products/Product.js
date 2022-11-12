// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product)
    const{picture,activity,age,time,title}=props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className="product-body">
            <p className='activity'>{activity}</p>
            <p className='title'>{ title}</p>
            <p className='age-time'>For Age : {age}</p>
            <p className='age-time'>Time spoild : { time}</p>
            </div>
            <button onClick={() => props.handlerClick(props.product)} className='card-btn'>Add to list</button>
            {/* <ToastContainer></ToastContainer> */}
        </div>
        
    );
};

export default Product;