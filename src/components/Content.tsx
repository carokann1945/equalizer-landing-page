import { cn } from '@/lib/utils';
import app from '@/assets/images/illustration-app.png';
import pattern2 from '@/assets/images/bg-pattern-2.svg';
import Button from './Button';

export default function Content() {
  return (
    <div
      className={cn(
        'w-full md:w-[680px] xl:w-[1120px] h-[1005px] md:h-[800px]',
        'relative flex flex-col',
        'mx-auto mt-[120px] md:mt-[200px]',
        'z-1',
      )}>
      {/* 검은 배경과 휴대폰 */}
      <figure
        className={cn(
          'w-full md:max-w-[680px] xl:max-w-[1120px] h-[380px] md:h-[600px]',
          'bg-slate-custom md:rounded-[12px]',
          'mx-auto',
        )}>
        {/* 휴대폰 */}
        <img
          src={app}
          alt="app image"
          className={cn(
            'h-[430px] md:h-[556px]',
            'absolute left-1/2 -translate-x-1/2 top-[-110px]',
            'md:left-[40px] md:translate-x-0 xl:left-[100px]',
            'z-3',
          )}
        />
        {/* 배경 */}
        <img
          src={pattern2}
          alt="bg pattern"
          className={cn(
            'h-[468px]',
            'absolute left-1/2 -translate-x-1/2 top-0',
            'md:left-px md:translate-x-0 xl:left-[320px]',
            'z-2',
          )}
        />
      </figure>
      {/* 주황색 컨텐츠 */}
      <div
        className={cn(
          'w-full xl:w-[512px] md:w-[356px] h-[625px] md:h-[628px]',
          'flex flex-col gap-[48px]',
          'px-[20px] py-[48px] md:p-[48px] xl:p-[56px]',
          'bg-orange-custom',
          'z-4',
          'md:absolute top-[80px] right-[60px] xl:right-[100px]',
          'md:rounded-[16px]',
        )}>
        <div className={cn('w-full', 'flex flex-col gap-[40px] md:gap-[48px]', 'text-slate-custom')}>
          <div className={cn('w-full', 'flex flex-col gap-[24px]')}>
            <p className={cn('typo-3')}>Premium EQ</p>
            <p className={cn('typo-4 text-[16px] md:text-[18px] xl:text-[20px]')}>
              Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening
              experience to a whole new level and access all our incredible features!
            </p>
          </div>
          <div className={'flex gap-[16px] items-center'}>
            <p className={cn('typo-2')}>$4</p>
            <p className={cn('typo-4')}>/ month</p>
          </div>
        </div>
        <div className={cn('w-full', 'flex flex-col gap-[16px] items-center')}>
          <Button variant="ios" />
          <Button variant="android" />
        </div>
      </div>
    </div>
  );
}
