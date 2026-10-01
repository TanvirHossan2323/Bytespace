import { learnerAvatars } from '../../data/homepage.js';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark max-w-md leading-tight">
              Discover What Our <br /> Community Is Saying
            </h2>
            <p className="text-gray-500 max-w-md text-right hidden md:block">
              Over 100,000+ learners across the globe have learned new skills through Bytespace. Hear what they have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Software Engineer', text: 'Bytespace has completely transformed how I learn. The courses are top-notch and incredibly practical.', avatar: learnerAvatars[0] },
              { name: 'Michael Chen', role: 'UX Designer', text: 'The instructors here are actual industry experts. I landed my dream job 2 months after completing the path.', avatar: learnerAvatars[5] },
              { name: 'Emma Wilson', role: 'Data Analyst', text: 'I love the hands-on approach. I was able to build real-world projects immediately which boosted my portfolio.', avatar: learnerAvatars[2] }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-green-900/5 border border-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <div className="font-black text-brand-dark">{t.name}</div>
                    <div className="text-sm font-bold text-brand-blue">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
