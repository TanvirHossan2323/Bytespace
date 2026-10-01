import { DecorativeShapes } from '../branding/HomeBranding.jsx';

export default function CreatorCtaSection() {
  return (
    <section className="py-24 bg-brand-blue hero-grid relative overflow-hidden">
        <DecorativeShapes />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-2xl mx-auto">
            Unlock Your Potential as a <br /> Creator with Bytespace
          </h2>
          <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">
            Bytespace is an online learning platform that provides a complete set of features for creators to build and sell courses seamlessly.
          </p>
          <a href="#courses" className="inline-flex bg-brand-lime text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c5df00] transition-colors shadow-lg">Get Started Now</a>
        </div>
      </section>
  );
}
