import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { buttonVariants } from ".";
import { cn } from "../../utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface SlotProps
  extends React.SlotHTMLAttributes<HTMLSlotElement>,
    VariantProps<typeof buttonVariants> {}
const Slot = React.forwardRef<HTMLSlotElement, SlotProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <slot
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Slot.displayName = "Slot";

export { Button, Slot };
