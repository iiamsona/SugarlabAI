import { cva } from 'class-variance-authority';
import { type ButtonProps } from './button';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        none: '',
        // primary Gray
        primaryGray: 'bg-[var(--color-grey)] rounded-xl border border-[var(--color-grey-border)] hover:bg-[var(--color-grey)]',
        primaryMenuGray: 'bg-[var(--color-grey)] rounded-xl border border-[var(--color-grey-border)] hover:bg-[var(--color-grey)] flex items-center justify-start px-4 py-[10px]',
        
        // primary Rose
        primaryRose: 'bg-[var(--color-rose)] rounded-xl border border-[var(--color-rose)]',
        primaryMenuRose: 'bg-[var(--color-rose)] rounded-xl border border-[var(--color-rose)] flex items-center justify-start px-4 py-[10px]',
        
        // primary Yellow
        primaryYellow: 'bg-[var(--color-yellow)] rounded-xl border border-[var(--color-yellow)]',

        ghost: "hover:bg-[var(--color-grey)] rounded-xl hover:border hover:border-[var(--color-grey-border)] flex items-center justify-start px-4 py-[10px]",
      },

      size: {
        ns: 'py-2 px-2 w-auto',
        sm: 'w-[86px] h-[36px] py-2 px-4',
        md: 'w-[135px] h-[36px] py-2 px-4',
        lg: 'w-[180px] h-[36px] py-2 px-4',
        menuSz: 'w-[226px] h-[44px]'
      }
    },
    defaultVariants: {
      variant: 'primaryGray',
      size: 'ns'
    }
  }
);

export const useModel = ({ variant }: ButtonProps) => {
  const getStrokeColor = () => {
    const strokeColor = [variant || 'primaryGray'];
    return strokeColor;
  };
  const color = getStrokeColor();
  return {
    color
  };
};