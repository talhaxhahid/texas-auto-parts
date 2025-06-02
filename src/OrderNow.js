import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import OrderNowHeroSlider from './Components/OrderNowHeroSlider';
import HowItWorks from './Components/HowItWorks';
import Benefits from './Components/Benefits';
import FAQ from './Components/FAQ';
import OrderNowProducts from './Components/OrderNowProducts';


const OrderNow = () => {


    return(<>
    <WebsiteLayout>
    <OrderNowHeroSlider/>
    <Benefits/>
    <OrderNowProducts/>
    </WebsiteLayout>
    </>);


}

export default OrderNow;