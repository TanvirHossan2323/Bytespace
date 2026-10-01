import { PartnerMark } from '../branding/HomeBranding.jsx';

export default function PartnerLogos() {
  return (
    <section className="border-b border-gray-200 bg-[#f4f5f6] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 px-6 md:grid-cols-5 md:gap-x-10">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex items-center gap-3 text-[#85898f]">
              <PartnerMark variant={i} />
              <span className="whitespace-nowrap text-xl font-bold tracking-tight md:text-[28px]">Logoipsum</span>
            </div>
          ))}
        </div>
      </section>
  );
}
