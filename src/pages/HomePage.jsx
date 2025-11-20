import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreFeature from '../components/CoreFeature';
import Services from '../components/Services';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <CoreFeature />
                <Services />
                <Process />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
