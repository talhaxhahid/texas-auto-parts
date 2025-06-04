import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import AboutUsHeroSlider from './Components/AboutUsHeroSlider';
import WhyChooseUs from './Components/WhyChooseUs';
import Vendors from './Components/Vendors';
import Partner from './Components/Partner';
import Journey from './Components/Journey';
import AboutUsMission from './Components/AboutUsMission';
import MeetLeader from './Components/Leader';


const AboutUs = () => {


    return(<>
    <WebsiteLayout>
    <AboutUsHeroSlider/>
    <AboutUsMission/>
    <Journey/>
    <WhyChooseUs/>
    <Vendors/>
    <Partner/>
    </WebsiteLayout>
    </>);


}

export default AboutUs;