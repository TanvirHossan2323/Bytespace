import { publicPath } from '../../utils/publicPaths.js';
export function Logo({ dark = false }) {
  return (
    <div className={`flex items-center gap-2 font-black text-xl tracking-tight md:text-[28px] ${dark ? 'text-brand-dark' : 'text-white'}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-lime md:h-9 md:w-9">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#164DF0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span>Bytespace</span>
    </div>
  );
}

export function PartnerMark({ variant }) {
  const gray = '#85898f';

  if (variant === 0) {
    return <svg aria-hidden="true" viewBox="0 0 52 52" className="h-12 w-12 shrink-0">
      <circle cx="26" cy="26" r="25" fill={gray} />
      <path d="M3 19c9-5 16 7 26 3 7-3 12-3 20 1M2 28c11-5 17 8 28 4 7-3 12-3 19 1M5 37c8-3 15 6 24 3 6-2 11-3 17 0" fill="none" stroke="white" strokeWidth="3.2" />
    </svg>;
  }

  if (variant === 1) {
    return <svg aria-hidden="true" viewBox="0 0 52 52" className="h-12 w-12 shrink-0">
      {Array.from({ length: 12 }, (_, i) => <line key={i} x1="26" y1="3" x2="26" y2="11" stroke={gray} strokeWidth="4" transform={`rotate(${i * 30} 26 26)`} />)}
      <circle cx="26" cy="26" r="10" fill={gray} />
      <circle cx="26" cy="26" r="5" fill="#f4f5f6" />
    </svg>;
  }

  if (variant === 2) {
    return <svg aria-hidden="true" viewBox="0 0 52 52" className="h-12 w-12 shrink-0">
      <circle cx="26" cy="26" r="25" fill={gray} />
      <path d="M29 8 14 28h10l-2 16 16-22H27l2-14Z" fill="white" />
    </svg>;
  }

  if (variant === 3) {
    return <svg aria-hidden="true" viewBox="0 0 52 52" className="h-12 w-12 shrink-0">
      <circle cx="26" cy="26" r="25" fill={gray} />
      <circle cx="26" cy="17" r="6" fill="white" />
      <circle cx="17" cy="26" r="6" fill="white" />
      <circle cx="35" cy="26" r="6" fill="white" />
      <circle cx="26" cy="35" r="6" fill="white" />
      <circle cx="26" cy="26" r="3.5" fill={gray} />
    </svg>;
  }

  return <svg aria-hidden="true" viewBox="0 0 52 52" className="h-12 w-12 shrink-0">
    {Array.from({ length: 9 }, (_, i) => <circle key={i} cx="26" cy="26" r={5 + i * 2.35} fill="none" stroke={gray} strokeWidth="1.25" />)}
  </svg>;
}

export function DecorativeShapes() {
  return (
    <>
      <svg className="absolute top-[5%] left-[3%] opacity-90" width="68" height="82" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 22C40 2 68 34 40 43C15 51 20 69 45 68C69 67 69 87 34 91" stroke="#D4F000" strokeWidth="14" strokeLinecap="round" fill="none" />
      </svg>
      <img aria-hidden="true" src={publicPath('Image/8670b841eac7883ecb790f84eb349c6c01db588b.png')} className="absolute bottom-[18%] left-[5%] h-16 w-16 object-contain opacity-80 brightness-0 invert" />
      <img aria-hidden="true" src={publicPath('Image/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png')} className="absolute top-[24%] right-[5%] h-12 w-12 object-contain opacity-90 brightness-0 invert max-[600px]:hidden" />
      <div className="absolute top-[18%] -right-20 h-52 w-40 rounded-full bg-brand-lime rotate-[-28deg] opacity-95 max-[768px]:hidden" />
      <img aria-hidden="true" src={publicPath('Image/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png')} className="absolute bottom-[8%] right-[4%] h-24 w-24 rotate-12 object-contain opacity-85 brightness-0 invert" />
      <img aria-hidden="true" src={publicPath('Image/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png')} className="absolute top-[42%] right-[15%] hidden h-16 w-16 rotate-12 object-contain opacity-80 brightness-0 invert lg:block" />
    </>
  );
}

export function HeroBackgroundShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <img src={publicPath('Image/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png')} className="absolute -left-12 top-[42%] h-36 w-32 -rotate-12 object-contain opacity-95 shape-lime sm:top-[39%] sm:h-52 sm:w-44 md:left-[-4%] md:top-[34%] md:h-[240px] md:w-[190px] 2xl:left-[-3%] 2xl:top-[19%] 2xl:h-[340px] 2xl:w-[250px]" />
      <img src={publicPath('Image/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png')} className="absolute left-[13%] top-[34%] h-20 w-20 rotate-12 object-contain opacity-95 brightness-0 invert sm:left-[13%] sm:top-[33%] sm:h-28 sm:w-28 md:left-[14%] md:top-[70%] md:h-40 md:w-40" />
      <img src={publicPath('Image/8670b841eac7883ecb790f84eb349c6c01db588b.png')} className="absolute -bottom-10 left-[3%] h-28 w-28 -rotate-12 object-contain opacity-95 brightness-0 invert sm:h-40 sm:w-40 md:bottom-[-4%] md:left-[5%] md:h-[300px] md:w-[300px]" />
      <img src={publicPath('Image/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png')} className="absolute right-[7%] top-[31%] hidden h-20 w-20 rotate-12 object-contain opacity-95 brightness-0 invert md:right-[12%] md:top-[57%] md:block md:h-40 md:w-40" />
      <img src={publicPath('Image/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png')} className="absolute -bottom-6 -right-6 h-28 w-24 rotate-12 object-contain opacity-95 brightness-0 invert sm:h-40 sm:w-36 md:bottom-[4%] md:right-[2%] md:h-[240px] md:w-[200px]" />
      <img src={publicPath('Image/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png')} className="absolute -right-36 top-[15%] hidden h-[300px] w-[250px] rotate-12 object-contain opacity-95 shape-lime md:-right-24 md:top-[45%] md:block md:h-[280px] md:w-[230px] 2xl:-right-24 2xl:top-[15%] 2xl:h-[430px] 2xl:w-[360px]" />
    </div>
  );
}
