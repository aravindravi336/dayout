import React from 'react';

const Admin_SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Packages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Bookings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Users</a>
                </li>
            </ul>
        </div>
    );
}

export default Admin_SideBar;
