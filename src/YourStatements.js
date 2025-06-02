import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import StatementsHeroSlider from './Components/StatementsHeroSlider';
import StatementsInstructions from './Components/StatementsInstructions';
import HowItWorks from './Components/HowItWorks';
import FAQ from './Components/FAQ';


const YourStatements = () => {


    return(<>
    <WebsiteLayout>
    <StatementsHeroSlider/>
    <StatementsInstructions/>


    </WebsiteLayout>
    </>);


}

export default YourStatements;