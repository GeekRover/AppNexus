import React, { use } from 'react';
import Tapps from './Tapps';

const Trending = ({dataPromise}) => {
    const data = use(dataPromise)
    return (
        <div className='grid grid-cols-3  items-center gap-5'>
            {
                data.map((data) =><Tapps key={data.id} data={data}></Tapps>)
            }
        </div>
    );
};

export default Trending;