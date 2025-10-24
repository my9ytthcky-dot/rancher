import React from 'react';
import { Award, Users, MapPin, Star, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '3+', label: 'Years Experience', description: 'Trusted Service' },
    { icon: Users, number: '200+', label: 'Happy Customers', description: 'Satisfied Clients' },
    { icon: MapPin, number: '50+', label: 'Areas Served', description: 'Greater Houston' },
    { icon: Star, number: '5/5', label: 'Google Rating', description: 'Verified Reviews' },
  ];

  const certifications = [
    'Licensed, bonded & fully insured',
    'EPA compliant & eco-conscious',
    'Better Business Bureau A+ rating',
    'PWNA certified technicians',
    'Commercial & residential specialists',
    'Emergency response within 24 hours',
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="fade-in-left">
            <div className="mb-8 inline-flex items-center space-x-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-700">
              <Shield size={16} />
              <span>Trusted Professionals</span>
            </div>

            <h2 className="text-responsive-2xl text-balance font-bold leading-tight text-gray-900">
              Houston's most dependable
              <span className="block gradient-text">exterior cleaning team</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                For more than three years, Rancher Services has helped homeowners, HOAs, and business owners across Greater
                Houston protect their investments. Every project receives the same careful preparation, premium equipment, and
                white-glove communication.
              </p>
              <p>
                Our certified technicians are licensed, bonded, and insured. We leverage soft-wash technology and responsible
                detergents that safeguard landscaping while removing the toughest buildup.
              </p>
              <p>
                From family residences to large commercial plazas, we deliver consistent results backed by a 100% satisfaction
                guarantee—if something isn’t perfect, we make it right immediately.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert} className="card flex items-center space-x-3 rounded-xl p-4 text-left">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-right space-y-10">
            <div className="relative overflow-hidden rounded-3xl shadow-large">
              <img
                src="https://images.pexels.com/photos/5691656/pexels-photo-5691656.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Pressure washing technician cleaning siding"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-6 text-gray-900 shadow-large">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Professional excellence</p>
                <p className="mt-1 text-lg font-semibold">Certified crew • Premium commercial equipment</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="card hover-lift flex flex-col items-center rounded-2xl p-6 text-center"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-soft">
                      <IconComponent size={24} />
                    </span>
                    <span className="text-3xl font-bold text-blue-600">{stat.number}</span>
                    <span className="mt-1 text-lg font-semibold text-gray-800">{stat.label}</span>
                    <span className="text-sm text-gray-500">{stat.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="fade-in-up">
          <div className="card mx-auto max-w-4xl rounded-3xl p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-soft">
              <Shield size={28} />
            </div>
            <h3 className="mt-6 text-3xl font-bold text-gray-900">Our Satisfaction Promise</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We stand behind every project. If anything falls short of perfection, our crew returns immediately to address it at
              no additional cost. It’s the peace of mind our clients count on.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg"
              >
                Schedule Your Cleaning
              </button>
              <a href="tel:+1-346-401-0323" className="btn-secondary text-lg">
                Speak with a Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
