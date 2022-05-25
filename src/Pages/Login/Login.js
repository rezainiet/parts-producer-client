import React from 'react';
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 4e35940050d14ad34d8006386165114a42f3c6ca


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
<<<<<<< HEAD
                                    <span className="label-text">Your Email <span className='text-orange-500'>*</span></span>
=======
                                    <span className="label-text">Your Email</span>
>>>>>>> 4e35940050d14ad34d8006386165114a42f3c6ca
                                </label>
                                <input
                                    {...register("email",
                                        { required: true })
                                    }
<<<<<<< HEAD
                                    type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email && <span className="label-text-alt text-warning">Email is required</span>}
=======
                                    type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email && <span className="label-text-alt text-warning">This field is required</span>}
>>>>>>> 4e35940050d14ad34d8006386165114a42f3c6ca

                                </label>
                            </div>


                            <div>
                                <label className="label">
<<<<<<< HEAD
                                    <span className="label-text">Your Password <span className='text-orange-500'>*</span></span>
                                </label>
                                <input {...register("password", { required: true })} type="text" placeholder="Your password" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password && <span className="label-text-alt text-warning">Password is required</span>}
=======
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input {...register("password", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password && <span className="label-text-alt text-warning">This field is required</span>}
>>>>>>> 4e35940050d14ad34d8006386165114a42f3c6ca

                                </label>
                            </div>
                        </div>

                        <input type="submit" className='btn btn-accent w-full max-w-xs' value='login' />
<<<<<<< HEAD
                        <p className='mt-3'><small>Don't have an account? <Link to='/register' className='text-secondary'>Please Register</Link></small></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn no-animation">Continue With Google</button>
=======
                    </form>
>>>>>>> 4e35940050d14ad34d8006386165114a42f3c6ca
                </div>
            </div>
        </div>
    );
};

export default Login;