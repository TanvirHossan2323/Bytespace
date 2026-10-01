import { publicPath } from '../../utils/publicPaths.js';
import { Search, Star, Menu, X, ShoppingBag } from 'lucide-react';
import { Logo, HeroBackgroundShapes } from '../branding/HomeBranding.jsx';
import { learnerAvatars } from '../../data/homepage.js';
import NavigationLink from '../NavigationLink.jsx';

export default function HeroSection({ isMobileMenuOpen, setIsMobileMenuOpen, searchQuery, setSearchQuery, setActiveCategory }) {
  return (
    <section id="home" className="relative bg-brand-blue hero-grid pt-10 pb-20 overflow-hidden">
        <HeroBackgroundShapes />

        
        <nav className="container mx-auto max-w-[1480px] px-6 relative z-20">
          <div className="flex items-center justify-between">
            <Logo />

            
            <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
              <a href="#home" className="text-white hover:text-brand-lime transition-colors">Home</a>
              <a href="#courses" className="hover:text-white transition-colors">Courses</a>
              <a href="#paths" className="hover:text-white transition-colors">Creators</a>
            </div>

            <div className="hidden md:flex items-center gap-7">
              <NavigationLink to="/login" className="text-white font-medium hover:text-brand-lime transition-colors">Sign In</NavigationLink>
              <NavigationLink to="/signup" className="text-white font-medium hover:text-brand-lime transition-colors">Join Us</NavigationLink>
              <a href="#courses" aria-label="Browse courses" className="text-white transition-colors hover:text-brand-lime"><ShoppingBag size={23} strokeWidth={2} /></a>
            </div>

            
            <button type="button" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen} className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu md:hidden mt-4 rounded-2xl bg-white p-4 shadow-xl">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
              <a href="#paths" onClick={() => setIsMobileMenuOpen(false)}>Creators</a>
              <NavigationLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</NavigationLink>
              <NavigationLink to="/signup" onClick={() => setIsMobileMenuOpen(false)}>Join Us</NavigationLink>
            </div>
          )}
        </nav>

        
        <div className="container mx-auto px-6 mt-16 md:mt-32 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-6xl xl:text-7xl 2xl:text-[88px] font-black text-white leading-[1.22] max-w-[1280px] mb-6">
            Get Access to Hundreds <br className="hidden md:block" /> Courses Available
          </h1>
          <p className="text-white/85 text-lg md:text-[22px] max-w-5xl mb-12">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          
          <div className="w-full max-w-[730px] bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl mb-16">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              type="search"
              aria-label="Search courses"
              placeholder="Course, topic, creator"
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              value={searchQuery}
              onChange={(event) => { setSearchQuery(event.target.value); setActiveCategory('Featured'); }}
              onKeyDown={(event) => { if (event.key === 'Enter') document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}
            />
            <button onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-lime text-brand-dark px-6 py-3 rounded-full font-bold hover:bg-[#c5df00] transition-colors">
              Search
            </button>
          </div>

          
          <div className="relative mt-4 flex min-h-[500px] w-full max-w-[980px] items-end justify-center overflow-visible md:min-h-[570px]">
            
            <div className="absolute bottom-[-250px] left-1/2 z-0 h-[660px] w-[115%] -translate-x-1/2 rounded-full bg-brand-lime sm:bottom-[-220px] sm:h-[700px] md:bottom-[-200px] md:h-[700px]" />

            
            <img
              src={publicPath('Image/29a52a24e51266edcd7d57d73392ee5fc4833220.png')}
              alt="Student"
              className="relative z-10 h-[110%] w-[86%] max-w-[650px] object-contain object-bottom sm:h-[115%] md:h-[118%]"
            />

            
            <div className="absolute left-0 top-[20%] z-20 w-[78%] max-w-[230px] rounded-[18px] bg-white px-4 py-3 text-left shadow-xl md:left-2 md:w-auto md:max-w-none md:px-6 md:py-4">
              <div className="text-sm font-semibold text-brand-dark md:text-base">UI/UX Design</div>
              <div className="mt-1 whitespace-nowrap text-[11px] text-gray-500 md:text-sm">200 Courses <span className="mx-1">•</span> 1000+ Students</div>
            </div>

            
            <div className="absolute right-0 top-[22%] z-20 w-[58%] max-w-[230px] rounded-[20px] bg-white p-4 text-left shadow-xl md:right-2 md:w-[30%] md:max-w-[290px] md:p-5">
              <div className="text-xs font-medium text-gray-600 md:text-base">Learning Progress</div>
              <div className="mt-1 text-4xl font-black leading-none text-[#25262a] md:mt-2 md:text-6xl">55%</div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100"><div className="h-full w-[55%] rounded-full bg-brand-lime" /></div>
            </div>

            
            <div className="absolute bottom-[7%] left-0 z-20 w-[78%] max-w-[300px] rounded-[22px] bg-white p-4 text-left shadow-xl sm:p-5 md:w-[34%] md:max-w-[340px]">
              <div className="text-base font-semibold text-[#25262a] sm:text-lg">Happy Students</div>
              <div className="flex items-center gap-1 text-xs font-medium text-gray-700">4.5 <span className="text-gray-400">(240)</span><Star size={15} className="fill-brand-lime text-brand-lime" /></div>
              <div className="mt-3 flex items-center">
                {learnerAvatars.slice(0, 7).map((avatar, index) => <span key={avatar} className={`relative -ml-2 h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-white sm:h-10 sm:w-10 ${index === 0 ? 'ml-0' : ''}`}><img src={avatar} alt="" className="h-full w-full object-cover" /></span>)}
                <span className="-ml-2 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-lime text-xs font-black text-brand-dark sm:h-12 sm:w-12">2K+</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
