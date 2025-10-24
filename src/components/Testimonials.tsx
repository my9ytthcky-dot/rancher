import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Rancher Services restored our entire storefront overnight. The sidewalks, windows, and awnings looked brand new before customers arrived.',
    name: 'Melissa Carter',
    role: 'General Manager, Midtown Market',
    rating: 5,
  },
  {
    quote:
      'The team was punctual, professional, and incredibly thorough. They took extra care around our landscaping and outdoor kitchen.',
    name: 'Daniel Nguyen',
    role: 'Homeowner, Sugar Land',
    rating: 5,
  },
  {
    quote:
      'We rely on Rancher Services for quarterly cleanings across multiple communities. Communication is easy and the results are flawless.',
    name: 'Jasmine Turner',
    role: 'HOA Property Manager',
    rating: 5,
  },
];

const highlights = [
  'Same-day quotes and scheduling',
  'Fully licensed, bonded & insured crew',
  'Eco-friendly, non-toxic detergents',
  'Satisfaction guaranteed on every project',
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="fade-in-up mb-16 text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-responsive-2xl text-balance font-bold leading-tight text-gray-900">
            Five-star experiences from Houston neighbors
          </h2>
          <p className="text-balance mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            We measure success by the smiles and referrals of our clients. Here are a few recent stories from homeowners,
            property managers, and business owners who trust us with their curb appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card flex h-full flex-col justify-between rounded-3xl p-8">
              <Quote className="h-10 w-10 text-blue-600" />
              <p className="mt-6 flex-1 text-lg leading-relaxed text-gray-700">“{testimonial.quote}”</p>
              <div className="mt-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-blue-600 px-8 py-12 text-white shadow-large">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold">Your property could be our next success story</h3>
              <p className="mt-4 text-white/80">
                Share your project details and receive a tailored cleaning plan, complete with transparent pricing and a
                dedicated project manager.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 text-sm font-semibold text-white/90 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3">
                  <Star className="h-4 w-4 text-amber-300" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-soft transition hover:bg-blue-50"
            >
              Get My Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

