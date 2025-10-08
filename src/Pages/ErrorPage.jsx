import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import icon from '../../public/assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-full h-dvh flex flex-col justify-center items-center'>
                <img src={icon} alt="" />
                <span className='flex flex-col justify-center items-center gap-4 text-center'>
                    <h1 className='font-semibold text-3xl md:text-5xl text-[#001931]'>Oops, page not found!</h1>
                    <p className='text-[#627382]'>The page you are looking for is not available.</p>
                    <Link to={"/"}><button className='btn btn-secondary'>Go Back!</button></Link>
                </span>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;