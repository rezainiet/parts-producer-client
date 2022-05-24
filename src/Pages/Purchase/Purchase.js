import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { name, description, img, price, qty, minOrder } = product;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [disable, setDisable] = useState(false);


    const onSubmit = data => { console.log(data) };


    useEffect(() => {
        const url = `http://localhost:4000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);


    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="productImage" /></figure>
                    <div className="card-body">
                        <h1 className="card-title underline text-secondary">Details</h1>
                        <h2 className="card-title">{name}</h2>
                        <p><span className='font-semibold'>Description</span> <br />
                            {
                                description?.map((d, index) => <li key={index}>{d}</li>)
                            }
                        </p>
                        <p className='font-semibold'>Price Per piece: {price}</p>
                        <p className='font-semibold'>Available Quantity: {qty}</p>
                    </div>
                </div>
            </div>
            <div className="divider lg:divider-horizontal">INFO</div>
            <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Purchase your product!</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">What is your name?</span>
                                </label>
                                <input type="text" defaultValue="Masud Reza" placeholder="Your name"
                                    {
                                    ...register("name",
                                        { required: true })
                                    }
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.name && <span className='text-red-500 font-medium text-xs'>This field is required</span>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">What is your email?</span>
                                </label>
                                <input type="text" defaultValue="masudrezaog@gmail.com" placeholder="Your email"
                                    {
                                    ...register("email",
                                        { required: true })
                                    }
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.email && <span className='text-red-500 font-medium text-xs'>This field is required</span>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="phone" defaultValue="01751391474" placeholder="Your Phone Number"
                                    {
                                    ...register("phone",
                                        { required: true })
                                    }
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.phone && <span className='text-red-500 font-medium text-xs'>This field is required</span>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity (minimum order quantity is {minOrder})</span>
                                </label>
                                <input type="orderQuantity" defaultValue={minOrder} placeholder="How much you want to order"
                                    {
                                    ...register("orderQuantity",
                                        { required: true })
                                    }
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.orderQuantity && <span className='text-red-500 font-medium text-xs'>This field is required</span>}
                            </div>

                            <input type="submit" value="PURCHASE NOW" className='btn btn-accent mt-5 btn-md w-full max-w-xs' />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;