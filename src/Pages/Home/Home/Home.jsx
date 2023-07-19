import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryShop from '../CategoryShop/CategoryShop';
import Testimonials from '../Testimonials/Testimonials';
import TopFigures from '../TopFigures/TopFigures';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <TopFigures/>
            <CategoryShop />
            <Testimonials /> 
            
        </div>
    );
};

export default Home;