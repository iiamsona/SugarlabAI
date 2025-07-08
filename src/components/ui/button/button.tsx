import Image from "next/image";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./model";
import { BlockList } from "net";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconSize?: "sm" | "md" | "lg";
  iconSrc?: string;
  menu?: boolean;
  sMenu?: boolean;
  menuNew?: boolean;
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
      sMenu,
      menuNew,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`${cn(buttonVariants({ variant, size, className }), {
          "flex flex-col justify-center items-center": sMenu,
        })} cursor-pointer menu-button`}
        ref={ref}
        {...props}
      >
        {iconSrc && iconSrc !== "/user.svg" && (
          <div className="relative inline-block">
            {menuNew && (
              <span className="absolute -top-[13px] -right-[20px] text-[9px] font-semibold bg-[var(--color-rose)] text-white w-[32px] h-[16px] rounded-xl flex items-center justify-center">
                <p className="text-center mt-[1px]">New</p>
              </span>
            )}
            <Image
              src={iconSrc}
              alt="icon"
              width={
                iconSize === "lg"
                  ? 24
                  : iconSize === "md"
                  ? 22
                  : menu
                  ? 24
                  : sMenu
                  ? 20
                  : 20
              }
              height={
                iconSize === "lg"
                  ? 24
                  : iconSize === "md"
                  ? 22
                  : menu
                  ? 24
                  : sMenu
                  ? 20
                  : 20
              }
              className={cn("inline-block mr-1 cursor-pointer min-w-[20px]", {
                "mr-0": sMenu,
              })}
            />
          </div>
        )}

        {iconSrc == "/user.svg" && (
          <Image
            src={iconSrc}
            alt="icon"
            width={36}
            height={36}
            className={cn("inline-block mr-1 cursor-pointer", {
              "mr-0": sMenu,
            })}
          />
        )}
        {props.children && (
          <div
            className={cn(
              "text-sm leading-5 cursor-pointer text-center flex justify-center items-center w-full",
              `${menu ? "font-medium ml-1" : "font-semibold"}`,
              {
                "text-xs ml-0 mt-2": sMenu,
              }
            )}
          >
            {props.children}
          </div>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
