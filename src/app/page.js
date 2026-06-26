'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('design-ux');
  const [isCheckingSpeed, setIsCheckingSpeed] = useState(false);
  const [speedCheckDone, setSpeedCheckDone] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Contact Form State
  const [showContactForm, setShowContactForm] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // 'idle', 'submitting', 'success'

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const phone = formData.get('phone');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        console.error('Failed to send email');
        setFormStatus('');
        alert('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('');
      alert('An error occurred. Please try again.');
    }
  };

  // Speed checker animation effect
  useEffect(() => {
    let interval;
    if (isCheckingSpeed) {
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 98) {
            clearInterval(interval);
            return prev;
          }
          return prev + (Math.random() * 15);
        });
      }, 500);
    } else {
      setLoadingProgress(0);
    }
    return () => clearInterval(interval);
  }, [isCheckingSpeed]);

  const handleSpeedCheck = () => {
    setIsCheckingSpeed(true);
    setSpeedCheckDone(false);
    setTimeout(() => {
      setIsCheckingSpeed(false);
      setSpeedCheckDone(true);
    }, 5500); // 5.5 seconds simulation
  };

  // SVG Icons
  const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mr-1.5 text-amber-500"><path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4zm3.5-.5a.5.5 0 0 0-.5.5v40a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/><path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1zm11 14V1H3v14h10z"/></svg>
  );

  const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mr-1.5 text-amber-500"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.44-1.36.969-2.022 1.545-.19.167-.37.336-.54.502H7.5V1.077zM6.5 5.5H3.047a7.025 7.025 0 0 0-.573 2H6.5V5.5zm0 3H2.474c.148.718.344 1.402.573 2H6.5V8.5zm0 3H3.942c.321.439.68.835 1.054 1.173.19.171.386.328.583.472L6.5 11.5zm1 1.645c.197-.144.393-.301.583-.472.374-.338.733-.734 1.054-1.173H7.5v1.645zm0-3.645h3.927a7.025 7.025 0 0 0 .573-2H7.5v2zm0-3h4.5a7.025 7.025 0 0 0-.573-2H7.5v2zm0-3h3.042c-.362-.502-.73-.833-1.076-1.172A7.971 7.971 0 0 0 7.5 1.077v1.968z"/></svg>
  );

  // Severity Colors
  const colors = {
    critical: 'bg-[#FF4D4F]/10 text-[#FF4D4F] border-[#FF4D4F]/20',
    high: 'bg-[#FA8C16]/10 text-[#FA8C16] border-[#FA8C16]/20',
    medium: 'bg-[#FADB14]/10 text-[#FADB14] border-[#FADB14]/20',
    success: 'bg-[#52C41A]/10 text-[#52C41A] border-[#52C41A]/20',
  };

  const Badge = ({ level }) => {
    const style = colors[level.toLowerCase()] || colors.medium;
    return (
      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded border ${style}`}>
        {level}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 font-sans">
      
      {/* --- PRINT ONLY: Cover Page --- */}
      <div className="hidden print:flex flex-col items-center justify-center h-screen w-full bg-slate-950 text-white p-20 text-center break-after-page">
        <h1 className="text-5xl font-extrabold mb-6 text-amber-500">Website Performance Audit</h1>
        <h2 className="text-3xl font-semibold mb-12">InHouse Incorp</h2>
        <div className="mt-auto space-y-4">
          <p className="text-xl text-slate-400">Prepared By: Mutant Technologies</p>
          <p className="text-lg text-slate-500">Confidential Document</p>
        </div>
      </div>

      {/* --- PRINT ONLY: Table of Contents --- */}
      <div className="hidden print:block h-screen w-full p-12 break-after-page">
        <h2 className="text-4xl font-bold mb-8 border-b border-slate-800 pb-4 text-amber-500">Table of Contents</h2>
        <ul className="space-y-6 text-2xl">
          <li className="flex justify-between border-b border-slate-800 border-dashed pb-2"><span>1. Executive Summary</span> <span>3</span></li>
          <li className="flex justify-between border-b border-slate-800 border-dashed pb-2"><span>2. Design & UX Findings</span> <span>4</span></li>
          <li className="flex justify-between border-b border-slate-800 border-dashed pb-2"><span>3. Speed & Mobile Assessment</span> <span>6</span></li>
          <li className="flex justify-between border-b border-slate-800 border-dashed pb-2"><span>4. SEO & Traffic Analysis</span> <span>8</span></li>
          <li className="flex justify-between border-b border-slate-800 border-dashed pb-2"><span>5. Security & CRO</span> <span>10</span></li>
          <li className="flex justify-between border-b border-slate-800 border-dashed pb-2"><span>6. Recommendations & Roadmap</span> <span>12</span></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 print:p-0">
        
        {/* Header (Hidden in print cover) */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4 print:hidden">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-amber-500 bg-clip-text text-transparent">
              Digital Audit & Growth Report
            </h1>
            <div className="flex flex-wrap items-center mt-3 gap-y-2 gap-x-4 text-sm text-slate-400">
              <span className="flex items-center"><BuildingIcon /> Client: InHouse Incorp</span>
              <span className="flex items-center"><GlobeIcon /> inhouseincorp.com</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              Export PDF
            </button>
          </div>
        </header>

        {/* HERO SECTION - KPI Dashboard */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-xl font-bold mb-6 flex items-center print:text-amber-500">
            <span className="w-2 h-6 bg-amber-500 mr-3 rounded-sm"></span> Key Performance Indicators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Organic Traffic', value: '0 /mo', color: 'text-[#FF4D4F]' },
              { label: 'Keywords', value: '6', color: 'text-[#FA8C16]' },
              { label: 'Backlinks', value: '382', color: 'text-slate-100' },
              { label: 'Domain Auth', value: '2/100', color: 'text-[#FA8C16]' },
              { label: 'Critical Issues', value: '3', color: 'text-[#FF4D4F]' },
              { label: 'Growth Potential', value: 'HIGH', color: 'text-[#52C41A]' }
            ].map((kpi, idx) => (
              <div key={idx} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-5 rounded-2xl hover:border-amber-500/30 transition-all hover:-translate-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2">{kpi.label}</span>
                <span className={`text-2xl font-extrabold ${kpi.color}`}>{kpi.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-6">Overall Website Score</h3>
            <div className="relative w-48 h-48 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-xl">
                <circle cx="96" cy="96" r="85" className="stroke-slate-800/50 fill-none" strokeWidth="12" />
                <circle 
                  cx="96" cy="96" r="85" 
                  className="stroke-amber-500 fill-none transition-all duration-1000 ease-out" 
                  strokeWidth="12" strokeDasharray="534" strokeDashoffset="240" strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">5.5</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 mt-1">out of 10</span>
              </div>
            </div>
            <Badge level="Medium" />
          </div>

          <div className="lg:col-span-2 bg-slate-900/30 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-100">
              <svg className="w-6 h-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Executive Summary
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">Current Situation</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  InHouse Incorp’s website provides a professional first aesthetic impression with appropriate industrial color palettes. However, beneath the surface, it suffers from critical structural flaws, extremely slow mobile loading times, and broken layouts that severely diminish its effectiveness as a digital asset.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-[#FF4D4F] uppercase tracking-wider mb-2">Business Impact</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The current performance metrics (11s+ load times) are actively turning away mobile prospects. Broken staging links and missing security headers communicate unprofessionalism to enterprise clients, while technical SEO errors are preventing the site from ranking for valuable organic keywords, resulting in zero estimated monthly organic traffic.
                </p>
              </div>

              <div className="bg-amber-500/5 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <h3 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-1">Recommended Next Step</h3>
                <p className="text-slate-300 text-sm">
                  We highly recommend a complete platform migration and redesign from the current architecture to a modern <strong>Next.js</strong> framework. This will instantly resolve speed bottlenecks, provide impenetrable security, and create an enterprise-grade foundation for SEO growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex border-b border-slate-800 mb-8 overflow-x-auto gap-2 no-scrollbar sticky top-0 bg-slate-950/80 backdrop-blur-md z-10 print:hidden">
          {[
            { id: 'design-ux', label: 'Design & UX' },
            { id: 'speed-mobile', label: 'Speed & Mobile' },
            { id: 'seo-rankings', label: 'SEO & Traffic' },
            { id: 'security-cro', label: 'Security & CRO' },
            { id: 'actions-wins', label: 'Impact & Next Steps' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold rounded-t-xl transition-all flex-shrink-0 border-b-2 ${
                activeTab === tab.id 
                  ? 'border-amber-500 text-amber-500 bg-slate-900/50' 
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: Design & UX */}
        {activeTab === 'design-ux' && (
          <div className="space-y-10 animate-fade-in-up print:block">
            <h2 className="hidden print:block text-3xl font-bold mb-6 text-amber-500">Design & UX Findings</h2>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-slate-200">
                <span className="w-8 h-8 rounded-full bg-[#52C41A]/20 text-[#52C41A] flex items-center justify-center mr-3">✓</span>
                What Works Well
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900/40 border border-[#52C41A]/20 p-6 rounded-2xl hover:border-[#52C41A]/50 transition-colors">
                  <h4 className="font-bold text-[#52C41A] mb-2 text-lg">Branding</h4>
                  <p className="text-sm text-slate-400">Professional industrial dark blue color palette (#203a71) accurately matches the target context.</p>
                </div>
                <div className="bg-slate-900/40 border border-[#52C41A]/20 p-6 rounded-2xl hover:border-[#52C41A]/50 transition-colors">
                  <h4 className="font-bold text-[#52C41A] mb-2 text-lg">Typography</h4>
                  <p className="text-sm text-slate-400">Modern, readable fonts (Poppins/Roboto) with consistent styling hierarchy.</p>
                </div>
                <div className="bg-slate-900/40 border border-[#52C41A]/20 p-6 rounded-2xl hover:border-[#52C41A]/50 transition-colors">
                  <h4 className="font-bold text-[#52C41A] mb-2 text-lg">Navigation</h4>
                  <p className="text-sm text-slate-400">Logical menu hierarchy providing easy desktop navigation through services.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-slate-200">
                <span className="w-8 h-8 rounded-full bg-[#FF4D4F]/20 text-[#FF4D4F] flex items-center justify-center mr-3">✕</span>
                Critical UI/UX Issues
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 hover:border-slate-700 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-slate-200">Staging Links Detected</h4>
                    <Badge level="Critical" />
                  </div>
                  <p className="text-sm text-slate-400"><strong>Impact:</strong> Visitors clicking navigation may be redirected to an unsecured, broken developer environment, destroying brand trust instantly.</p>
                  <div className="mt-auto pt-4 border-t border-slate-800">
                    <span className="text-xs font-bold text-slate-500">Estimated Fix: <span className="text-slate-300">15 minutes</span></span>
                  </div>
                </div>
                
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 hover:border-slate-700 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-slate-200">Broken Blog Grid Spacing</h4>
                    <Badge level="High" />
                  </div>
                  <p className="text-sm text-slate-400"><strong>Impact:</strong> The layout breaks down completely, leaving massive empty black voids that look like software bugs to potential clients.</p>
                  <div className="mt-auto pt-4 border-t border-slate-800">
                    <span className="text-xs font-bold text-slate-500">Estimated Fix: <span className="text-slate-300">45 minutes</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 gap-12 mt-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center bg-slate-900/20 p-8 rounded-3xl border border-slate-800">
                <div className="w-full lg:w-3/4 relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-700 group">
                  <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                  <Image src="/images/broken_blog.png" fill style={{ objectFit: 'cover', objectPosition: 'top' }} alt="Broken Blog Screenshot" className="relative z-10" />
                </div>
                <div className="w-full lg:w-1/4">
                  <h4 className="text-xl font-bold text-slate-200 mb-2">Broken Grid Layout</h4>
                  <p className="text-sm text-slate-400 mb-4">Massive blank spacing breaking the UI reading flow on the resources page.</p>
                  <Badge level="High" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Speed & Mobile */}
        {activeTab === 'speed-mobile' && (
          <div className="space-y-12 animate-fade-in-up print:block">
            <h2 className="hidden print:block text-3xl font-bold mb-6 text-amber-500">Speed & Mobile Assessment</h2>
            
            {/* Interactive Speed Check Simulation */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden print:hidden">
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Experience Your Users' Frustration</h3>
                <p className="text-slate-400 mb-8">Click the button below to simulate how long it currently takes for a mobile user on a 4G connection to load your website.</p>
                
                {!isCheckingSpeed && !speedCheckDone && (
                  <button 
                    onClick={handleSpeedCheck}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95"
                  >
                    Check Loading Speed
                  </button>
                )}

                {isCheckingSpeed && (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin mb-6"></div>
                    <p className="text-xl font-bold text-amber-500 animate-pulse">Loading website...</p>
                    <p className="text-sm text-slate-500 mt-2">Waiting for server response...</p>
                    <div className="w-full max-w-md h-2 bg-slate-800 rounded-full mt-6 overflow-hidden">
                      <div className="h-full bg-amber-500 transition-all duration-300" style={{ width: `${Math.min(loadingProgress, 100)}%` }}></div>
                    </div>
                  </div>
                )}

                {speedCheckDone && (
                  <div className="animate-fade-in-up">
                    <div className="text-6xl font-black text-[#FF4D4F] mb-4">11.0s</div>
                    <h4 className="text-2xl font-bold text-white mb-2">This is your website speed.</h4>
                    <p className="text-[#FF4D4F] font-bold text-lg border border-[#FF4D4F]/30 bg-[#FF4D4F]/10 py-3 px-6 rounded-xl inline-block">
                      ⚠️ This is NOT normal.
                    </p>
                    <p className="text-slate-400 mt-6 max-w-lg mx-auto">
                      Over 53% of mobile users abandon sites that take longer than 3 seconds to load. You are losing half of your potential traffic before they even see your logo.
                    </p>
                    <button onClick={() => setSpeedCheckDone(false)} className="mt-8 text-sm text-slate-500 hover:text-white underline">Test Again</button>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-8 text-slate-200">Core Web Vitals Comparison</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-slate-300">Largest Contentful Paint (LCP)</span>
                      <div className="text-right">
                        <span className="block text-xs text-slate-500">Current: <strong className="text-[#FF4D4F] text-base">11.0s</strong></span>
                        <span className="block text-xs text-[#52C41A]">Recommended: &lt; 2.5s</span>
                      </div>
                    </div>
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-[#FF4D4F]" style={{ width: '100%' }}></div>
                      <div className="absolute top-0 left-0 h-full bg-[#52C41A] border-r-2 border-white z-10" style={{ width: '22%' }}></div>
                    </div>
                    <p className="text-xs text-[#FF4D4F] font-bold mt-2 text-right">Difference: +8.5s (Critical)</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-slate-300">First Contentful Paint (FCP)</span>
                      <div className="text-right">
                        <span className="block text-xs text-slate-500">Current: <strong className="text-[#FA8C16] text-base">6.2s</strong></span>
                        <span className="block text-xs text-[#52C41A]">Recommended: &lt; 1.8s</span>
                      </div>
                    </div>
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-[#FA8C16]" style={{ width: '70%' }}></div>
                      <div className="absolute top-0 left-0 h-full bg-[#52C41A] border-r-2 border-white z-10" style={{ width: '20%' }}></div>
                    </div>
                    <p className="text-xs text-[#FA8C16] font-bold mt-2 text-right">Difference: +4.4s (High)</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-slate-300">Total Blocking Time (TBT)</span>
                      <div className="text-right">
                        <span className="block text-xs text-slate-500">Current: <strong className="text-[#FADB14] text-base">320ms</strong></span>
                        <span className="block text-xs text-[#52C41A]">Recommended: &lt; 200ms</span>
                      </div>
                    </div>
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-[#FADB14]" style={{ width: '45%' }}></div>
                      <div className="absolute top-0 left-0 h-full bg-[#52C41A] border-r-2 border-white z-10" style={{ width: '25%' }}></div>
                    </div>
                    <p className="text-xs text-[#FADB14] font-bold mt-2 text-right">Difference: +120ms (Medium)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/20 shadow-xl flex-1">
                  <div className="bg-slate-950 px-4 py-3 text-sm font-bold text-slate-300 border-b border-slate-800">Mobile PageSpeed Profile</div>
                  <div className="relative h-full min-h-[250px] w-full p-4">
                    <Image src="/images/pagespeed_mobile.png" fill style={{ objectFit: 'contain', objectPosition: 'center' }} alt="PageSpeed Mobile Score" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SEO & Traffic */}
        {activeTab === 'seo-rankings' && (
          <div className="space-y-8 animate-fade-in-up print:block">
            <h2 className="hidden print:block text-3xl font-bold mb-6 text-amber-500">SEO & Traffic Analysis</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 bg-[#FA8C16]/10 rounded-full flex items-center justify-center mb-4 text-[#FA8C16]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <span className="text-3xl font-black text-[#FA8C16] mb-1">2 <span className="text-sm font-normal text-slate-500">/100</span></span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Domain Authority</span>
              </div>
              
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 bg-[#FF4D4F]/10 rounded-full flex items-center justify-center mb-4 text-[#FF4D4F]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <span className="text-3xl font-black text-[#FF4D4F] mb-1">0 <span className="text-sm font-normal text-slate-500">/mo</span></span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Organic Traffic</span>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 bg-[#FADB14]/10 rounded-full flex items-center justify-center mb-4 text-[#FADB14]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <span className="text-3xl font-black text-slate-200 mb-1">6</span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Ranking Keywords</span>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 bg-[#52C41A]/10 rounded-full flex items-center justify-center mb-4 text-[#52C41A]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <span className="text-3xl font-black text-slate-200 mb-1">382</span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Total Backlinks</span>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6 text-slate-200">Target Organic Search Terms</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-800 text-slate-400 text-sm">
                      <th className="py-4 px-4 uppercase tracking-wider font-bold">Search Keyword</th>
                      <th className="py-4 px-4 uppercase tracking-wider font-bold">Google Ranking</th>
                      <th className="py-4 px-4 uppercase tracking-wider font-bold">Monthly Volume</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                      <td className="py-4 px-4 font-semibold text-amber-500">ceramic city of india</td>
                      <td className="py-4 px-4"><span className="bg-slate-800 px-3 py-1 rounded-full text-xs font-bold">#11</span></td>
                      <td className="py-4 px-4">210</td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                      <td className="py-4 px-4 font-semibold text-amber-500">tiles defect</td>
                      <td className="py-4 px-4"><span className="bg-slate-800 px-3 py-1 rounded-full text-xs font-bold">#36</span></td>
                      <td className="py-4 px-4">590</td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                      <td className="py-4 px-4 font-semibold text-amber-500">inhouse team</td>
                      <td className="py-4 px-4"><span className="bg-slate-800 px-3 py-1 rounded-full text-xs font-bold">#45</span></td>
                      <td className="py-4 px-4">110</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Security & CRO */}
        {activeTab === 'security-cro' && (
          <div className="space-y-8 animate-fade-in-up print:block">
            <h2 className="hidden print:block text-3xl font-bold mb-6 text-amber-500">Security & CRO Assessment</h2>
            
            <div className="bg-gradient-to-r from-slate-900 to-[#FF4D4F]/5 border border-slate-800 rounded-3xl p-8 flex justify-between items-center shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">Overall Security Rating</h3>
                <p className="text-slate-400 text-sm">Multiple vulnerabilities detected on frontend architecture.</p>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="text-4xl font-black text-[#FF4D4F] mb-2">4 <span className="text-lg text-slate-500">/ 10</span></span>
                <Badge level="High" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl">
                <h3 className="font-bold text-lg mb-6 text-slate-200">Security Vulnerabilities</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                    <div>
                      <strong className="text-sm text-slate-200 block mb-1">Mixed Content Warning</strong>
                      <span className="text-xs text-slate-400">Main logo sources from insecure HTTP domain</span>
                    </div>
                    <Badge level="Critical" />
                  </div>
                  <div className="flex justify-between items-start bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                    <div>
                      <strong className="text-sm text-slate-200 block mb-1">User Enumeration Exposure</strong>
                      <span className="text-xs text-slate-400">Exposes admin username on archive URLs</span>
                    </div>
                    <Badge level="High" />
                  </div>
                  <div className="flex justify-between items-start bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                    <div>
                      <strong className="text-sm text-slate-200 block mb-1">Incomplete HSTS Policy</strong>
                      <span className="text-xs text-slate-400">HSTS max-age is set to a low 300s</span>
                    </div>
                    <Badge level="Medium" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl">
                <h3 className="font-bold text-lg mb-6 text-slate-200">Conversion Rate (CRO) Opportunities</h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-[#52C41A]/5 p-4 rounded-xl border border-[#52C41A]/20">
                    <strong className="block text-[#52C41A] mb-1">✔ Trust Indicators Grid</strong>
                    <p className="text-slate-400">Add client logs showcase grid representing main tile and automotive industry partners.</p>
                  </div>
                  <div className="bg-[#52C41A]/5 p-4 rounded-xl border border-[#52C41A]/20">
                    <strong className="block text-[#52C41A] mb-1">✔ ISO Badge Display</strong>
                    <p className="text-slate-400">Highlight InHouse ISO Certification with a graphic batch symbol directly on above-the-fold hero layouts.</p>
                  </div>
                  <div className="bg-[#52C41A]/5 p-4 rounded-xl border border-[#52C41A]/20">
                    <strong className="block text-[#52C41A] mb-1">✔ Credible User Testimonials</strong>
                    <p className="text-slate-400">Incorporate client avatars and verified stars widgets instead of unverified plain text blocks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Actions & Next Steps */}
        {activeTab === 'actions-wins' && (
          <div className="space-y-10 animate-fade-in-up print:block">
            <h2 className="hidden print:block text-3xl font-bold mb-6 text-amber-500">Recommendations & Roadmap</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Next.js Redesign Recommendation */}
              <div className="lg:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/30 p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
                <h3 className="text-amber-500 font-bold text-2xl mb-4">Recommendation: Next.js Redesign</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Rather than applying band-aid fixes to an aging WordPress architecture, we highly recommend a complete platform migration to <strong>Next.js</strong>. 
                  This enterprise-grade framework will eliminate the current 11-second load times, resolve all security vulnerabilities by serving static assets, and provide a flawless, modern user experience that matches your corporate identity.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-slate-200"><span className="text-[#52C41A] mr-2">✓</span> Lightning Fast Performance</div>
                  <div className="flex items-center text-slate-200"><span className="text-[#52C41A] mr-2">✓</span> Zero DB Security Risks</div>
                  <div className="flex items-center text-slate-200"><span className="text-[#52C41A] mr-2">✓</span> Technical SEO Superiority</div>
                  <div className="flex items-center text-slate-200"><span className="text-[#52C41A] mr-2">✓</span> Flawless Responsive Grids</div>
                </div>
              </div>

              {/* Opportunity Indicator */}
              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">Growth Opportunity</h3>
                <div className="w-24 h-24 bg-[#52C41A]/10 rounded-full flex items-center justify-center mb-4 border-4 border-[#52C41A]/20">
                  <svg className="w-12 h-12 text-[#52C41A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <span className="text-2xl font-black text-[#52C41A]">High Potential</span>
              </div>
            </div>

            {/* Competitive Benchmarking */}
            <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6 text-slate-200">Competitive Benchmarking</h3>
              <p className="text-sm text-slate-400 mb-8">How inhouseincorp.com compares to industry leaders in the ceramic/industrial sector.</p>
              
              <div className="space-y-6">
                {[
                  { label: 'Website Speed', us: '11.0s', them: '< 2.5s', status: 'critical' },
                  { label: 'Mobile Experience', us: 'Broken Grids', them: 'Optimized', status: 'high' },
                  { label: 'Trust Signals', us: 'Basic', them: 'High-Profile', status: 'medium' },
                  { label: 'Technical SEO', us: 'Missing H1s', them: 'Optimized', status: 'high' }
                ].map((metric, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/50 pb-6 pt-2">
                    <div className="font-bold text-slate-300 w-full md:w-1/3 mb-4 md:mb-0 text-lg md:text-base">{metric.label}</div>
                    <div className="flex w-full md:w-2/3 flex-col sm:flex-row items-center gap-3 sm:gap-4">
                      <div className="w-full sm:w-1/2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center shadow-inner">
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Your Site</span>
                        <span className={`font-bold text-base ${colors[metric.status].split(' ')[1]}`}>{metric.us}</span>
                      </div>
                      <span className="text-slate-700 font-black text-sm my-1 sm:my-0 sm:block">VS</span>
                      <div className="w-full sm:w-1/2 bg-[#52C41A]/5 p-4 rounded-xl border border-[#52C41A]/20 flex justify-between items-center shadow-inner">
                        <span className="text-xs text-[#52C41A]/70 uppercase tracking-wider font-bold">Competitors</span>
                        <span className="font-bold text-base text-[#52C41A]">{metric.them}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Aim For You & KYC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-6 text-slate-200">What We Aim For You</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <strong className="block text-amber-500 mb-1">1. Complete Redesign</strong>
                      <p className="text-sm text-slate-300">A complete redesign of the website as per modern industry standards, ensuring lightning-fast performance.</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <strong className="block text-amber-500 mb-1">2. 6-Month SEO Campaign</strong>
                      <p className="text-sm text-slate-300">SEO strategy for the next 6 months to rank at least 15 keywords on the first page of Google across India.</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <strong className="block text-amber-500 mb-1">3. Maximum Visibility</strong>
                      <p className="text-sm text-slate-300">Getting more visible and maximizing your digital footprint so your brand is easily discovered by clients.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">KYC (Know Your Customer)</h4>
                      <p className="text-xs text-slate-400">Audited & Verified by</p>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-lg bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">Mutant Pixel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Conclusion */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl flex flex-col shadow-2xl">
                <h3 className="font-bold text-2xl mb-6 text-white">Business Impact Summary</h3>
                <ul className="space-y-4 text-sm text-slate-300 mb-8 flex-1">
                  <li className="flex items-start"><span className="text-amber-500 mr-3 mt-0.5">✦</span> Faster website performance improving visitor retention.</li>
                  <li className="flex items-start"><span className="text-amber-500 mr-3 mt-0.5">✦</span> Improved search visibility and organic keyword rankings.</li>
                  <li className="flex items-start"><span className="text-amber-500 mr-3 mt-0.5">✦</span> Higher corporate trust via robust security & ISO branding.</li>
                  <li className="flex items-start"><span className="text-amber-500 mr-3 mt-0.5">✦</span> Increased B2B lead generation & conversion rates.</li>
                </ul>
                
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex justify-between items-center mb-6">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Current Score</div>
                    <div className="text-2xl font-black text-slate-400">5.5 / 10</div>
                  </div>
                  <div className="text-slate-600">→</div>
                  <div className="text-right">
                    <div className="text-xs text-amber-500 uppercase tracking-wider mb-1">Potential Score</div>
                    <div className="text-2xl font-black text-amber-500">8.8 / 10</div>
                  </div>
                </div>

                {!showContactForm ? (
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1"
                  >
                    Request Implementation Contract
                  </button>
                ) : (
                  <form onSubmit={handleFormSubmit} className="bg-slate-900 p-6 rounded-2xl border border-amber-500/30 animate-fade-in-up">
                    <h4 className="font-bold text-amber-500 mb-4">Enter your details</h4>
                    {formStatus === 'success' ? (
                      <div className="text-[#52C41A] font-bold text-center py-4 bg-[#52C41A]/10 rounded-xl border border-[#52C41A]/20">
                        ✓ Request Sent Successfully!
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Email Address</label>
                          <input required type="email" name="email" placeholder="client@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Phone Number</label>
                          <input required type="tel" name="phone" placeholder="+91 98765 43210" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                        </div>
                        <button 
                          type="submit" 
                          disabled={formStatus === 'submitting'}
                          className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                        >
                          {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
                        </button>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
