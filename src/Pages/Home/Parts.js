import React, { useEffect, useState } from 'react';
import DetailHeader from '../Shared/DetailHeader';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/product')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);

    return (
        <div>
            <DetailHeader h1="Our Products" h2="What We Provide"></DetailHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(0, 3).map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;