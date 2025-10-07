import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';


const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;