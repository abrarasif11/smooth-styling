import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from '../BookingModal/BookingModal';
import Spinner from '../Spinner/Spinner';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {

    const [service, setService] = useState(null)

    const date = format(selectedDate, 'PP');
    const { data: serviceOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['service', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/service?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Spinner></Spinner>
    }

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
                        refetch={refetch}
                    ></AppointmentOptions>)
                }
            </div>
            {
                service &&
                <BookingModal
                    selectedDate={selectedDate}
                    service={service}
                    setService={setService}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;