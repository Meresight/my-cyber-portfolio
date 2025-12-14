// src/components/ui/button.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "cyber-btn", // Custom class for the neon/cyberpunk style
          className
        )}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };