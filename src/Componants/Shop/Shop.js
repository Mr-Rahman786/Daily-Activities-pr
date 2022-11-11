import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
            <div>
                <h1 className='header-title'>Today Activity</h1>
                <div className="product-container">
                    {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                ></Product>)
            }
                </div>
            </div>
            <div className="card-conatainer">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;