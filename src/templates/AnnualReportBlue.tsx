import React from 'react';
import { Sheet, Frame, Flow } from '../components/document/primitives/geometric-primitives';
import { GraduationCap, Mail, Phone, Globe, Quote, Shield, Award, Users, BookOpen } from 'lucide-react';

export const AnnualReportBlueTemplate: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-6">
      {/* COVER PAGE */}
      <Sheet size="A4" orientation="portrait" className="p-0 relative overflow-hidden bg-white shadow-2xl">
        {/* Top Organic Blue Swoosh Graphic */}
        <div className="absolute top-0 right-0 w-[85%] h-[60%] bg-gradient-to-bl from-blue-700 via-blue-800 to-indigo-900 rounded-bl-[180px] z-10 p-12 text-white flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm tracking-wide">Lorem International</div>
                <div className="text-[9pt] text-blue-200 uppercase tracking-widest font-mono">School</div>
              </div>
            </div>
            <div className="text-right font-mono text-blue-200 text-xs">www.example.com</div>
          </div>

          <div className="mt-auto mb-6">
            <span className="text-4xl font-bold font-mono tracking-tight text-blue-200 block mb-1">2032</span>
            <h1 className="text-4xl font-bold font-sans tracking-tight text-white leading-none">
              Annual Report
            </h1>
            <p className="mt-3 text-blue-100 text-xs font-serif italic max-w-xs">
              A journey of learning, leadership and lasting impact.
            </p>
          </div>
        </div>

        {/* Bottom Hero Architecture Image (Public Unsplash URL) */}
        <div className="absolute bottom-12 left-0 right-0 h-[48%] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="School Modern Building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer Contact Bar */}
        <footer className="absolute bottom-0 left-0 right-0 h-12 bg-slate-900 text-slate-300 text-[8.5pt] font-mono px-8 flex items-center justify-between z-20">
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-400" /> (+00) 123 4567 890</span>
          <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400" /> email@example.com</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-blue-400" /> www.example.com</span>
        </footer>
      </Sheet>

      {/* SPREAD 1: DIRECTOR MESSAGE & MISSION/VISION */}
      <Sheet size="A4" orientation="portrait" className="p-10 relative bg-white shadow-2xl">
        <Frame className="h-full">
          <Flow className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                <GraduationCap className="w-5 h-5 text-blue-700" />
                <span>Lorem International School &bull; Report 2032</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Página 02</span>
            </div>

            {/* Director Message Section */}
            <div className="grid grid-cols-12 gap-6 my-4 items-center">
              <div className="col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-blue-800">
                  <Quote className="w-8 h-8 text-blue-600 shrink-0" />
                  <h2 className="text-2xl font-bold font-serif text-slate-900">Message from the Director</h2>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed text-justify font-serif">
                  Dear Parents, Students, and Members of Our School Community: As we reflect on the milestones achieved throughout 2032, I am filled with immense pride and gratitude. Our dedication to holistic education, academic excellence, and empathetic leadership has nurtured an environment where every child thrives.
                </p>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <div className="font-serif italic text-blue-900 font-bold text-lg">Jennifer Smith</div>
                  <span className="text-[8pt] font-mono text-slate-500">Executive School Director</span>
                </div>
              </div>

              <div className="col-span-5 relative overflow-hidden rounded-xl border border-slate-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Director Portrait"
                  className="w-full h-52 object-cover"
                />
                <div className="p-2 bg-blue-800 text-white text-center text-[8pt] font-mono font-bold">
                  A Year of Growth & Gratitude
                </div>
              </div>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div className="p-5 rounded-xl bg-blue-50 border border-blue-200">
                <h3 className="text-base font-bold font-sans text-blue-900 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-700" />
                  Our Mission
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-serif">
                  To empower curious learners with academic excellence, ethical integrity, and creative problem-solving skills to lead in a global society.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
                <h3 className="text-base font-bold font-sans text-blue-400 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Our Vision
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-serif">
                  To be a world-renowned educational institution that inspires innovation, kindness, and lifelong learning for generations to come.
                </p>
              </div>
            </div>
          </Flow>
        </Frame>
      </Sheet>

      {/* SPREAD 2: PERFORMANCE & METRICS DASHBOARD */}
      <Sheet size="A4" orientation="portrait" className="p-10 relative bg-white shadow-2xl">
        <Frame className="h-full">
          <Flow className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <h2 className="text-xl font-bold font-serif text-slate-900">Performance & Academic Metrics</h2>
              <span className="text-xs font-mono text-slate-400">Página 03</span>
            </div>

            {/* Circular Stats Grid (Matching Image 1) */}
            <div className="grid grid-cols-4 gap-4 text-center my-6">
              <div className="p-4 rounded-xl bg-blue-600 text-white shadow-lg flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-2xl font-bold font-mono mb-2">
                  110
                </div>
                <span className="text-xs font-bold font-sans">Primary GPA</span>
              </div>

              <div className="p-4 rounded-xl bg-blue-800 text-white shadow-lg flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-2xl font-bold font-mono mb-2">
                  70%
                </div>
                <span className="text-xs font-bold font-sans">STEM Honors</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-white shadow-lg flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-2xl font-bold font-mono mb-2">
                  98
                </div>
                <span className="text-xs font-bold font-sans">Faculty Rate</span>
              </div>

              <div className="p-4 rounded-xl bg-indigo-700 text-white shadow-lg flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-2xl font-bold font-mono mb-2">
                  248
                </div>
                <span className="text-xs font-bold font-sans">Graduates</span>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 p-6 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">Standardized Assessment Highlights</h3>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                  <span>Mathematics Proficiency</span>
                  <span className="font-mono text-blue-700">96%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                  <span>Language Arts & Literature</span>
                  <span className="font-mono text-blue-700">92%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-700 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                  <span>Global Leadership & Ethics</span>
                  <span className="font-mono text-blue-700">100%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </Flow>
        </Frame>
      </Sheet>
    </div>
  );
};
