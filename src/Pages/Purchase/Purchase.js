import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `parts.json/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    console.log(product);
    return (
        <div>
            <h2>Purchase this {productId}</h2>
        </div>
    );
};

export default Purchase;