import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, name, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin');
                }
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('User added in Admin successfully!')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{name}</td>
            <td>
                {
                    role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default UserRow;