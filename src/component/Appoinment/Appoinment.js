import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import useTitle from '../../useHooks/useTitle';

const Appoinment = () => {
    useTitle('Appointment')
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appoinment;