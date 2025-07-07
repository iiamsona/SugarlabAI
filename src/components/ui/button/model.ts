import { cva } from 'class-variance-authority';
import { type ButtonProps } from './button';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        none: '',
        // primary Gray
        primaryGray: 'bg-[var(--color-grey)] rounded-xl border border-[var(--color-grey-border)]',

        // primary Rose
        primaryRose: 'bg-[var(--color-rose)] rounded-xl',

        // primary Yellow
        primaryYellow: 'bg-[var(--color-yellow)] rounded-xl',
      },

      size: {
        sm: 'w-[86px] h-[36px] py-2 px-4',
        md: 'w-[135px] h-[36px] py-2 px-4',
        lg: 'w-[135px] h-[36px] py-2 px-4',
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