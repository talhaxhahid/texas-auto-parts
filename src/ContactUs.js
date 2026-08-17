import React from 'react';
import WebsiteLayout from './WebsiteLayout';
import ContactUsHeroSlider from './Components/ContactUsHeroSlider';
import ContactUsForm from './Components/contactus';
import Location from './Components/Location';


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