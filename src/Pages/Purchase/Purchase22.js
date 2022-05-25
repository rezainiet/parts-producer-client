import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { name, description, img, price, qty, minOrder } = product;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [newValue, setNewValue] = useState(minOrder);
    const [disbale, setDisable] = useState(true);

    useEffect(() => {
        const url = `http://localhost:4000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    useEffect(() => {
        console.log(newValue);
    }, [newValue])


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h1 className="card-title underline text-secondary">Details</h1>
                <h2 className="card-title">{name}</h2>
                <p><span className='font-semibold'>Description</span> <br />
                    {
                        description?.map((d, index) => <li key={index}>{d}</li>)
                    }
                </p>
                <p className='font-semibold'>Price Per piece: {price}</p>
                <div className="form-control">
                    <label className="input-group input-group-sm">
                        <span className='font-semibold'>Minumum Order</span>
                        <input type="text" disabled value={`${minOrder} PCS`} className="input input-bordered input-sm" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-sm">
                        <span className='font-semibold'>Available Quantity</span>
                        <input type="text" disabled value={`${qty} PCS`} className="input input-bordered input-sm" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-sm">
                        <span className='font-semibold bg-secondary'>Order</span>
                        <input type="number" value={newValue || minOrder} onChange={e => setNewValue(e.target.value)} name="textInput" className="input input-bordered input-sm" />
                        <span className='font-semibold bg-secondary'>Total cost will be:</span>
                    </label>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-md">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;