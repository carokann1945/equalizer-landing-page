import { cn } from '@/lib/utils';
import Logo from './Logo';
import Social from './Social';

export default function Footer() {
  return (
    <footer className={cn('w-full', 'px-[20px] pt-[64px] pb-[80px]')}>
      {/* mobile */}
      <div className={cn('w-full md:hidden', 'flex flex-col gap-[32px]')}>
        <Logo />
        <p className={cn('typo-5 text-slate-custom', 'flex flex-col')}>
          All rights reserved © Equalizer 2021 Have any problems? Contact us via social media or email us at
          <b>equalizer@example.com</b>
        </p>
        <div>
          <Social />
        </div>
      </div>
      {/* tablet */}
      <div className={cn('hidden xl:hidden w-full max-w-[688px]', 'md:flex flex-col gap-[32px]', 'mx-auto')}>
        <Logo />
        <div className={cn('w-full', 'flex justify-between items-center')}>
          <p className={cn('typo-5 text-slate-custom', 'flex flex-col')}>
            <span>All rights reserved © Equalizer 2021</span> Have any problems? Contact us via social media or email us
            at
            <b>equalizer@example.com</b>
          </p>
          <div>
            <Social />
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className={cn('hidden w-[1120px]', 'xl:flex justify-between', 'mx-auto')}>
        <Logo />
        <p className={cn('typo-5 text-slate-custom', 'flex flex-col')}>
          <span>All rights reserved © Equalizer 2021</span> Have any problems? Contact us via social media or email us
          at
          <b>equalizer@example.com</b>
        </p>
        <div className={cn('self-center')}>
          <Social />
        </div>
      </div>
    </footer>
  );
}
