import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: 'support-bot',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Create email body
        const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Service Interest: ${formData.service === 'support-bot' ? 'AI Support & Knowledge Bot' : formData.service}

Message:
${formData.message}
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:contact@cortexlayertech.com?subject=New Contact Form Submission from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a short delay
        setTimeout(() => {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                service: 'support-bot',
                message: ''
            });
            setIsSubmitting(false);
            alert('Email client opened! Please send the email from your email application.');
        }, 1000);
    };

    return (
        <section id="contact" className="py-32 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                            Contact Us
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Have questions about our AI solutions? Get in touch and we'll help you get started.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                                    <p className="text-gray-400">contact@cortexlayertech.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Headquarters</h3>
                                    <p className="text-gray-400">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full bg-black/50 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors`}
                                        placeholder="John"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full bg-black/50 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors`}
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors`}
                                    placeholder="john@company.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Company *</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border ${errors.company ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors`}
                                    placeholder="Your Company"
                                />
                                {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Service Interest</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                                >
                                    <option value="support-bot">AI Support & Knowledge Bot</option>
                                    <option value="lead-agent" disabled>AI Lead & Meeting Agent (Coming Soon)</option>
                                    <option value="product-tagging" disabled>AI Product Tagging & Content AI (Coming Soon)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message *</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors`}
                                    placeholder="Tell us about your automation needs..."
                                />
                                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Opening Email...' : 'Send Message'} <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
