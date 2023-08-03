import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "../../utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};
export function Input(props: InputProps) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(props.name, formState);

  return (
    <label>
      {props.title}
      <input
        id={props.name}
        {...register(props.name)}
        {...props}
        className={cn(
          "border-input-500 text-input-300 placeholder-input-300 active:border-tanner-blue-500 block w-full rounded-lg border-[1.5px] bg-white px-3 py-2.5 focus:outline-dashed focus:outline-offset-1",
          error && "border-red-600 active:border-red-600",
          props.className,
        )}
      />
      {error && <p className="font-semibold text-red-600">{error.message}</p>}
    </label>
  );
}
