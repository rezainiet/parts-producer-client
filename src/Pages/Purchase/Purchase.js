import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const axios = require('axios').default;

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const url = `http://localhost:4000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const { name, description, img, price, qty, minOrder } = product;

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const orderQuantity = event.target.order.value;

        if (orderQuantity < minOrder) {
            toast.error(`Your minimum order quantity is ${minOrder} PCS`)
            return setDisabled(true);
        }

        if (orderQuantity > qty) {
            toast.error(`Insufficient stock. You can order ${qty} PCS`)
            return setDisabled(true);
        }

        const userEmail = 'masudrezaog@gmail.com'
        const order = { name, email, number, orderQuantity, userEmail };

        fetch('http://localhost:4000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data));

        toast.success('Your order has been added. Check out now!');

    };



    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-full card bg-base-100 rounded-box place-items-center">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img src={img} alt="productImage" /></figure>
                    <div className="card-body">
                        <h1 className="card-title underline text-secondary">Details</h1>
                        <h2 className="card-title">{name}</h2>
                        <p className='font-semibold'>Price Per piece: {price}</p>
                        <p className='font-semibold'>Available Quantity: {qty}</p>
                        <p><span className='font-semibold'>Description</span> <br />
                            {
                                description?.map((d, index) => <li key={index}>{d}</li>)
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className="divider lg:divider-horizontal">INFO</div>
            <div className="grid flex-grow h-full card bg-base-200 rounded-box place-items-center">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>


                        <div className="form-control w-full max-w-xs">
                            <form onSubmit={handleSubmit}>
                                <label className="label">
                                    <span className="label-text">What is your name?</span>
                                </label>
                                <input name='name' type="text" required placeholder="Your Name" className="input input-bordered w-full max-w-xs" />



                                <label className="label">
                                    <span className="label-text">What is your email?</span>
                                </label>
                                <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />




                                <label className="label">
                                    <span className="label-text">Phone number?</span>
                                </label>
                                <input name='number' type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />




                                <label className="label">
                                    <span className="label-text">How much you want to order?</span>
                                </label>
                                <input name='order' defaultValue={minOrder} type="number" placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" />


                                <input type="submit" disabled={disabled} className='btn btn-accent w-full max-w-xs mt-5' value="Purchase" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;