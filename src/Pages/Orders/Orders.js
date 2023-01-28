import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-sigma-five.vercel.app/orders?email${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setOrders(data))
    }, [user?.email, logOut])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?')
        if (proceed) {
            fetch(`https://genius-car-server-sigma-five.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }

    const handleStatus = id => {
        fetch(`https://genius-car-server-sigma-five.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved'
                    const newOrders = [approving, ...remaining]
                    setOrders(newOrders);
                }
            });
    }
    return (
        <div className='my-8'>
            <h3 className="text-3xl">You have {orders.length} Orders</h3>
            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox " className="checkbox" disabled />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatus={handleStatus}>

                            </OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Orders;