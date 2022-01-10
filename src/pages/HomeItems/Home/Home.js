import React from 'react';
import Products from '../Products/Products';

import Banner from '../Banner/Banner';
import OurMission from '../OurMission/OurMission';
import Reviews from '../Reviews/Reviews';
import Header from '../../../Shared/Header/Head';
import Footer from '../../../Shared/Footer/Foot';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <OurMission></OurMission>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;