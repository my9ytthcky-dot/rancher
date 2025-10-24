import React from 'react';
import { Home, Building2, Car, Fence, Droplets, Sparkles, Phone, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Soft Washing',
      description:
        "Low-pressure washing that safely removes buildup from siding, brick, stucco, and trim without damaging delicate surfaces.",
      features: ['Gentle soft-wash system', 'Spotless windows and frames', 'Gutter brightening', 'Eco-friendly detergents'],
      price: 'Starting at $199',
      popular: false,
    },
    {
      icon: Building2,
      title: 'Commercial Property Detailing',
      description:
        'Scheduled maintenance for storefronts, HOAs, and offices that keeps entrances, sidewalks, and parking lots pristine.',
      features: ['Flexible scheduling', 'After-hours availability', 'Fully insured team', 'Maintenance plans'],
      price: 'Custom packages',
      popular: true,
    },
    {
      icon: Droplets,
      title: 'Driveway & Walkway Renewal',
      description:
        'Cut through oil stains and embedded grime to restore bright, even concrete and extend the life of your hardscapes.',
      features: ['Hot-water treatment', 'Surface sealing', 'Rust & stain removal', 'Slip-resistant finish'],
      price: 'Starting at $149',
      popular: false,
    },
    {
      icon: Sparkles,
      title: 'Deck & Patio Refresh',
      description:
        'Revive outdoor living spaces by removing mildew, pollen, and discoloration so wood, stone, and pavers look brand new.',
      features: ['Wood-safe cleaning', 'Pre-stain preparation', 'Mold & algae removal', 'Protective rinses'],
      price: 'Starting at $179',
      popular: false,
    },
    {
      icon: Fence,
      title: 'Fence Brightening',
      description:
        'Restore definition to wood, vinyl, and metal fencing with specialized solutions that lift grime and prep for sealing.',
      features: ['All fence materials', 'Color restoration', 'Quick turnaround', 'Finish-ready surfaces'],
      price: 'Starting at $129',
      popular: false,
    },
    {
      icon: Car,
      title: 'Fleet & Equipment Washing',
      description:
        'On-site washing for work trucks, farm equipment, and trailers to keep your brand professional and OSHA compliant.',
      features: ['Mobile service', 'Degreasing treatment', 'Water recovery available', 'Protective wax options'],
      price: 'Ask for quote',
      popular: false,
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="fade-in-up mb-20 text-center">
          <div className="mx-auto mb-8 inline-flex items-center space-x-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />
            <span>Signature Services</span>
          </div>

          <h2 className="text-responsive-2xl text-balance font-bold leading-tight text-gray-900">
            Spotless Finishes for Every Surface
          </h2>

          <p className="text-balance mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Whether you are preparing to sell, refreshing seasonal curb appeal, or maintaining commercial standards, our curated
            services deliver polished, long-lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.title}
                className={`card relative flex h-full flex-col justify-between gap-6 rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
                style={{ animationDelay: `${0.1 * (index % 3)}s` }}
              >
                {service.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most Requested
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-soft">
                    <IconComponent size={26} />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-gray-700">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary px-6 py-2 text-sm"
                  >
                    Get Quote
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="card rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-bold text-gray-900">Property Managers</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Dependable maintenance schedules that keep entrances, walkways, and common areas clean without disrupting guests or
              tenants.
            </p>
          </div>
          <div className="card rounded-2xl bg-blue-600 p-8 text-white">
            <h3 className="text-2xl font-bold">Need a Custom Plan?</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              We design bundled service packages tailored to your property. Share your goals and we will build a maintenance plan
              around them.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-soft transition hover:bg-blue-50"
            >
              Request Consultation
            </button>
          </div>
          <div className="card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900">Real Estate Refresh</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Fast turnarounds for listings, open houses, and HOA compliance checks that need to shine on short notice.
            </p>
            <a href="tel:+1-346-401-0323" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              <Phone size={18} />
              Call (346) 401-0323
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
