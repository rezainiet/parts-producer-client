import React, { useEffect, useState } from 'react';

const MyOrder = ({ order, index }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{(order.productName).slice(0, 25)}....</td>
            <td>{order.orderQuantity}</td>
            <td>${order.totalCost}</td>
            <td>
                {
                    order.paid ? <p className='text-green-500'>Paid</p> : <button className='btn btn-xs bg-red-500'>Cancel</button>
                }
            </td>
            <td>
                {
                    order.paid ? <span className='text-primary'>Already Paid</span> : <button className='btn btn-xs btn-primary'>Pay Now</button>
                }
            </td>
            <td>{
                order.paid ? <span className='text-green-500'>{order.transactionId}</span> : <span className='text-red-400'>You have not paid yet</span>
            }</td>

        </tr>
    );
};

export default MyOrder;