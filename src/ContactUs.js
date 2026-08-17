import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import ContactUsHeroSlider from './Components/ContactUsHeroSlider';
import ContactUsForm from './Components/contactus';
import Location from './Components/Location';
import FAQ from './Components/FAQ';


const ContactUs = () => {


    return(<>
    <WebsiteLayout>
    <ContactUsHeroSlider/>
    <ContactUsForm/>
    <Location/>
    </WebsiteLayout>
    </>);


}

export default ContactUs;