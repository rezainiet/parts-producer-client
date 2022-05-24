import React from 'react';
import HomepageHero from './HomepageHero';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <HomepageHero></HomepageHero>
            <Parts></Parts>
            <Summary></Summary>
        </div>
    );
};

export default Home;