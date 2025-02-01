import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import HomeHeroSlider from './Components/HomeHeroSlider';
import FeatureProducts from './Components/FeaturedProducts';
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
    <HowItWorks/>
    <FeatureProducts/>
    <Presence/>
    <BecomePartner/>
    </WebsiteLayout>
    </>);


}

export default Home;