import Image from "next/image";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./model";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconSize?: "sm" | "md" | "lg";
  iconSrc?: string;
  menu?: boolean;
  newBtn?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      iconSize = size || "sm",
      iconSrc,
      menu,
      newBtn,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`${cn(buttonVariants({ variant, size, className }))} cursor-pointer `}
        ref={ref}
        {...props}
      >
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="icon"
            width={iconSize === "lg" ? 24 : iconSize === "md" ? 22 : menu ? 24 : 20}
            height={iconSize === "lg" ? 24 : iconSize === "md" ? 22 : menu ? 24 : 20}
            className="inline-block mr-1 cursor-pointer"
          />
        )}
        {props.children && (
          <p
            className={`text-sm leading-5 cursor-pointer ${
              menu ? "font-medium ml-1" : newBtn? "font-semibold text-[9px]" : "font-semibold"
            }`}
          >
            {props.children}
          </p>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
