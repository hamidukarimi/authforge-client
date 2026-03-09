import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import Spinner from "@/components/ui/Spinner";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  fullWidth?: boolean;
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:   "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400",
  secondary: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 disabled:bg-zinc-100",
  ghost:     "bg-transparent text-indigo-600 hover:bg-indigo-50 disabled:text-indigo-300",
  danger:    "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Button = ({
  children,
  isLoading = false,
  variant = "primary",
  fullWidth = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      disabled={disabled ?? isLoading}
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2 rounded-lg text-sm font-medium
        transition-colors duration-200 cursor-pointer
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...(props as object)}
    >
      {isLoading && <Spinner size="sm" />}
      {children}
    </motion.button>
  );
};

export default Button;