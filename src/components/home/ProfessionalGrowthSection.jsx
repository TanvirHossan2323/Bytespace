

export default function ProfessionalGrowthSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-lime-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 leading-tight">
                Your Path to Professional <br /> Growth Starts Here!
              </h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Our courses are interactive and practical, with projects and exercises to apply what you've learned to real-world scenarios. Expert instructors guide you through complex concepts with ease.
              </p>

              <div className="flex gap-10">
                <div>
                  <div className="text-4xl font-black text-brand-blue mb-1">1.2K</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Learners</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-blue mb-1">70+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Courses</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-blue mb-1">15</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Instructors</div>
                </div>
              </div>
            </div>

            
            <div className="growth-visual relative mx-auto flex min-h-[440px] w-full max-w-[520px] items-end justify-center sm:min-h-[500px]">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 via-white to-lime-100 blur-sm" />
              <article className="growth-course-card absolute left-0 top-[7%] z-0 w-[75%] overflow-hidden rounded-[26px] border border-gray-200 bg-white p-3 shadow-xl sm:left-2 sm:w-[78%]">
                <img src="/Image/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg" alt="Designers planning a Figma course" className="h-40 w-full rounded-[18px] object-cover sm:h-52" />
                <div className="flex gap-2 px-2 pt-3 text-xs text-gray-600 sm:pt-4 sm:text-sm">
                  <span className="rounded-full bg-gray-100 px-3 py-2">17 Lessons</span>
                  <span className="rounded-full bg-gray-100 px-3 py-2">2 hours 16 mins</span>
                </div>
                <h3 className="px-2 pt-4 text-base font-extrabold text-brand-dark sm:text-xl">Learn Figma from the pros</h3>
                <p className="px-2 pt-1 text-sm text-gray-500">by <span className="text-brand-blue">purepearl studio</span></p>
                <div className="px-2 pb-3 pt-4 text-xl font-black text-brand-blue">$25<span className="text-xs font-normal text-gray-500"> / lifetime</span></div>
              </article>
              <svg className="absolute right-[2%] top-[18%] z-20 h-36 w-28 rotate-6 sm:right-0" viewBox="0 0 100 130" fill="none" aria-hidden="true">
                <path d="M25 14C70 -4 80 16 33 35C-5 51 9 63 63 52C110 42 96 65 42 81C-6 95 4 108 66 96C107 88 91 111 45 119" stroke="#D4F000" strokeWidth="17" strokeLinecap="round" />
              </svg>
              <img src="/Image/29a52a24e51266edcd7d57d73392ee5fc4833220.png" alt="Learner studying online with a laptop" className="relative z-10 h-[420px] w-[83%] object-contain object-bottom drop-shadow-2xl sm:h-[490px]" />
              <div className="growth-progress absolute bottom-[18%] right-0 z-20 w-[58%] rounded-[22px] bg-white p-4 shadow-xl sm:right-[-1%] sm:w-[56%] sm:p-5">
                <div className="text-xs font-medium text-gray-600 sm:text-sm">Learning Progress</div>
                <div className="mt-1 text-4xl font-black leading-none text-[#25262a] sm:mt-2 sm:text-6xl">55%</div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100"><div className="h-full w-[55%] rounded-full bg-brand-lime" /></div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
