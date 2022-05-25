import React from 'react';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className="grid items-center justify-items-center mt-10 bg-base-200 py-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login!</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <div>
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    {...register("email",
                                        { required: true })
                                    }
                                    type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email && <span className="label-text-alt text-warning">This field is required</span>}

                                </label>
                            </div>


                            <div>
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input {...register("password", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password && <span className="label-text-alt text-warning">This field is required</span>}

                                </label>
                            </div>
                        </div>

                        <input type="submit" className='btn btn-accent w-full max-w-xs' value='login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;