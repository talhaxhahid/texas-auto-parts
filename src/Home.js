import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import HomeHeroSlider from './Components/HomeHeroSlider';
import Vendors from './Components/Vendors';
import WhyChooseUs from './Components/WhyChooseUs';
import AboutTexas from './Components/AboutTexas';
import Presence from './Components/Presence';
import BecomePartner from './Components/BecomePartner';
import HowItWorks from './Components/HowItWorks';

const Home = () => {


    return(<>
    <WebsiteLayout>
    <HomeHeroSlider/>
    <AboutTexas/>
    <WhyChooseUs/>
    <Vendors/>
    <Presence/>
    <BecomePartner/>
    </WebsiteLayout>
    </>);


}

export default Home;