'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Mail, Instagram, Linkedin, Dribbble, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate fast client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-dark border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                START A CONVERSATION
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white uppercase leading-tight">
                Have a project <br />
                <span className="text-zinc-400">in mind?</span>
              </h2>
              <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
                Let's build something meaningful together. We are currently accepting new projects and inquiries.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm space-y-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">DIRECT EMAIL</span>
              <a
                href="mailto:hello@novastudio.design"
                className="group flex items-center gap-3 text-xl sm:text-2xl font-bold font-display text-white hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                hello@novastudio.design
              </a>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
                FOLLOW US
              </span>
              <div className="flex items-center gap-4">
                {[
                  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
                  { name: 'Behance', icon: Dribbble, href: 'https://behance.net' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent hover:bg-zinc-800 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold font-display text-white">
                  Thanks! We'll be in touch soon.
                </h3>
                <p className="text-zinc-400 text-base max-w-md mx-auto">
                  We have received your message and will review your project details within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-zinc-800 border border-zinc-700 rounded-full hover:bg-zinc-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className={`w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border ${
                      errors.name ? 'border-red-500/80' : 'border-zinc-800'
                    } text-white placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border ${
                      errors.email ? 'border-red-500/80' : 'border-zinc-800'
                    } text-white placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border ${
                      errors.message ? 'border-red-500/80' : 'border-zinc-800'
                    } text-white placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 group"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
