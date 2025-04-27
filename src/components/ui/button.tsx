import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// 添加一些自定义的CSS类到globals.css
const buttonStyles = {
  default: "bg-[var(--btn-default-bg)] text-[var(--btn-default-text)] shadow hover:bg-[var(--btn-default-hover)]",
  destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
  outline: "border border-[var(--border-color)] bg-transparent shadow-sm hover:bg-[var(--hover-bg)] hover:text-primary",
  secondary: "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] shadow-sm hover:bg-[var(--btn-secondary-hover)]",
  ghost: "hover:bg-[var(--hover-bg)] hover:text-primary",
  link: "text-primary underline-offset-4 hover:underline",
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: buttonStyles.default,
        destructive: buttonStyles.destructive,
        outline: buttonStyles.outline,
        secondary: buttonStyles.secondary,
        ghost: buttonStyles.ghost,
        link: buttonStyles.link,
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }; 