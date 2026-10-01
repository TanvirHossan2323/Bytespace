import { Star } from 'lucide-react';
import { learnerAvatars } from '../../data/homepage.js';

export default function CourseCatalogSection({ activeCategory, setActiveCategory, showMoreCategories, setShowMoreCategories, visibleCourses }) {
  return (
    <section id="courses" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1480px] px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-black leading-[1.18] text-brand-dark md:text-[56px]">Discover Your Passion,<br />Build Your Skills</h2>
            <p className="mx-auto max-w-[1240px] text-lg leading-relaxed text-gray-500 md:text-[22px]">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
          </div>

          
          <div className="mx-auto mb-12 flex max-w-[1480px] flex-wrap justify-center gap-x-5 gap-y-6 px-2">
            {['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking', ...(showMoreCategories ? ['Business', 'Technology', 'Personal Development', 'Writing'] : [])].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`rounded-full px-5 py-3 text-base font-medium transition-colors md:px-[22px] md:py-[14px] md:text-xl ${activeCategory === cat ? 'bg-brand-lime text-brand-dark' : 'bg-[#f3f3f5] text-[#4b4d55] hover:bg-[#e9e9ed]'}`}
              >
                {cat}
              </button>
            ))}
            {!showMoreCategories && <button type="button" onClick={() => setShowMoreCategories(true)} className="px-1 text-lg font-medium text-[#164df0] hover:underline md:text-xl">+ More</button>}
          </div>

          
          <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {visibleCourses.map((course, courseIndex) => (
              <article key={course.title} className="group flex h-full flex-col rounded-[28px] border border-[#d0d2d8] bg-white p-5 transition-colors hover:border-[#aeb2ba]">
                <div className="relative aspect-[1.74] overflow-hidden rounded-[18px] bg-gray-100">
                  <img src={course.img} alt={course.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-x-3 bottom-5 flex flex-wrap items-center justify-center gap-2">
                    {[course.lessons || '12 Lessons', course.duration || '2 hours 30 mins', course.comments || '35 Comments'].map((detail) => (
                      <span key={detail} className="rounded-full bg-white/80 px-3 py-2 text-xs font-medium text-[#4b4d55] backdrop-blur-sm">{detail}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-6">
                  <div className="flex min-h-[60px] items-start justify-between gap-3">
                    <h3 className="line-clamp-2 min-h-[60px] text-xl font-bold leading-tight text-black md:text-2xl">{course.title}</h3>
                    <div className="flex shrink-0 items-center gap-1.5 text-lg text-[#52545a]">
                      <span>{course.rating}</span>
                      <Star size={21} className="fill-[#d1d5db] text-[#d1d5db]" />
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">by <a href="#courses" className="text-brand-blue hover:underline">{course.instructor || 'Bytespace instructor'}</a></p>

                  <div className="mt-5 flex items-center gap-4">
                    <span className="flex shrink-0 items-center gap-2 rounded-full bg-[#f3f3f5] px-4 py-2 text-sm text-[#4b4d55]">
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 fill-current"><path d="M2 17h3V9H2v8Zm6 0h3V5H8v12Zm6 0h4V2h-4v15Z" /></svg>
                      {course.level || 'Beginner'}
                    </span>
                    <div className="flex min-w-0 items-center pl-1">
                      {Array.from({ length: 4 }, (_, avatarIndex) => learnerAvatars[(courseIndex * 4 + avatarIndex) % learnerAvatars.length]).map((avatar, avatarIndex) => (
                        <span key={`${avatar}-${avatarIndex}`} className="relative -ml-1 h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white">
                          <img src={avatar} alt="" className="h-full w-full object-cover" />
                        </span>
                      ))}
                      <span className="-ml-1 grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-brand-lime text-sm font-semibold text-brand-dark">{course.students?.includes('k') ? '26+' : course.students || '26+'}</span>
                    </div>
                  </div>

                  <p className="mt-auto pt-5 text-sm text-gray-500"><span className="text-2xl font-bold text-brand-blue">{course.price}</span><span className="ml-0.5">/lifetime</span></p>
                </div>
              </article>
            ))}
          </div>
          {visibleCourses.length === 0 && <p className="mt-10 text-center text-gray-500">No courses match that search. Try another keyword.</p>}
        </div>
      </section>
  );
}
