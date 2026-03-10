import { cn } from '@/lib/utils';
import Logo from './Logo';
import mainMobile from '@/assets/images/bg-main-mobile.png';
import mainTablet from '@/assets/images/bg-main-tablet.png';
import mainDesktop from '@/assets/images/bg-main-desktop.png';
import pattern1 from '@/assets/images/bg-pattern-1.svg';

export default function Header() {
  return (
    <header
      className={cn(
        'w-full md:max-w-[768px] xl:max-w-[1120px]',
        'relative flex flex-col gap-[64px] md:gap-[128px]',
        'px-[20px] md:px-[40px] xl:px-0 py-[64px] mx-auto',
      )}>
      {/* 배경1 */}
      <figure className={cn('absolute top-0')}>
        <picture>
          <source media="(min-width: 1280px)" srcSet={mainDesktop} />
          <source media="(min-width: 768px)" srcSet={mainTablet} />
          <img
            src={mainMobile}
            alt="bg1"
            className={cn(
              'max-w-[1800px]',
              'absolute top-[-150px] md:top-[-200px] right-[-560px] md:right-[-800px] xl:right-[-1470px]',
              '-z-10',
            )}
          />
        </picture>
      </figure>
      {/* 배경2 */}
      <figure className={cn('absolute top-0')}>
        <picture>
          <img
            src={pattern1}
            alt="bg2"
            className={cn(
              'max-w-none',
              'absolute top-[-40px] right-[-790px] xl:right-[-1271px]',
              '-z-9',
              'hidden md:block',
            )}
          />
        </picture>
      </figure>
      <Logo />
      <div className={cn('w-full', 'flex flex-col gap-[40px]', 'text-slate-custom')}>
        <h1 className={cn('w-full md:w-[416px] xl:w-[928px]', 'typo-1 text-[40px] md:text-[64px] xl:text-[88px]')}>
          We make your music sound extraordinary
        </h1>
        <p className={cn('w-full md:w-[504px] xl:w-[736px]', 'typo-4 text-[16px] md:text-[18px] xl:text-[20px]')}>
          A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with
          a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </div>
    </header>
  );
}
