import React, { useState } from 'react';
import { Calendar, PhoneCall, Shield as ShieldHeart, Stethoscope, Users, BadgeCheck } from 'lucide-react';
import CallbackModal from './CallbackModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const badgeIcons = [ShieldHeart, Stethoscope, Users, BadgeCheck];

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Video or Fallback */}
      <div className="absolute inset-0 overflow-hidden">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://media.istockphoto.com/id/1287414521/video/intravenous-medical-research-doctor-applying-tourniquet-on-black-guy-arm-before-taking-blood.mp4?s=mp4-640x640-is&k=20&c=z5dEHMc9-xR4jwxOv1Ir_fthm-DVEQmEvsLFeA2hlds="
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg')] bg-cover bg-center"></div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Proactive Health for a Productive Workplace
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-2xl">
            India's most complete preventive healthcare platform for corporates, employees & elders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2 h-5 w-5" /> Schedule a Demo
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 border border-cyan-300 text-base font-medium rounded-md text-white bg-transparent hover:bg-cyan-800/30 transition-all duration-300 backdrop-blur-sm"
            >
              <PhoneCall className="mr-2 h-5 w-5" /> Request a Call Back
            </button>
          </div>

          {/* Badge Section with Icons */}
          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-2">
              {badgeIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-cyan-600"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
            <p className="text-cyan-50 text-sm">
              Trusted by <span className="font-semibold">500+</span> companies across India
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;