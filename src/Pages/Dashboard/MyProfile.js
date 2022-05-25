import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const handleSubmit = () => {
        console.log('form submitted')
    };

    return (
        <div class="mockup-window border bg-base-200">
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex justify-center'>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="font-semibold text-2xl text-center">My Profile</h2>
                                <div class="avatar my-5">
                                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" />
                                    </div>
                                </div>
                                <p><span className='font-semibold'>Name:</span> <span>{user?.displayName}</span></p>
                                <p><span className='font-semibold'>Email:</span> <span>{user?.email}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <h2 className="card-title">Update Your Info!</h2>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone number</span>
                                </label>
                                <input type="text" placeholder="Phone" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input type="text" placeholder="Education" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Location (city/district)</span>
                                </label>
                                <input type="text" placeholder="Your Location" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">LinkedIn profile link</span>
                                </label>
                                <input type="text" placeholder="Profile link" class="input input-bordered" />
                            </div>


                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Update Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='flex justify-center'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="font-semibold text-2xl text-center">My Profile</h2>
                        <div class="avatar my-5">
                            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                        <p><span className='font-semibold'>Name:</span> <span>{user?.displayName}</span></p>
                        <p><span className='font-semibold'>Email:</span> <span>{user?.email}</span></p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MyProfile;