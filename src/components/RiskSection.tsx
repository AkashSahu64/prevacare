import React from 'react';
import { AlertCircle, ThermometerSnowflake, Brain, Heart, TrendingUp, Users, Activity } from 'lucide-react';

const RiskSection: React.FC = () => {
  const healthStats = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      stat: '1 in 4',
      description: 'Indians at risk for heart disease before age 40',
      trend: '+12% yearly'
    },
    {
      icon: <Brain className="h-8 w-8 text-red-500" />,
      stat: '87%',
      description: 'of employees report work-related stress affecting health',
      trend: '+23% post-pandemic'
    },
    {
      icon: <ThermometerSnowflake className="h-8 w-8 text-red-500" />,
      stat: '77 million',
      description: 'Indians with pre-diabetes, most undiagnosed',
      trend: 'Growing at 8% yearly'
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      stat: '68%',
      description: 'of chronic diseases are preventable with early intervention',
      trend: 'WHO Report 2023'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-slate-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What's at Risk if You Wait?
          </h2>
          <p className="text-slate-600">
            Delaying preventive care leads to higher costs, decreased productivity, and poorer health outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-slate-800">The Hidden Cost of Inaction</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Every year of delayed intervention increases healthcare costs by an average of 12% per employee.
                Early detection and prevention can save both lives and resources.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Healthcare Costs</span>
                    <span className="text-red-600">+12% yearly</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-red-500 w-[75%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Productivity Loss</span>
                    <span className="text-red-600">+18% yearly</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-red-500 w-[85%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-slate-800">Workplace Impact</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <span className="font-medium text-red-900">32% Higher Absenteeism</span>
                    <p className="text-sm text-red-700">Increased sick leaves and unplanned absences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <span className="font-medium text-red-900">25% Lower Productivity</span>
                    <p className="text-sm text-red-700">Reduced focus and work output</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <span className="font-medium text-red-900">40% Higher Turnover</span>
                    <p className="text-sm text-red-700">Increased attrition due to health issues</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
              <Activity className="h-6 w-6 text-red-500 mr-2" />
              Critical Health Statistics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {healthStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="rounded-full bg-red-50 p-3">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                      {stat.stat}
                    </span>
                  </div>
                  <p className="text-slate-700 mb-2">{stat.description}</p>
                  <div className="text-sm font-medium text-red-600">
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-slate-50 rounded-xl border border-red-200">
              <p className="text-lg font-medium text-slate-800 mb-6">
                With PrevaCare, your health story can change before illness begins.
              </p>
              <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Start Your Prevention Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;