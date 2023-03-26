import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content font-poppins flex-col lg:flex-row-reverse">
                    <img className='max-w-sm lg:w-1/2 rounded-lg shadow-2xl' src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='mr-6 sm:w-full'>
                    <DayPicker 
                    className='bg-black text-white mx-2 my-3 pl-3 pr-3 pt-4 rounded-lg pb-4'
                     mode='single'
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                    />
                   
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;