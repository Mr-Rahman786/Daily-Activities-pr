import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products, setproduct] = useState([]);

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
        .then(data=>setproduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                ></Product>)
            }
            </div>
            <div className="card-conatainer">
                <h1>Card body</h1>
            </div>
        </div>
    );
};

export default Shop;