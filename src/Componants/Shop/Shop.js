import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setproduct] = useState([]);

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
        .then(data=>setproduct(data))
    },[])
    return (
        <div>
            {
                products.map(product=>console.log(product))
            }
            <h1>Start</h1>
        </div>
    );
};

export default Shop;