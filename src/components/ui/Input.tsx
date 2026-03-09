import type { ComponentPropsWithoutRef } from "react";
import type { FieldError } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: FieldError;
}

// ─── Component ────────────────────────────────────────────────────────────────

const Input = ({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-zinc-700"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          w-full px-3 py-2 rounded-lg text-sm
          border transition-colors duration-200
          outline-none bg-white text-zinc-900
          placeholder:text-zinc-400
          ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-zinc-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          }
          disabled:bg-zinc-50 disabled:text-zinc-400 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error.message}</p>
      )}
    </div>
  );
};

export default Input;