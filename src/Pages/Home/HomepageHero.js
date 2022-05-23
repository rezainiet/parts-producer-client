import React from 'react';

const HomepageHero = () => {
    const bgImageStyle = {
        backgroundImage:
            "url('https://i.ibb.co/G9kXsGh/5083649.jpg')",
        // height: '100vh',
        // marginTop: '-70px',
        // fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div class="hero min-h-screen" style={bgImageStyle}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Parts Producer</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Explore Us</button>
                </div>
            </div>
        </div >
    );
};

export default HomepageHero;