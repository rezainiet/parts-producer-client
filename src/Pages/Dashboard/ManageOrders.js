import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import OrderCard from './OrderCard';
import Loading from '../../Pages/Shared/Loading'

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:4000/order').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-semibold text-center text-xl pb-5 text-green-600 underline'>Manage All Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Orderer</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderCard key={order._id} index={index} refetch={refetch} order={order}></OrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;