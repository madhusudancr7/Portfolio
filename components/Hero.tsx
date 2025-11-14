import React from 'react';
import { NAME, TITLE, EMAIL, LINKEDIN_URL, PHONE, LOCATION, GITHUB_URL } from '../constants';
import MailIcon from './icons/MailIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';
import GitHubIcon from './icons/GitHubIcon';
import Header from './Header';

const floatingKeywords = [
  { name: 'PySpark', top: '20%', left: '5%', color: '#ff6363', animationName: 'animate-float1', duration: '10s' },
  { name: 'SQL', top: '30%', right: '5%', color: '#63a0ff', animationName: 'animate-float2', duration: '12s', delay: '1s' },
  { name: 'AWS', top: '70%', left: '10%', color: '#ffdd63', animationName: 'animate-float3', duration: '9s', delay: '2s' },
  { name: 'Azure', top: '80%', right: '15%', color: '#63ffc6', animationName: 'animate-float4', duration: '11s', delay: '0.5s' },
  { name: 'Python', top: '50%', left: '40%', color: '#d463ff', animationName: 'animate-float1', duration: '11s', delay: '1.5s' },
  { name: 'Kafka', top: '5%', right: '10%', color: '#ff9263', animationName: 'animate-float2', duration: '13s' },
  { name: 'Databricks', top: '40%', left: '25%', color: '#63d8ff', animationName: 'animate-float3', duration: '8s', delay: '3s' },
  { name: 'Airflow', top: '60%', right: '30%', color: '#ff63b8', animationName: 'animate-float4', duration: '10s', delay: '2.5s' },
];

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Floating Keywords */}
      {floatingKeywords.map(kw => (
        <span 
          key={kw.name}
          className={`absolute font-mono text-lg pointer-events-none ${kw.animationName} z-10`}
          style={{
            top: kw.top,
            left: kw.left,
            right: kw.right,
            color: kw.color,
            opacity: 0.15,
            animationDuration: kw.duration,
            animationDelay: kw.delay,
          }}
        >
          {kw.name}
        </span>
      ))}

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center space-y-4 w-full max-w-4xl mx-4">
        
        {/* Box 1: Name and Title */}
        <div className="bg-card-bg backdrop-blur-lg border border-border-color rounded-2xl p-6 text-center transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 w-full">
          <p 
            className="text-2xl font-bold text-text-secondary opacity-0 animate-fade-in-up"
            style={{ animationDelay: '2.7s' }}
          >
            {TITLE}
          </p>
          <h1 className="font-display text-6xl sm:text-7xl font-extrabold text-text-primary tracking-tighter opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-accent animate-typing-effect">
              {NAME}
            </span>
          </h1>
        </div>
        
        {/* Box 2: Social Links (Mail, LinkedIn, GitHub) */}
        <div className="bg-card-bg backdrop-blur-lg border border-border-color rounded-2xl p-4 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 w-full max-w-sm mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '3s' }}>
          <div className="flex justify-center items-center space-x-6 text-text-secondary">
            <div className="relative group">
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`} target="_blank" rel="noopener noreferrer" className="p-2 block" aria-label="Email">
                <MailIcon className="w-8 h-8 text-text-secondary transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_theme(colors.accent)]" />
              </a>
              <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-background text-text-primary text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -translate-x-1/2 left-1/2">{EMAIL}</span>
            </div>
             <div className="relative group">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 block" aria-label="LinkedIn">
                <LinkedInIcon className="w-8 h-8 text-text-secondary transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_theme(colors.accent)]" />
              </a>
              <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-background text-text-primary text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -translate-x-1/2 left-1/2">LinkedIn</span>
            </div>
            <div className="relative group">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 block" aria-label="GitHub">
                <GitHubIcon className="w-8 h-8 text-text-secondary transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_theme(colors.accent)]" />
              </a>
              <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-background text-text-primary text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -translate-x-1/2 left-1/2">GitHub</span>
            </div>
          </div>
        </div>

        {/* New Box: Phone and Location */}
        <div className="bg-card-bg backdrop-blur-lg border border-border-color rounded-2xl p-4 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 w-full max-w-sm mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '3.2s' }}>
          <div className="flex justify-around items-center text-text-secondary font-medium">
             <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5"/>
                <span>{PHONE}</span>
             </div>
             <div className="flex items-center space-x-2">
                <LocationIcon className="w-5 h-5"/>
                <span>{LOCATION}</span>
             </div>
          </div>
        </div>
        
        {/* RESUME Button */}
        <div 
          className="pt-2 opacity-0 animate-fade-in-up w-full text-center"
          style={{ animationDelay: '3.4s' }}
        >
          <a href="/public/Madhusudan_RS_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 inline-block shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50">
            RESUME
          </a>
        </div>
      
        {/* Navigation */}
        <div 
          className="opacity-0 animate-fade-in-up w-full flex justify-center"
          style={{ animationDelay: '3.6s' }}
        >
          <Header />
        </div>
      </div>
    </section>
  );
};

export default Hero;