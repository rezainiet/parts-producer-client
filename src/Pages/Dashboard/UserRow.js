import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, name, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
                toast.success('User added in Admin successfully!')
            })
    }
    return (
        <tr>
            <th>1</th>
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