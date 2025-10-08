import React from 'react';

const Tapps = ({data}) => {
    return (
        <div className='text-center'>
            <img src={data.image} className='mx-auto' alt="" />
            <h1>{data.title}</h1>
        </div>
    );
};

export default Tapps;