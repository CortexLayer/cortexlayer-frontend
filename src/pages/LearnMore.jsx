import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServiceDetail from '../components/ServiceDetail';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LearnMore = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white">
                {/* Back Button */}
                <div className="max-w-7xl mx-auto px-6 pt-32 pb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </button>
                </div>

                {/* Service Detail Component */}
                <ServiceDetail />

                {/* Contact Section */}
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default LearnMore;
