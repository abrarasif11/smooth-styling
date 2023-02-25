import React from 'react';
import Banner1 from '../Banner/Banner1';
import Categories from '../Categories/Categories';
import Founder from '../Founder/Founder';
import Gallery from '../Gallery/Gallery';


const Home = () => {
    return (
        <div>
           <Banner1></Banner1>
           <Categories></Categories>
           <Gallery></Gallery>
           <Founder></Founder>
        </div>
    );
};

export default Home;