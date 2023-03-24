import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
const BookingModal = ({ service, selectedDate }) => {
    const { name, slots } = service;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const formValue = { date, slot, name, email, phone };
        console.log(formValue);
        if (user?.uid) {
            fetch("http://localhost:5000/appointment", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formValue),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        // toast.success("Order Confirm Successfully");
                        toast.success("Your Appointment Confirm Successfully", { autoClose: 800 });
                    }
                })
                .catch((err) => console.log(err));
        } else {
            // toast.error("Please login first to confirm order");
            toast.error("Please login first to confirm appointment", { autoClose: 800 });
        }
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box font-poppins relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-6'>
                        <input type="text" name='date' disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) =>
                                    <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                        <input className='text-yellow-400 btn bg-black' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;