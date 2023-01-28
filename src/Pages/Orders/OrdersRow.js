import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleDelete, handleStatus }) => {
    const { _id, serviceName, customer, phone, price, status, service } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-sigma-five.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <td>{price}</td>
            <th>
                <div onClick={() => handleStatus(_id)} className="btn btn-success btn-xs">{status ? status : 'pending'}</div>
            </th>
        </tr>
    );
};

export default OrdersRow;