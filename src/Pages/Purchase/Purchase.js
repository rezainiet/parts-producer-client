import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

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
        const order = event.target.order.value;
        console.log(name, email, order, number);
    }



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
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>


                        <div class="form-control w-full max-w-xs">
                            <form onSubmit={handleSubmit}>
                                <label class="label">
                                    <span class="label-text">What is your name?</span>
                                </label>
                                <input name='name' type="text" required placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt">Alt label</span>
                                </label>


                                <label class="label">
                                    <span class="label-text">What is your email?</span>
                                </label>
                                <input name='email' type="text" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt">Alt label</span>
                                </label>



                                <label class="label">
                                    <span class="label-text">Phone number?</span>
                                </label>
                                <input name='number' type="text" placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt">Alt label</span>
                                </label>



                                <label class="label">
                                    <span class="label-text">How much you want to order?</span>
                                </label>
                                <input name='order' defaultValue={minOrder} type="number" placeholder="Order Quantity" class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt">Alt label</span>
                                </label>

                                <input type="submit" className='btn btn-accent w-full max-w-xs mt-5' value="Purchase" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;