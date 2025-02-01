import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import StatementsHeroSlider from './Components/StatementsHeroSlider';
import HowItWorks from './Components/HowItWorks';
import FAQ from './Components/FAQ';


const YourStatements = () => {


    return(<>
    <WebsiteLayout>
    <StatementsHeroSlider/>
    <HowItWorks/>
    <FAQ/>

    </WebsiteLayout>
    </>);


}

export default YourStatements;