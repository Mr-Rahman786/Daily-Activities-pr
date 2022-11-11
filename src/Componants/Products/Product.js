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
            <p>{ title}</p>
            <p>For Age : {age}</p>
            <p>Time spoild : { time}</p>
            </div>
            <button className='card-btn'>Add to list</button>
        </div>
        
    );
};

export default Product;