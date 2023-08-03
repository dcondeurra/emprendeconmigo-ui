import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import { Label } from "./label";

import { cn } from "../../utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};
export function Input(props: InputProps) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(props.name, formState);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label value={props.title as string}>
        <input
          id={props.name}
          {...register(props.name)}
          {...props}
          className={cn(
            "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-text-danger active:border-text-danger",
            props.className,
          )}
        />
        {error && (
          <p className="text-danger text-sm font-medium">{error.message}</p>
        )}
      </Label>
    </div>
  );
}
