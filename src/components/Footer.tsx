import React from 'react';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8 text-cyan-400 mr-2" />
              <span className="font-bold text-xl">PrevaCare</span>
            </div>
            <p className="text-slate-300 mb-6">
              India's most complete preventive healthcare platform for corporates, employees & elders.
            </p>
            <div className="space-y-2">
              <a href="#" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@prevacare.com</span>
              </a>
              <a href="#" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765 43210</span>
              </a>
              <a href="#" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Bangalore, India</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">For Corporates</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">For Individuals</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Health Check-ups</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Diagnostics</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Corporate Wellness</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Health Analytics</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Elder Care</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Health Coaching</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest health tips and corporate wellness trends.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent flex-grow"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} PrevaCare. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;