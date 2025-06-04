import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import OrderNowHeroSlider from './Components/OrderNowHeroSlider';
import HowItWorks from './Components/HowItWorks';
import Benefits from './Components/Benefits';
import FAQ from './Components/FAQ';
import Vendors from './Components/Vendors';
import LoginInfo from './Components/OrderLoginDetails'

const OrderNow = () => {


    return(<>
    <WebsiteLayout>
    <OrderNowHeroSlider/>
    <Benefits/>
    <LoginInfo/>
    <Vendors/>
    </WebsiteLayout>
    </>);


}

export default OrderNow;