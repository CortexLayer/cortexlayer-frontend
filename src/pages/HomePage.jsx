import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CoreFeature from '../components/CoreFeature';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <CoreFeature />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
