import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex items-center justify-center mt-5'>
            <div class="bg-base-200 py-5">
                <h2 className="text-3xl text-primary text-center font-bold">Masud Reza</h2>

                <div className='px-10 mt-5'>
                    <p className="text-"><span className='font-bold'>Email:</span> masudrezaog@gmail.com</p>
                    <p className="text-"><span className='font-bold'>Educational Background:</span> Studying Diploma in Engineering (Electrical Department).</p>
                    <p className="text-"><span className='font-bold'>Technologies I have in Web Development:</span>
                        <ul>
                            <li>1. HTML</li>
                            <li>2. CSS</li>
                            <li>3. Bootstrap 5</li>
                            <li>4. TailwindCSS</li>
                            <li>5. DaisyUI(Component Library)</li>
                            <li>6. React Bootstrap(Component Library)</li>
                            <li>7. JavaScript</li>
                            <li>8. ReactJS</li>
                            <li>9. MongoDB(Basic)</li>
                            <li>10. NodeJS(Basic)</li>
                            <li>11. ExpressJS(Basic)</li>
                        </ul>
                    </p>

                    <p className="text-"><span className='font-bold'>Links of my latest three projects:</span>
                        <ul>
                            <li><a href="https://macology-afc12.web.app/"><span className='text-primary'>1. Macology</span></a></li>
                            <li><a href="https://gym-master-reza.web.app/"><span className='text-primary'>2. Gym Master</span></a></li>
                            <li><a href="https://mac-analysis.netlify.app/"><span className='text-primary'>3. Mac Analysis</span></a></li>

                        </ul>
                    </p>
                </div>

            </div>
        </div >
    );
};

export default MyPortfolio;