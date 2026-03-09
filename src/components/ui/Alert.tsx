import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AlertProps {
  message: string;
  type?: "error" | "success" | "warning" | "info";
  visible: boolean;
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const variants: Record<NonNullable<AlertProps["type"]>, string> = {
  error:   "bg-red-50 border-red-300 text-red-700",
  success: "bg-green-50 border-green-300 text-green-700",
  warning: "bg-yellow-50 border-yellow-300 text-yellow-700",
  info:    "bg-blue-50 border-blue-300 text-blue-700",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Alert = ({ message, type = "error", visible }: AlertProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          role="alert"
          className={`
            w-full px-4 py-3 rounded-lg border text-sm font-medium
            ${variants[type]}
          `}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;