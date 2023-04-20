import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `https://smooth-styling-server.vercel.app/appointment?email=${user?.email}`;
    const { data: appointment = [] } = useQuery({
        queryKey: ['appointment', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='font-poppins'>
            <h1 className='text-4xl font-bold mt-10 mb-7 text-black w-fit px-2 py-2 ml-4 '>My Appointments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-black'>
                            <th></th>
                            <th>customer</th>
                            <th>Email</th>
                            <th>service</th>
                            <th>Appointment Date</th>
                            <th>slot</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((item, i) =>
                                <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <td className='font-bold text-black'>{item.customer}</td>
                                    <th className=' text-black mt-2 mb-5'>{item.email}</th>
                                    <td className='text-black'>{item.service}</td>
                                    <td className='text-black'>{item.appointmentDate}</td>
                                    <td className='text-black'>{item.slot}</td>
                                    <td className='text-black'>{item.phone}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyAppointment;

