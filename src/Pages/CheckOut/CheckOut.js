import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const serviceData = useLoaderData();
    const { _id, title, price } = serviceData;

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        // if (phone.length > 10) {
        //     alert('Phone number must be 11 digit')
        // } else {

        // }
        fetch('https://genius-car-server-sigma-five.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div className='my-8 mx-8'>
            <form onSubmit={handlePlaceOrder}>
                <h3 className='text-3xl'>{title}</h3>
                <h4 className='text-2xl'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered input-info w-full" required />
                    <input name='lastName' type="text" placeholder="Last name" className="input input-bordered input-info w-full" />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-info w-full" required />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-info w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-info textarea-bordered h-24 w-full" placeholder="Your message"></textarea>
                <button className="btn btn-error mt-4">Place Order</button>
            </form>

        </div>
    );
};

export default CheckOut;