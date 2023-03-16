import React from 'react';

const AppointmentOptions = ({ serviceOption, setService }) => {
    const { name, slots } = serviceOption
    return (
        <div className="card  shadow-xl">
            <div className="font-poppins card-body text-center">
                <h2 className=" text-2xl text-center font-poppins font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                htmlFor="booking-modal"
                onClick={() => setService(serviceOption)} 
                className="btn bg-black text-yellow-400"
                 >Book Appointment
                </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;