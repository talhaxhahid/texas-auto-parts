import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import OrderNowHeroSlider from './Components/OrderNowHeroSlider';
import HowItWorks from './Components/HowItWorks';
import FeatureProducts from './Components/FeaturedProducts';
import Benefits from './Components/Benefits';
import FAQ from './Components/FAQ';


const OrderNow = () => {


    return(<>
    <WebsiteLayout>
    <OrderNowHeroSlider/>
    <Benefits/>
    <HowItWorks/>
    <FeatureProducts/>
    <FAQ/>
    </WebsiteLayout>
    </>);


}

export default OrderNow;