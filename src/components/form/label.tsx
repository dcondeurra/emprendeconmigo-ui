import { PropsWithChildren } from "react";

import { cn } from "../../utils";

export function Label({
  children,
  className,
  value,
}: PropsWithChildren<{ className?: string; value: string }>) {
  return (
    <label className={cn("space-y-2", className)}>
      {value}
      {children}
    </label>
  );
}
