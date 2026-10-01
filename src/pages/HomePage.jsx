import { useState } from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import PartnerLogos from '../components/home/PartnerLogos.jsx';
import CourseCatalogSection from '../components/home/CourseCatalogSection.jsx';
import LearningPathsSection from '../components/home/LearningPathsSection.jsx';
import ProfessionalGrowthSection from '../components/home/ProfessionalGrowthSection.jsx';
import CreatorToolsSection from '../components/home/CreatorToolsSection.jsx';
import CreatorCtaSection from '../components/home/CreatorCtaSection.jsx';
import TestimonialsSection from '../components/home/TestimonialsSection.jsx';
import SiteFooter from '../components/home/SiteFooter.jsx';
import { courses } from '../data/homepage.js';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const visibleCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === 'Featured' || course.category === activeCategory || course.categories?.includes(activeCategory);
    const matchesQuery = `${course.title} ${course.category}`.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <HeroSection
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setActiveCategory={setActiveCategory}
      />
      <PartnerLogos />
      <CourseCatalogSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        showMoreCategories={showMoreCategories}
        setShowMoreCategories={setShowMoreCategories}
        visibleCourses={visibleCourses}
      />
      <LearningPathsSection setActiveCategory={setActiveCategory} setSearchQuery={setSearchQuery} />
      <ProfessionalGrowthSection />
      <CreatorToolsSection />
      <CreatorCtaSection />
      <TestimonialsSection />
      <SiteFooter
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        isSubscribed={isSubscribed}
        setIsSubscribed={setIsSubscribed}
      />
    </div>
  );
}
