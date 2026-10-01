import { publicPath } from '../../utils/publicPaths.js';
import { Star, CheckCircle2 } from 'lucide-react';
import { learnerAvatars } from '../../data/homepage.js';

export default function CreatorToolsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            
            <div className="creator-visual relative order-2 mx-auto flex min-h-[460px] w-full max-w-[540px] items-end justify-center md:order-1">
              <div className="absolute inset-0 rounded-[42%] bg-gradient-to-br from-blue-100 via-white to-lime-100" />
              <div className="absolute left-0 top-[10%] z-0 w-[62%] rounded-[22px] bg-brand-blue p-4 text-white shadow-xl sm:top-[8%] sm:w-[68%] sm:p-5">
                <div className="text-sm sm:text-lg">Total Revenue</div><div className="text-[10px] text-white/75 sm:text-xs">July 1-28</div>
                <div className="mt-2 text-2xl font-black sm:text-3xl">$120.29</div>
                <div className="mt-3 h-2 rounded-full bg-white/30"><div className="h-full w-[55%] rounded-full bg-brand-lime" /></div>
              </div>
              <div className="absolute left-0 top-[43%] z-0 rounded-[22px] bg-brand-blue p-4 text-white shadow-xl sm:top-[42%] sm:p-5">
                <div className="text-sm sm:text-lg">Year to Date</div><div className="text-[10px] text-white/75 sm:text-xs">2023</div>
                <div className="mt-2 text-2xl font-black sm:text-3xl">$1,200.38</div>
                <span className="mt-2 inline-block rounded-full bg-brand-lime px-3 py-1 text-[10px] font-bold text-brand-dark">+12%</span>
              </div>
              <svg className="absolute right-[10%] top-[25%] z-20 h-36 w-32 rotate-[-8deg] sm:right-[7%]" viewBox="0 0 120 140" fill="none" aria-hidden="true">
                <path d="M28 13C80 4 100 20 43 35C-2 48 6 62 76 53C119 48 108 67 45 82C-7 94 4 109 81 98C122 92 107 113 49 126" stroke="#D4F000" strokeWidth="17" strokeLinecap="round" />
              </svg>
              <img src={publicPath('Image/0d6596fb1df66aaf843ee85722f439fada233946.png')} alt="Course creator with a tablet" className="relative z-10 h-[440px] w-[84%] object-contain object-bottom drop-shadow-2xl sm:h-[500px]" />
              <div className="absolute bottom-[9%] right-0 z-20 w-[72%] rounded-[22px] bg-white p-4 shadow-xl sm:right-[-1%] sm:w-[68%] sm:p-5">
                <div className="text-sm font-semibold text-[#25262a] sm:text-lg">Happy Students</div>
                <div className="flex items-center gap-1 text-xs font-semibold text-gray-700">4.5 <span className="font-normal text-gray-400">(240)</span><Star size={14} className="fill-brand-lime text-brand-lime" /></div>
                <div className="mt-3 flex items-center">
                  {learnerAvatars.slice(0, 7).map((avatar, index) => <span key={avatar} className={`relative -ml-1.5 h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white sm:h-9 sm:w-9 ${index === 0 ? 'ml-0' : ''}`}><img src={avatar} alt="" className="h-full w-full object-cover" /></span>)}
                  <span className="-ml-1 grid h-10 w-10 place-items-center rounded-full bg-brand-lime text-xs font-black text-brand-dark sm:h-12 sm:w-12">2K+</span>
                </div>
              </div>
            </div>

            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 leading-tight">
                Create & Manage <br /> Courses Easily.
              </h2>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                Bytespace offers tools for you to effectively build, manage and sell your courses to students worldwide without technical hurdles.
              </p>

              <ul className="space-y-4 mb-10">
                {['Build Your Course easily', 'Add Live Sessions', 'Track Course Activity', 'Collect Payments Securely'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-brand-dark">
                    <CheckCircle2 className="text-brand-blue fill-brand-blue/10" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
  );
}
