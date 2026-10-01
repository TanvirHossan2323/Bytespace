import { useState } from 'react';
import { Star } from 'lucide-react';

const portraits = [
  '/Image/0577f0e9b7fca2f32639871454da0de95f951709.png',
  '/Image/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png',
  '/Image/1e078348a54489bfd231d82fe1944770883c8d80.png',
  '/Image/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png',
  '/Image/83fb3e04056cc892636460bee5791aa3f243854c.png',
  '/Image/7fdccc783264eedc4fb989984eecbc4058a219f2.png',
  '/Image/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png'
];

function BrandMark() {
  return (
    <a href="/" aria-label="Bytespace home" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-lime">
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5" stroke="#164DF0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function MiniCourseCard({ back = false }) {
  return (
    <article className={`absolute overflow-hidden rounded-[26px] border border-gray-200 bg-white p-3 shadow-xl ${back ? 'left-0 top-[112px] z-0 w-[68%] sm:w-[64%]' : 'left-[18%] top-0 z-10 w-[80%] max-w-[470px]'}`}>
      <img
        src={back ? '/Image/c88264191d691ba3300ad4f82a942429bb912fa5.jpg' : '/Image/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg'}
        alt={back ? 'Design asset course preview' : 'Data analytics dashboard course preview'}
        className={`w-full rounded-[18px] object-cover ${back ? 'h-[190px]' : 'h-[205px] sm:h-[245px]'}`}
      />
      {back ? (
        <div className="p-2">
          <h3 className="text-xl font-bold text-brand-dark">Build Digital Assets</h3>
          <p className="mt-2 text-sm text-brand-blue">by purepearl studio</p>
          <p className="mt-4 text-xl font-bold text-brand-blue">$25<span className="text-xs font-normal text-gray-500"> / lifetime</span></p>
        </div>
      ) : (
        <>
          <div className="absolute inset-x-5 top-[38%] flex flex-wrap justify-center gap-2 sm:top-[42%]">
            {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((label) => <span key={label} className="rounded-full bg-white/85 px-3 py-2 text-xs text-gray-600 shadow-sm backdrop-blur">{label}</span>)}
          </div>
          <div className="flex items-center justify-between gap-2 px-2 pt-4">
            <h3 className="truncate text-lg font-bold text-black sm:text-2xl">the Power of Big Data</h3>
            <span className="flex shrink-0 items-center gap-1 text-gray-600">4.5 <Star size={19} className="fill-brand-lime text-brand-lime" /></span>
          </div>
          <p className="px-2 pt-1 text-sm text-gray-500">by <span className="text-brand-blue">purepearl studio</span></p>
          <div className="flex items-center gap-3 px-2 pt-4">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-xs text-gray-700">▮ Beginner</span>
            <div className="flex -space-x-2">
              {portraits.slice(1, 5).map((src) => <span key={src} className="h-9 w-9 overflow-hidden rounded-full border-2 border-white"><img src={src} alt="" className="h-full w-full object-cover" /></span>)}
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-black text-xs font-semibold text-white">26+</span>
            </div>
          </div>
          <p className="px-2 pb-1 pt-3 text-sm text-gray-500"><span className="text-2xl font-bold text-brand-blue">$25</span><span>/lifetime</span></p>
        </>
      )}
    </article>
  );
}

function AuthArtwork() {
  return (
    <div className="relative mt-12 h-[540px] w-full max-w-[720px] sm:mt-[76px] sm:h-[580px]">
      <MiniCourseCard back />
      <MiniCourseCard />
      <img aria-hidden="true" src="/Image/8670b841eac7883ecb790f84eb349c6c01db588b.png" className="absolute left-[9%] top-[9%] z-20 h-28 w-28 rotate-[-16deg] object-contain shape-lime sm:h-32 sm:w-32" />
      <img aria-hidden="true" src="/Image/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png" className="absolute bottom-[14%] right-[2%] z-20 h-36 w-28 rotate-12 object-contain brightness-0 invert sm:h-44 sm:w-36" />
      <img aria-hidden="true" src="/Image/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png" className="absolute bottom-0 left-0 z-20 h-36 w-36 -rotate-[18deg] object-contain shape-lime sm:h-44 sm:w-44" />
      <div className="absolute bottom-0 left-[40%] z-20 w-[52%] max-w-[325px] rounded-[22px] bg-brand-lime p-4 shadow-xl sm:p-5">
        <div className="text-base font-semibold text-brand-dark sm:text-lg">Happy Students</div>
        <div className="flex items-center gap-1 text-xs text-gray-700">4.5 (240) <Star size={14} className="fill-brand-blue text-brand-blue" /></div>
        <div className="mt-3 flex items-center">
          {portraits.map((src, index) => <span key={src} className={`relative -ml-2 h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-brand-lime sm:h-10 sm:w-10 ${index === 0 ? 'ml-0' : ''}`}><img src={src} alt="" className="h-full w-full object-cover" /></span>)}
          <span className="-ml-2 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#171717] text-xs font-bold text-white sm:h-12 sm:w-12">2K+</span>
        </div>
      </div>
    </div>
  );
}

function Field({ label, type = 'text', placeholder, autoComplete, minLength }) {
  return (
    <label className="block text-sm font-medium text-[#24252a]">
      <span className="mb-2 block">{label}</span>
      <input
        className="h-14 w-full rounded-2xl border border-[#dfe1e6] bg-white px-5 text-base font-normal text-[#24252a] outline-none transition placeholder:text-[#858993] focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 sm:h-16 sm:text-lg"
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        minLength={minLength}
      />
    </label>
  );
}

export default function AuthPage({ mode }) {
  const isSignup = mode === 'signup';
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice(isSignup
      ? 'Your details passed validation. Account creation needs an authentication service.'
      : 'Your details passed validation. Sign-in needs an authentication service.');
  }

  return (
    <main className="hero-grid min-h-screen overflow-hidden bg-brand-blue text-white">
      <div className="mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 gap-0 px-0 xl:grid-cols-[1.03fr_1fr] xl:gap-10 xl:px-6">
        <section className="px-6 pb-10 pt-8 sm:px-10 xl:pl-[125px] xl:pr-0 xl:pt-10">
          <BrandMark />
          <div className="mt-10 max-w-[600px] sm:mt-16">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">{isSignup ? 'Sign up and come in' : 'Sign in with ease'}</h1>
            <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg">
              {isSignup
                ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.'
                : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}
            </p>
          </div>
          <AuthArtwork />
        </section>

        <section className="flex min-h-[760px] flex-col rounded-t-[30px] bg-white px-6 py-12 text-[#24252a] sm:px-12 xl:mt-[112px] xl:min-h-[calc(100vh-112px)] xl:max-w-[740px] xl:rounded-t-[30px] xl:pb-8 xl:pt-[64px] 2xl:mt-[150px] 2xl:min-h-[calc(100vh-150px)] 2xl:px-[78px] 2xl:pt-[80px]">
          <div>
            <p className="text-lg text-brand-blue">{isSignup ? 'Create an Account' : 'Sign In'}</p>
            <h2 className="mt-2 text-4xl font-bold leading-[1.16] tracking-tight sm:text-[54px]">
              {isSignup ? <>Welcome to<br />ByteSpace</> : 'Welcome Back'}
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
              {isSignup && <Field label="Full Name" placeholder="Jamie Davis" autoComplete="name" minLength={2} />}
              <Field label="Email" type="email" placeholder="designer@example.com" autoComplete="email" />
              <Field label="Password" type="password" placeholder="********" autoComplete={isSignup ? 'new-password' : 'current-password'} minLength={8} />
              <div className="flex justify-end pt-1">
                <button type="submit" className="rounded-full bg-brand-lime px-7 py-3 text-lg font-medium text-brand-dark transition hover:bg-[#c5df00] sm:px-8 sm:py-3.5">
                  {isSignup ? 'Continue' : 'Sign In'}
                </button>
              </div>
            </form>

            {!isSignup && (
              <div className="mt-12">
                <div className="flex items-center gap-3 text-sm text-gray-500"><span className="h-px flex-1 bg-gray-300" />or<span className="h-px flex-1 bg-gray-300" /></div>
                <div className="mt-7 flex justify-center gap-5">
                  <button type="button" aria-label="Continue with Facebook" onClick={() => setNotice('Facebook sign-in needs provider setup.')} className="grid h-20 w-20 place-items-center rounded-[24px] border border-gray-300 text-4xl font-bold text-black hover:bg-gray-50">f</button>
                  <button type="button" aria-label="Continue with Google" onClick={() => setNotice('Google sign-in needs provider setup.')} className="grid h-20 w-20 place-items-center rounded-[24px] border border-gray-300 text-4xl font-bold text-black hover:bg-gray-50">G</button>
                </div>
              </div>
            )}

            {notice && <p role="status" className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-brand-blue">{notice}</p>}
          </div>

          <p className="mt-auto pt-10 text-center text-sm text-gray-500 sm:text-base">
            {isSignup ? 'Already have an account?' : 'New user?'}{' '}
            <a href={isSignup ? '/login' : '/signup'} className="font-medium text-brand-blue hover:underline">
              {isSignup ? 'Login' : 'Create an account'}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
