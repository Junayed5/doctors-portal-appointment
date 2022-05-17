import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-3xl font-bold text-rose-400'>Welcome to your dashboard</h1>
                <Outlet/>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                    <li><Link to='/dashboard/review'>Sidebar Item 2</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;