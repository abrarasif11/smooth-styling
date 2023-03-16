import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
const BookingModal = ({ service, selectedDate }) => {
    const { name, slots } = service;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box font-poppins relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-6 mt-6'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
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