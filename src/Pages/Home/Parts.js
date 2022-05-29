import React, { useEffect, useState } from 'react';
import DetailHeader from '../Shared/DetailHeader';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://parts-producer.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);

    return (
        <div className='lg:px-10 md:px-5 sm:px-3 bg-base-200 py-14 my-5 rounded-xl'>
            <DetailHeader h1="Our Products" h2="What We Provide"></DetailHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(0, 4).map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;