import { Briefcase, Camera, MonitorSmartphone, TrendingUp, Paintbrush } from 'lucide-react';

export default function LearningPathsSection({ setActiveCategory, setSearchQuery }) {
  return (
    <section id="paths" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1480px] text-center">
          <h2 className="text-3xl font-black leading-tight text-brand-dark md:text-[46px]">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="mx-auto mt-5 max-w-[1240px] text-lg leading-relaxed text-gray-500 md:text-[22px]">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there’s something for everyone. Unleash your potential and explore our carefully curated categories.</p>

          <div className="mx-auto mt-20 grid max-w-[1376px] grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-7">
            {[
              { icon: Paintbrush, label: 'Design', category: 'UI/UX Design' },
              { icon: MonitorSmartphone, label: 'Development', category: 'Web Development' },
              { icon: MonitorSmartphone, label: 'IT & Software', category: 'Web Development' },
              { icon: Briefcase, label: 'Business', category: 'Business' },
              { icon: TrendingUp, label: 'Marketing', category: 'Marketing' },
              { icon: Camera, label: 'Photography', category: 'Photography' }
            ].map((path, i) => (
              <button key={i} type="button" className="flex h-[208px] w-full flex-col items-center justify-center gap-4 rounded-[28px] border border-[#d0d2d8] bg-white text-center transition-colors hover:border-[#aeb2ba]" onClick={() => { setActiveCategory(path.category); setSearchQuery(''); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-brand-lime text-brand-dark">
                  {path.label === 'IT & Software' ? (
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="24" height="18" rx="2" /><path d="M2 27h28M12 23l-1 4m9-4 1 4" /></svg>
                  ) : path.label === 'Business' ? (
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="7" width="22" height="22" rx="1" /><path d="M11 12h2m6 0h2m-10 6h2m6 0h2m-10 6h2m6 0h2M11 3h10" /></svg>
                  ) : path.label === 'Marketing' ? (
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="2" fill="currentColor" /><circle cx="25" cy="25" r="2" fill="currentColor" /><path d="M7 13a12 12 0 0 1 12 12M7 18a7 7 0 0 1 7 7M13 7a12 12 0 0 1 12 12M18 7a7 7 0 0 1 7 7" /></svg>
                  ) : <path.icon size={34} strokeWidth={3} />}
                </div>
                <span className="text-xl font-normal text-[#292a2f] md:text-2xl">{path.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
  );
}
