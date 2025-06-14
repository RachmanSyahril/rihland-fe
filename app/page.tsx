"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Lock, Users, Heart, Menu, X, Award, Globe, Shield } from 'lucide-react';

export default function BlueThemedWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'who-we-are', 'videos', 'membership', 'collaborations', 'footer'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'videos', label: 'Videos' },
    { id: 'membership', label: 'Membership' },
    { id: 'collaborations', label: 'Collaborations' }
  ];

  const freeVideos = [
    { title: "Introduction to Our Mission", duration: "5:30", thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-500" },
    { title: "Community Impact Stories", duration: "8:15", thumbnail: "bg-gradient-to-br from-blue-500 to-indigo-600" },
    { title: "Getting Started Guide", duration: "3:45", thumbnail: "bg-gradient-to-br from-cyan-400 to-blue-500" },
    { title: "Success Stories", duration: "6:20", thumbnail: "bg-gradient-to-br from-indigo-500 to-blue-600" }
  ];

  const premiumVideos = [
    { title: "Advanced Techniques Masterclass", duration: "25:30", thumbnail: "bg-gradient-to-br from-blue-600 to-purple-700" },
    { title: "Exclusive Expert Interviews", duration: "18:45", thumbnail: "bg-gradient-to-br from-purple-600 to-blue-700" },
    { title: "In-Depth Case Studies", duration: "32:15", thumbnail: "bg-gradient-to-br from-blue-700 to-indigo-800" }
  ];

  const collaborators = [
    { name: "Microsoft", logo: "🏢" },
    { name: "Google", logo: "🔍" },
    { name: "Amazon", logo: "📦" },
    { name: "Apple", logo: "🍎" },
    { name: "Meta", logo: "📱" },
    { name: "Netflix", logo: "🎬" },
    { name: "Adobe", logo: "🎨" },
    { name: "Spotify", logo: "🎵" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-slate-900/80 border-b border-blue-500/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              OceanWave
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-blue-500/20 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-900/90 backdrop-blur-sm`}>
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative z-10 px-6 py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
            Empowering Change
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Through Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Join our community of changemakers and discover how we&apos;re transforming the world through 
            collaboration, education, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            <button 
              onClick={() => scrollToSection('who-we-are')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Learn More
              <ChevronRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('videos')}
              className="px-8 py-4 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
            >
              Watch Videos
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                We are a dedicated organization committed to creating positive change through innovative solutions 
                and collaborative partnerships. Our mission is to bridge the gap between technology and social impact.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over a decade of experience, we&apos;ve built a community of passionate individuals who believe 
                in the power of collective action to solve complex global challenges.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Users, title: "10K+ Members", color: "from-blue-400 to-cyan-500" },
                  { icon: Globe, title: "50+ Countries", color: "from-cyan-400 to-blue-500" },
                  { icon: Award, title: "25+ Awards", color: "from-blue-500 to-indigo-600" },
                  { icon: Shield, title: "Trusted Partner", color: "from-indigo-400 to-blue-500" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{stat.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To create a world where technology serves humanity, where innovation drives sustainability, 
                  and where every individual has the opportunity to contribute to positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Educational Videos
          </h2>
          
          {/* Free Videos */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400 flex items-center">
              <Play className="w-6 h-6 mr-3" />
              Free Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {freeVideos.map((video, index) => (
                <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className={`w-full h-48 ${video.thumbnail} flex items-center justify-center`}>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-200">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <h4 className="text-white font-medium mt-3 group-hover:text-blue-400 transition-colors duration-200">
                    {video.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Videos */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400 flex items-center">
              <Lock className="w-6 h-6 mr-3" />
              Premium Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {premiumVideos.map((video, index) => (
                <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className={`w-full h-56 ${video.thumbnail} flex items-center justify-center`}>
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-200">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 rounded-full text-sm font-medium">
                      Premium
                    </div>
                  </div>
                  <h4 className="text-white font-medium mt-3 group-hover:text-blue-400 transition-colors duration-200">
                    {video.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Become a Member
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Membership Plans */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-400">Basic Member</h3>
                  <div className="text-3xl font-bold text-white">Free</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Access to free videos
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Community forum access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Monthly newsletter
                  </li>
                </ul>
                <button className="w-full py-3 border border-blue-400/50 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-200">
                  Join for Free
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm border border-blue-400/50 rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-400">Premium Member</h3>
                  <div className="text-3xl font-bold text-white">$29<span className="text-lg text-gray-400">/mo</span></div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    All free content
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Premium video library
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    1-on-1 mentorship sessions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Priority support
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
                  Start Premium
                </button>
              </div>
            </div>

            {/* Donation Section */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Support Our Mission
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Your donation helps us create more educational content, support our community, 
                  and expand our reach to help more people around the world.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {['$10', '$25', '$50'].map((amount) => (
                    <button
                      key={amount}
                      className="py-3 border border-blue-400/50 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-200 hover:scale-105"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="w-full px-4 py-3 bg-white/10 border border-blue-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Institutions & Brands That Collaborated With Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {collaborator.logo}
                  </div>
                  <div className="text-sm text-gray-300 text-center font-medium">
                    {collaborator.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-8">
              Trusted by leading organizations worldwide. Join our network of partners.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="relative z-10 px-6 py-20 bg-slate-900/50 backdrop-blur-sm border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                OceanWave
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering change through innovation and collaboration. 
                Join us in creating a better tomorrow.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@oceanwave.org</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Street</li>
                <li>Tech City, TC 12345</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['📘', '🐦', '📸', '💼'].map((icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-200 transform hover:scale-110"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OceanWave. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => scrollToSection('home')}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50 ${
          scrollY > 100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ChevronRight className="w-6 h-6 text-white transform -rotate-90" />
      </button>
    </div>
  );
}