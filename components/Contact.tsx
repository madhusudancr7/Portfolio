import React, { useState } from 'react';
import Section from './Section';
import SpinnerIcon from './icons/SpinnerIcon';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            setTimeout(() => {
                try {
                    const submission = { ...formData, submittedAt: new Date().toISOString() };
                    const existing = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                    localStorage.setItem('contactSubmissions', JSON.stringify([...existing, submission]));
                    setIsSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setTimeout(() => setIsSubmitted(false), 5000);
                } catch (error) {
                    console.error("Failed to save submission:", error);
                    alert("An error occurred. Please try again.");
                } finally {
                    setIsSubmitting(false);
                }
            }, 1500);
        }
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-2xl mx-auto text-center">
                <p 
                    className="mb-10 text-lg text-text-secondary dark:text-dark-text-secondary opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div 
                    className="bg-card-bg dark:bg-dark-card-bg p-8 rounded-xl border border-border-color dark:border-dark-border-color backdrop-blur-sm opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                >
                    {isSubmitted ? (
                        <div className="bg-accent/10 border border-accent text-accent px-4 py-3 rounded-md" role="alert">
                            <strong className="font-bold">Thank you! </strong>
                            <span className="block sm:inline">Your message has been received. I'll get back to you soon.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input 
                                        type="text" name="name" placeholder="Your Name"
                                        value={formData.name} onChange={handleChange}
                                        className="w-full bg-card-bg/30 dark:bg-dark-card-bg/30 border border-border-color dark:border-dark-border-color text-text-primary dark:text-dark-text-primary p-4 rounded-md placeholder:text-text-secondary/60 dark:placeholder:text-dark-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                                        aria-label="Your Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
                                </div>
                                <div>
                                    <input 
                                        type="email" name="email" placeholder="Your Email"
                                        value={formData.email} onChange={handleChange}
                                        className="w-full bg-card-bg/30 dark:bg-dark-card-bg/30 border border-border-color dark:border-dark-border-color text-text-primary dark:text-dark-text-primary p-4 rounded-md placeholder:text-text-secondary/60 dark:placeholder:text-dark-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                                        aria-label="Your Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <input 
                                    type="text" name="subject" placeholder="Subject"
                                    value={formData.subject} onChange={handleChange}
                                    className="w-full bg-card-bg/30 dark:bg-dark-card-bg/30 border border-border-color dark:border-dark-border-color text-text-primary dark:text-dark-text-primary p-4 rounded-md placeholder:text-text-secondary/60 dark:placeholder:text-dark-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                                    aria-label="Subject"
                                 />
                                {errors.subject && <p className="text-red-500 text-sm mt-1 text-left">{errors.subject}</p>}
                            </div>
                            <div>
                                <textarea
                                    name="message" placeholder="Your Message" rows={5}
                                    value={formData.message} onChange={handleChange}
                                    className="w-full bg-card-bg/30 dark:bg-dark-card-bg/30 border border-border-color dark:border-dark-border-color text-text-primary dark:text-dark-text-primary p-4 rounded-md placeholder:text-text-secondary/60 dark:placeholder:text-dark-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                                    aria-label="Your Message"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1 text-left">{errors.message}</p>}
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                data-interactive="true"
                                className={`flex justify-center items-center gap-2 bg-accent text-white px-8 py-3 rounded-md font-bold text-lg transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-dark-background focus:ring-accent shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/40 hover:opacity-90 w-full sm:w-auto mx-auto`}
                            >
                                {isSubmitting && <SpinnerIcon className="w-5 h-5 animate-spin" />}
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Contact;