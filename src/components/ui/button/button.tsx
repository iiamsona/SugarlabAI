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
        {iconSrc && iconSrc != '/user.svg' && (
          <Image
            src={iconSrc}
            alt="icon"
            width={iconSize === "lg" ? 24 : iconSize === "md" ? 22 : menu ? 24 : 20}
            height={iconSize === "lg" ? 24 : iconSize === "md" ? 22 : menu ? 24 : 20}
            className="inline-block mr-1 cursor-pointer"
          />
        )}
        {iconSrc == '/user.svg' && (
          <Image
            src={iconSrc}
            alt="icon"
            width={36}
            height={36}
            className="inline-block mr-1 cursor-pointer"
          />
        )}
        {props.children && (
          <div
            className={`text-sm leading-5 cursor-pointer ${
              menu ? "font-medium ml-1" : "font-semibold"
            }`}
          >
            {props.children}
          </div>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
