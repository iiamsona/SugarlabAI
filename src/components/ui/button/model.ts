import { cva } from 'class-variance-authority';
import { type ButtonProps } from './button';

export const types = {
  primaryGray: 'var(--color-text-default)',

  primaryRose: 'var(--color-primary-base-default)',

  primaryYellow: 'var(--color-primary-base-default)',

  sm: 'h-[20px] w-[20px]',
  md: 'h-[24px] w-[24px]',
  lg: 'h-[28px] w-[28px]'
};

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        none: '',
        // primary Gray
        primaryGray: 'bg-[var(--color-gray)] rounded-xl',

        // primary Rose
        primaryRose: 'bg-[var(--color-rose)] rounded-xl',

        // primary Yellow
        primaryYellow: 'bg-[var(--color-yellow)] rounded-xl',
      },
      size: {
        sm: 'h-9 w-40 rounded-xxl py-2 px-4',
        md: 'h-10 w-48 rounded-xxl py-2 px-6',
        lg: 'h-10 w-52 rounded-xxl py-2 px-4',
        iconSm: 'h-9 w-9 p-2',
        iconMd: 'h-10 w-10 p-2',
        iconLg: 'h-11 w-11 p-2'
      }
    },
    defaultVariants: {
      variant: 'primaryGray',
      size: 'sm'
    }
  }
);

export const useModel = ({ variant }: ButtonProps) => {
  const getStrokeColor = () => {
    const strokeColor = types[variant || 'primaryGray'];
    return strokeColor;
  };
  const color = getStrokeColor();

  return {
    color
  };
};