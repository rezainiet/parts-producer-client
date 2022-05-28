import React from 'react';

const AddProduct = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const product = {
            name: event.target.name.value,
            description: event.target.description.value,
            img: event.target.img.value,
            minOrder: parseInt(event.target.minOrder.value),
            qty: parseInt(event.target.qty.value),
            price: parseInt(event.target.price.value),
        }

        fetch('http://localhost:4000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <div>
            <h2 className="text-center text-semibold text-primary text-xl">Add Product</h2>

            <div class="hero min-h-screen bg-base-200 rounded-3xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div class="card-body">

                                {/* Inputs */}

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Product Name <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required type="text" placeholder="Product Name" name='name' class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Description <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required type="text" placeholder="Description" name='description' class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Product Image <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required type="text" placeholder="Product Image Link" name='img' class="input input-bordered" />
                                </div>


                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Product Price <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required name='price' type="number" placeholder="Single Product Price" class="input input-bordered" />
                                </div>


                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Minimum Order <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required name='minOrder' type="number" placeholder="Minimum Order Quantity" class="input input-bordered" />
                                </div>


                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Available Quantity <span className='text-red-400'>*</span></span>
                                    </label>
                                    <input required name='qty' type="number" placeholder="How much product have?" class="input input-bordered" />
                                </div>


                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Add Product!</h1>
                        <p class="py-6">Add a product for Buyers! Make sure you have described your product information is correct!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;