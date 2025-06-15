import React from 'react';
import { CheckCircle, XCircle, ArrowRight, Activity, BarChart, FileCheck, Users, Shield } from 'lucide-react';

const WhyPreva: React.FC = () => {
  const painPoints = [
    {
      title: 'Rising absenteeism & burnout',
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      description: 'Employee health issues lead to increased absence and decreased productivity.',
      stat: '32% increase in sick leaves annually'
    },
    {
      title: 'No ROI from wellness spends',
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      description: 'Traditional wellness programs fail to show measurable business outcomes.',
      stat: '60% of wellness budgets show no returns'
    },
    {
      title: 'Manual compliance, no dashboard',
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      description: 'Labor-intensive tracking without centralized insights or reporting.',
      stat: '15+ hours/week spent on manual tracking'
    }
  ];

  const solutions = [
    {
      title: 'Doctor & diagnostics plans',
      icon: <Activity className="h-10 w-10 p-2 text-cyan-600" />,
      description: 'Comprehensive preventive care packages with doctor consultations and diagnostics.',
      highlight: '24/7 doctor access'
    },
    {
      title: 'Health dashboards & analytics',
      icon: <BarChart className="h-10 w-10 p-2 text-cyan-600" />,
      description: 'Real-time health insights and metrics to track employee wellness outcomes.',
      highlight: 'Real-time insights'
    },
    {
      title: 'Auto compliance certificates',
      icon: <FileCheck className="h-10 w-10 p-2 text-cyan-600" />,
      description: 'Automated compliance reporting to meet regulatory requirements effortlessly.',
      highlight: 'Zero manual work'
    },
    {
      title: 'Engagement tracking',
      icon: <Users className="h-10 w-10 p-2 text-cyan-600" />,
      description: 'Monitor program participation and effectiveness across your organization.',
      highlight: '95% engagement rate'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why PrevaCare for Corporates
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transform your corporate wellness approach with data-driven preventive healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Pain Points Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-slate-700 mb-6 flex items-center">
              <Shield className="h-6 w-6 text-red-500 mr-2" />
              Current Corporate Challenges
            </h3>
            
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-red-100">
                <div className="flex gap-4 items-start">
                  <div className="mt-1">{point.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-lg text-slate-800">{point.title}</h4>
                    <p className="text-slate-600 mb-3">{point.description}</p>
                    <div className="bg-red-50 text-red-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
                      {point.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-semibold text-slate-700 mb-6 flex items-center">
              <Shield className="h-6 w-6 text-cyan-600 mr-2" />
              PrevaCare Solutions
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-cyan-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="rounded-full bg-cyan-50 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                    {solution.icon}
                  </div>
                  <h4 className="font-medium text-lg text-slate-800 mb-2">{solution.title}</h4>
                  <p className="text-slate-600 text-sm mb-3">{solution.description}</p>
                  <div className="bg-cyan-50 text-cyan-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
                    {solution.highlight}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-md hover:shadow-lg">
                Talk to a Corporate Wellness Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPreva;