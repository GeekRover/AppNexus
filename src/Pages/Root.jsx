import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';


const Root = () => {
    const navigation = useNavigation()
    return (
        <div className=''>
            <Navbar></Navbar>
            {
                navigation.state === "loading" && (
                    <div className='w-full h-dvh flex justify-center items-center'><span className="loading loading-bars loading-xl "></span></div>
                )
            }
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;