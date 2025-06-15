import React from 'react';
import { Activity, Smartphone, Database, Brain, Play, CheckCircle, TrendingUp, Users, BarChart as ChartBar } from 'lucide-react';

const ProactiveModel: React.FC = () => {
  const steps = [
    {
      icon: <Activity className="h-12 w-12 text-cyan-600" />,
      title: 'Lab Check',
      description: 'Comprehensive diagnostics to establish health baselines',
      highlight: '50+ health markers'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-cyan-600" />,
      title: 'App',
      description: 'Personalized mobile interface for tracking and engagement',
      highlight: '98% user adoption'
    },
    {
      icon: <Database className="h-12 w-12 text-cyan-600" />,
      title: 'Health Data',
      description: 'Secure collection and integration of health metrics',
      highlight: 'HIPAA compliant'
    },
    {
      icon: <Brain className="h-12 w-12 text-cyan-600" />,
      title: 'AI Analysis',
      description: 'Advanced algorithms identify patterns and risks',
      highlight: '95% accuracy'
    },
    {
      icon: <Play className="h-12 w-12 text-cyan-600" />,
      title: 'Action',
      description: 'Personalized intervention plans for optimal outcomes',
      highlight: 'Real-time updates'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-cyan-600" />,
      title: 'Real-time Health Tracking',
      description: 'Monitor vital health metrics across your organization instantly',
      stat: '24/7 monitoring'
    },
    {
      icon: <Users className="h-6 w-6 text-cyan-600" />,
      title: 'Employee Risk Scoring',
      description: 'Identify and address health risks before they escalate',
      stat: '85% early detection'
    },
    {
      icon: <ChartBar className="h-6 w-6 text-cyan-600" />,
      title: 'Engagement Insights',
      description: 'Track program participation and effectiveness',
      stat: '92% engagement'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-cyan-600" />,
      title: 'ROI Measurement',
      description: 'Quantify the impact of your wellness investments',
      stat: '3.5x ROI'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Proactive Model
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive approach to preventive healthcare that identifies risks before they become problems
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center border-2 border-cyan-200 shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4 group-hover:scale-110 group-hover:border-cyan-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-center text-sm mb-3">{step.description}</p>
                  <span className="bg-cyan-50 text-cyan-700 text-sm font-medium px-3 py-1 rounded-full">
                    {step.highlight}
                  </span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-cyan-200 my-4 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-to-r from-cyan-50 to-slate-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-cyan-50 w-12 h-12 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{benefit.title}</h4>
                <p className="text-slate-600 text-sm mb-3">{benefit.description}</p>
                <div className="bg-cyan-50 text-cyan-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Our Approach
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProactiveModel;