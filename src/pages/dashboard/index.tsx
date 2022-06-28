import { Component } from 'solid-js';
import Dashboard from '../../features/dashboard/templates/Dashboard';
import PrivateLayout from '../../features/shared/layout/PrivateLayout/PrivateLayout';
const DashboardPage: Component = () =>
{
    return (
        <PrivateLayout>
            <Dashboard />
        </PrivateLayout>
    );
};

export default DashboardPage;
