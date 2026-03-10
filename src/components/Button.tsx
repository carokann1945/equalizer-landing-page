import { cn } from '@/lib/utils';
import React from 'react';
import SvgIconApple from './svgs/IconApple';
import SvgIconAndroid from './svgs/IconAndroid';

type ButtonVariant = 'ios' | 'android';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  ios: 'w-full py-[16px] flex justify-center items-center bg-slate-custom typo-6 text-white hover:bg-cyan-custom hover:text-slate-custom transition-all duration-150 rounded-[12px] cursor-pointer',
  android:
    'w-full py-[16px] flex justify-center items-center bg-white typo-6 text-slate-custom hover:bg-yellow-custom transition-all duration-150 rounded-[12px] cursor-pointer',
};

export default function Button({ variant = 'ios' }: ButtonProps) {
  return (
    <button className={cn(variantStyles[variant])}>
      {variant === 'ios' ? (
        <>
          <div className={cn('w-144.08px h-[32px]', 'flex gap-[8px] items-center')}>
            <SvgIconApple className="w-[17.08px]" />
            <p className={cn('typo-6')}>iOS Download</p>
          </div>
        </>
      ) : (
        <>
          <div className={cn('w-[181.7px] h-[32px]', 'flex gap-[8px] items-center')}>
            <SvgIconAndroid className="w-[16.7px]" />
            <p className={cn('typo-6')}>Android Download</p>
          </div>
        </>
      )}
    </button>
  );
}
