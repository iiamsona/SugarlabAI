import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { buttonVariants, useModel } from './model';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
  iconSrc?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      iconSize = size || 'sm',
      iconSrc,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
       {iconSrc && (
          <Image
            src={iconSrc}
            alt="icon"
            width={iconSize === 'lg' ? 24 : iconSize === 'md' ? 18 : 14}
            height={iconSize === 'lg' ? 24 : iconSize === 'md' ? 18 : 14}
            className="inline-block mr-2"
          />
        )}
        {props.children && <p className="m-s6">{props.children}</p>}
      </Comp>
    );
  }
);

Button.displayName = 'Button';