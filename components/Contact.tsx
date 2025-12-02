"use client";

import { siteConfig, translations } from "@/lib/config";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjknrylk");
  const { language } = useLanguageStore();
  const t = translations[language];

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center p-8 glass-card max-w-2xl mx-auto">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle size={40} />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">{t.messageSent}</h3>
            <p className="text-gray-300 text-lg mb-8">
              {t.thankYou}
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-outline"
            >
              {t.sendAnother}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-5xl font-bold gradient-text mb-12">{t.getInTouch}</h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Info + Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Info */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">{t.contactInfo}</h3>
              
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg">{siteConfig.email}</span>
                </a>
                
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Phone size={24} />
                  </div>
                  <span className="text-lg">{siteConfig.phone}</span>
                </a>
                
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <span className="text-lg">WhatsApp</span>
                </a>

                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <span className="text-lg">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="glass-card p-2 h-[300px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51247.96987624634!2d-4.939878768074646!3d36.51007286663273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72d8070442345f%3A0x40463fd8ca1c660!2sMarbella%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sus!4v1709667890000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">{t.sendMessage}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t.message}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" disabled={state.submitting} className="btn btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                {state.submitting ? (
                  t.sending
                ) : (
                  <><Send size={20} /> {t.sendMessage}</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
