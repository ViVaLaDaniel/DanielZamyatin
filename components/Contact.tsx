"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-5xl font-bold gradient-text mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
          <div className="glass-card p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition-colors group">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>{siteConfig.email}</span>
                </a>

                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition-colors group">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <span>{siteConfig.phone}</span>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                <p>Marbella, Spain</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"></textarea>
              </div>

              <button type="submit" disabled={status === "sending"} className="btn btn-gold w-full">
                {status === "idle" && <><Send size={20} /> Send Message</>}
                {status === "sending" && "Sending..."}
                {status === "sent" && "✓ Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
