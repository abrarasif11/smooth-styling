import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [serviceOptions, setServiceOptions] = useState([])
    const [service, setService] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServiceOptions(data))
    }, [])
   
    return (
        <section className='mt-16'>
            <p className='text-center font-poppins font-bold'>Available Appointments on {format(selectedDate, 'PP')}
            </p>
            <div className='grid mt-10 mx-20 mb-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                {
                    serviceOptions.map(serviceOption => <AppointmentOptions
                        key={serviceOption._id}
                        serviceOption={serviceOption}
                        setService={setService}
                    ></AppointmentOptions>)
                }
            </div>
            {
                service &&
                <BookingModal
                    selectedDate={selectedDate}
                    service={service}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;