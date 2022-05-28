import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from "react-router-dom"
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);

    if (loading) {
        return <loading></loading>
    };

    return (
        <>
            <div class="drawer drawer-mobile my-10 lg:px-10 md:px-5 sm:px-3">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <h2 className="text-primary font-semibold text-2xl text-center underline mb-5">Welcome to your Dashboard!</h2>
                    <div className="divider"></div>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {
                            admin && <li className='bg-base-200'><Link to="addProduct">Add Product</Link></li>
                        }
                        {
                            admin && <li className='bg-base-200'><Link to="manageOrders">Manage Orders</Link></li>
                        }
                        {
                            admin && <li className='bg-base-200'><Link to="allUsers">All Users</Link></li>
                        }
                        {
                            !admin && <li className='bg-base-200'><Link to="myOrders">My Orders</Link></li>
                        }
                        {
                            !admin && <li className='bg-base-200'><Link to="addAReview">Add A Review</Link></li>
                        }

                        <li className='bg-base-200'><Link to="myProfile">My Profile</Link></li>



                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;