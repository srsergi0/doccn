import React from 'react';
import { Sheet, Frame, Flow } from '../components/document/primitives/geometric-primitives';
import { Hexagon, Zap, Target, ShieldCheck, CheckCircle2, User, Quote, Building2, Phone, Mail, Globe } from 'lucide-react';

export const AriannaCorporateRedTemplate: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-6">
      {/* COVER PAGE (Matching Image 2) */}
      <Sheet size="A4" orientation="portrait" className="p-0 relative overflow-hidden bg-white shadow-2xl">
        {/* Top Branding Section */}
        <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold font-mono text-xl shadow-md">
              A
            </div>
            <div>
              <div className="font-bold text-lg text-slate-900 tracking-tight leading-none font-sans">
                ARIANNA
              </div>
              <div className="text-[8pt] font-mono tracking-widest text-red-600 uppercase font-bold">
                SOLUTIONS
              </div>
            </div>
          </div>
          <div className="text-right text-[8.5pt] font-sans text-slate-600">
            <div className="font-bold text-slate-900">BUSINESS BROCHURE TEMPLATE</div>
            <div className="text-red-600 font-mono text-[7.5pt]">Building Solutions. Delivering Success.</div>
          </div>
        </div>

        {/* Middle Section: Black & White Skyscraper Photo + Sharp Diagonal Red Accent Stripe */}
        <div className="relative w-full h-[52%] bg-slate-950 overflow-hidden">
          {/* Black and White Skyscraper Image */}
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
            alt="Corporate B&W Skyscraper"
            className="w-full h-full object-cover grayscale contrast-125 opacity-80"
          />

          {/* Sharp Diagonal Red Stripe Overlay (Cutout matching Image 2) */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[12%] bg-red-600 transform -skew-x-12 z-10 shadow-2xl border-x border-red-500" />

          {/* Dark Overlay Banner */}
          <div className="absolute top-8 left-8 z-20 bg-slate-950/90 backdrop-blur-md p-6 border-l-4 border-red-600 rounded-r-lg max-w-sm">
            <span className="text-xs font-mono uppercase text-red-500 font-bold tracking-widest block mb-1">
              COMPANY PROFILE
            </span>
            <h1 className="text-3xl font-bold font-sans tracking-tight text-white">
              2024/25
            </h1>
            <div className="mt-2 text-[8pt] font-mono text-slate-400">
              www.ariannasolutions.com
            </div>
          </div>
        </div>

        {/* Bottom 3 Feature Cards (Matching Image 2) */}
        <div className="p-8 grid grid-cols-3 gap-4 bg-slate-50 border-t border-slate-200">
          <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs text-center">
            <div className="w-9 h-9 rounded-full bg-red-100 border border-red-200 text-red-600 flex items-center justify-center mx-auto mb-2">
              <Zap className="w-5 h-5" />
            </div>
            <strong className="text-xs font-bold text-slate-900 block font-sans">INNOVATIVE</strong>
            <p className="text-[7.5pt] text-slate-500 font-sans mt-1">We deliver creative solutions.</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs text-center">
            <div className="w-9 h-9 rounded-full bg-red-100 border border-red-200 text-red-600 flex items-center justify-center mx-auto mb-2">
              <Target className="w-5 h-5" />
            </div>
            <strong className="text-xs font-bold text-slate-900 block font-sans">STRATEGIC</strong>
            <p className="text-[7.5pt] text-slate-500 font-sans mt-1">Focused on growth and results.</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs text-center">
            <div className="w-9 h-9 rounded-full bg-red-100 border border-red-200 text-red-600 flex items-center justify-center mx-auto mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <strong className="text-xs font-bold text-slate-900 block font-sans">RELIABLE</strong>
            <p className="text-[7.5pt] text-slate-500 font-sans mt-1">Trusted by clients worldwide.</p>
          </div>
        </div>
      </Sheet>

      {/* SPREAD 1: WELCOME MESSAGE & TABLE OF CONTENTS */}
      <Sheet size="A4" orientation="portrait" className="p-10 relative bg-white shadow-2xl">
        <Frame className="h-full">
          <Flow className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-red-600 text-white font-bold font-mono text-xs flex items-center justify-center">A</div>
                <span className="font-bold text-xs text-slate-900">ARIANNA SOLUTIONS</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Página 02</span>
            </div>

            <div className="grid grid-cols-2 gap-8 my-4">
              {/* Left Column: Welcome Message */}
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-3">
                  <span className="text-[8pt] font-mono text-red-600 font-bold uppercase tracking-wider block">WELCOME</span>
                  <h2 className="text-xl font-bold font-sans text-slate-900">MESSAGE</h2>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-serif text-justify">
                  Welcome to Arianna Solutions. We are dedicated to providing innovative and reliable solutions that drive growth and success for businesses worldwide.
                </p>
                <div className="p-4 bg-slate-950 text-white rounded-lg border-l-4 border-red-600 flex items-center gap-3">
                  <Quote className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="text-[8pt] font-serif italic">Great businesses are built on great partnerships.</span>
                </div>
              </div>

              {/* Right Column: Table of Contents */}
              <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="border-l-4 border-red-600 pl-3 mb-4">
                  <span className="text-[8pt] font-mono text-red-600 font-bold uppercase tracking-wider block">TABLE OF</span>
                  <h2 className="text-xl font-bold font-sans text-slate-900">CONTENTS</h2>
                </div>

                <div className="space-y-2 text-xs font-sans">
                  {[
                    { num: '01', title: 'ABOUT OUR COMPANY' },
                    { num: '04', title: 'OUR MISSION & VISION' },
                    { num: '06', title: 'OUR SERVICES' },
                    { num: '08', title: 'OUR TEAM' },
                    { num: '10', title: 'PROJECTS & CASE STUDIES' },
                    { num: '12', title: 'CLIENTS & PARTNERS' },
                    { num: '14', title: 'WHY CHOOSE US' },
                    { num: '16', title: 'FUTURE GOALS' },
                    { num: '18', title: 'CONTACT INFORMATION' },
                  ].map((item) => (
                    <div key={item.num} className="flex justify-between items-center border-b border-slate-200 pb-1">
                      <span className="text-slate-800 font-medium">{item.title}</span>
                      <span className="font-mono text-red-600 font-bold text-xs">{item.num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Flow>
        </Frame>
      </Sheet>

      {/* SPREAD 2: WORK PROCESS & RED CIRCULAR DASHBOARD */}
      <Sheet size="A4" orientation="portrait" className="p-10 relative bg-white shadow-2xl">
        <Frame className="h-full">
          <Flow className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <h2 className="text-xl font-bold font-sans text-slate-900">OUR WORK PROCESS & RESULTS</h2>
              <span className="text-xs font-mono text-slate-400">Página 03</span>
            </div>

            {/* Red Circular Dashboard Stats (Matching Image 2) */}
            <div className="grid grid-cols-2 gap-6 my-4">
              <div className="p-6 bg-red-600 text-white rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-3xl font-bold font-mono mb-4">
                  500+
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans">Projects Completed</h3>
                  <p className="text-xs text-red-100 mt-1">Successfully delivered across various global industries.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-950 text-white rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-red-600/30 border-2 border-red-500 flex items-center justify-center text-3xl font-bold font-mono mb-4 text-red-400">
                  98%
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans">Client Satisfaction</h3>
                  <p className="text-xs text-slate-400 mt-1">Direct feedback score for excellence in execution.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-950 text-white rounded-2xl shadow-xl flex flex-col justify-between">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-slate-700 flex items-center justify-center text-3xl font-bold font-mono mb-4 text-white">
                  50+
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans">Expert Professionals</h3>
                  <p className="text-xs text-slate-400 mt-1">Dedicated team of senior engineers and advisors.</p>
                </div>
              </div>

              <div className="p-6 bg-red-700 text-white rounded-2xl shadow-xl flex flex-col justify-between">
                <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-3xl font-bold font-mono mb-4 text-white">
                  15+
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans">Years of Excellence</h3>
                  <p className="text-xs text-red-100 mt-1">Delivering value and building long-term trust.</p>
                </div>
              </div>
            </div>
          </Flow>
        </Frame>
      </Sheet>
    </div>
  );
};
