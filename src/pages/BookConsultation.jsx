import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Phone, Building2, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookConsultation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        challenges: '',
        preferredDate: '',
        budget: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                industry: '',
                challenges: '',
                preferredDate: '',
                budget: ''
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Simple Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/cortexlayer.png" alt="CortexLayer" className="h-10 w-10" />
                        <span className="text-2xl font-bold tracking-tighter text-white">CortexLayer<sup className="text-sm ml-0.5">™</sup></span>
                    </Link>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-6"
                    >
                        Book Your Free Consultation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Let's discuss how AI automation can transform your business. No commitment required.
                    </motion.p>
                </div>
            </section>

            {/* Form Section */}
            <section className="pb-32 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    {submitStatus === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ArrowRight className="w-8 h-8 text-green-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                            <p className="text-gray-400 mb-8">
                                We've received your consultation request. Our team will reach out within 24 hours.
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                            >
                                Return to Home
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                        <Building2 className="w-4 h-4" />
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            {/* Contact Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            {/* Company & Industry */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                        <Building2 className="w-4 h-4" />
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="Acme Inc."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        Industry *
                                    </label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="saas">SaaS</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="finance">Finance</option>
                                        <option value="education">Education</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Challenges */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">
                                    What challenges are you facing? *
                                </label>
                                <textarea
                                    name="challenges"
                                    value={formData.challenges}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Tell us about your current pain points and what you're looking to achieve..."
                                />
                            </div>

                            {/* Date & Budget */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Budget Range</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                    >
                                        <option value="">Select Budget</option>
                                        <option value="under-5k">Under $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-plus">$25,000+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black font-bold py-4 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>
                                        Book Consultation <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                By submitting this form, you agree to our Privacy Policy and Terms of Service.
                            </p>
                        </form>
                    )}
                </motion.div>
            </section>
        </div>
    );
};

export default BookConsultation;
