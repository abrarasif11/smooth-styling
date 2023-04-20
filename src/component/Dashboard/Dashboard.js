import React from 'react';
import useTitle from '../../useHooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard')
    return (
        <div>
            <h3>Dashboard</h3>
        </div>
    );
};

export default Dashboard;