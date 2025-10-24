import React from 'react';
import { Phone, CheckCircle, Star, Award, Shield } from 'lucide-react';
import heroImage from './willwashing.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustIndicators = [
    { icon: Shield, title: "Licensed", subtitle: "& Insured" },
    { icon: Award, title: "3+ Years", subtitle: "Experience" },
    { icon: CheckCircle, title: "Free", subtitle: "Estimates" },
    { icon: Star, title: "Same Day", subtitle: "Service" }
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gray-900 pt-24 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-blue-900/80" />
        <img
          src="https://images.pexels.com/photos/6190373/pexels-photo-6190373.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional pressure washing team cleaning a driveway"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_60%)]" />
      </div>

      <div className="container-padding relative z-10 mx-auto max-w-7xl section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="fade-in-up">
              <div className="glass inline-flex items-center space-x-3 rounded-full px-6 py-3 mb-8 border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">LICENSED & INSURED</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm font-semibold text-white">5/5 RATED</span>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-responsive-3xl text-balance font-bold leading-tight tracking-tight mb-8">
                Houston's Premier
                <span className="block text-blue-400">Pressure Washing</span>
                <span className="block text-white">Specialists</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-balance mb-10 max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl">
                Polished curb appeal starts with a pristine exterior. From driveways to commercial plazas, our licensed
                professionals deliver spotless results with eco-conscious solutions and meticulous care.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-1">
              <button 
                onClick={scrollToContact}
                className="btn-primary text-lg"
              >
                Get Free Quote
              </button>
              <a 
                href="tel:+1-346-401-0323"
                className="flex items-center justify-center space-x-3 glass text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Phone size={20} />
                <span>(346) 401-0323</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="fade-in-up stagger-2 grid grid-cols-2 gap-4 pt-8 lg:grid-cols-4">
              {trustIndicators.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="glass rounded-lg p-4 text-center border border-white/20 hover-lift">
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-white/70 text-xs">{item.subtitle}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden rounded-2xl bg-white/5 p-6 backdrop-blur lg:block">
            <div className="float relative overflow-hidden rounded-2xl shadow-large">
              <img src={heroImage} alt="Professional pressure washing team at work" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-6 text-gray-900 shadow-large">
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-sm font-semibold text-gray-600">Years of trusted service</div>
            </div>

            <div className="absolute -top-6 right-6 rounded-xl border border-white/20 bg-blue-600/90 p-6 text-white shadow-large">
              <div className="mb-2 flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-300" />
                ))}
              </div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-white/90">Satisfied clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
