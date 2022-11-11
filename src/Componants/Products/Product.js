import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const{picture,activity,age,time,title}=props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p>{activity}</p>
            <p>{ title}</p>
            <p>For Age : {age}</p>
            <p>Time spoild : { time}</p>
        </div>
    );
};

export default Product;