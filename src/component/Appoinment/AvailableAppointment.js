import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='mt-16'>
            <p className='text-center font-poppins font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;