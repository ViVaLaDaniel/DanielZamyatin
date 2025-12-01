"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = siteConfig.headline;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Avatar */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 glow animate-float">
            <Image
              src="/avatar.png"
              alt="Daniel Zamyatin"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold gradient-text">
            {siteConfig.name}
          </h1>

          {/* Typewriter headline */}
          <div className="h-24 flex items-center">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Location & Objective */}
          <div className="flex flex-col gap-2 text-gray-400">
            <p className="text-lg">{siteConfig.location}</p>
            <p className="text-sm italic">{siteConfig.objective}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn btn-outline">
              <Mail size={20} />
              Email
            </a>
            <a href={`tel:${siteConfig.phone}`} className="btn btn-outline">
              <Phone size={20} />
              {siteConfig.phone}
            </a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a href="#contact" className="btn btn-gold">
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
