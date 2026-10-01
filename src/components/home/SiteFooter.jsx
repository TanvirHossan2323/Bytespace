import { Logo } from '../branding/HomeBranding.jsx';

export default function SiteFooter({ newsletterEmail, setNewsletterEmail, isSubscribed, setIsSubscribed }) {
  return (
    <footer id="footer" className="bg-white pt-20 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

            
            <div className="lg:col-span-5 pr-0 lg:pr-12">
              <Logo dark />
              <p className="mt-6 mb-8 text-gray-500">
                Build and sell your online courses with ease and confidence. The ultimate platform for both learners and creators.
              </p>
              <form onSubmit={(event) => { event.preventDefault(); if (newsletterEmail.trim()) setIsSubscribed(true); }} className="flex bg-brand-light-gray rounded-full p-1.5 border border-gray-200 max-w-md">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={newsletterEmail}
                  onChange={(event) => { setNewsletterEmail(event.target.value); setIsSubscribed(false); }}
                  className="flex-1 bg-transparent px-4 outline-none text-brand-dark"
                />
                <button type="submit" className="bg-brand-lime text-brand-dark px-6 py-2.5 rounded-full font-bold hover:bg-[#c5df00] transition-colors">
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>

            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: 'Platform', links: ['Browse Courses', 'Mentorship', 'Pricing', 'Testimonials'] },
                { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
                { title: 'Resources', links: ['Help Center', 'Guides', 'API Documentation', 'Community'] },
                { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security'] }
              ].map((col, i) => (
                <div key={i}>
                  <h4 className="font-black text-brand-dark mb-6">{col.title}</h4>
                  <ul className="space-y-4 text-gray-500 font-medium">
                    {col.links.map(link => (
                      <li key={link}><a href="#" className="hover:text-brand-blue transition-colors">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          
          <div className="border-t border-gray-100 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-medium">© 2024 Bytespace Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" aria-label="Facebook" className="social-link hover:text-brand-blue transition-colors">f</a>
              <a href="#" aria-label="X" className="social-link hover:text-brand-blue transition-colors">𝕏</a>
              <a href="#" aria-label="LinkedIn" className="social-link hover:text-brand-blue transition-colors">in</a>
            </div>
          </div>
        </div>
      </footer>
  );
}
