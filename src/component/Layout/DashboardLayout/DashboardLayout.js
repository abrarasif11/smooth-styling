import React from 'react';
import Header from '../../Header/Header';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 font-poppins w-80 bg-base-100 text-base-content">
                        <li className='text-2xl font-medium text-black'><Link to='/dashboard'>My Appointments</Link></li>
                        <li className='text-2xl font-medium text-black '><Link to='/dashboard/allUser'>All Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;