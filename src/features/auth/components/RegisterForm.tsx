import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { registerSchema } from "@/features/auth/schemas/register.schema";
import type { RegisterFormValues } from "@/features/auth/schemas/register.schema";
import useRegister from "@/features/auth/hooks/useRegister";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";

// ─── Component ────────────────────────────────────────────────────────────────

const RegisterForm = () => {
  const { register: registerUser, isPending, isError, error } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    const { confirmPassword: _, ...payload } = data;
    registerUser(payload);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-900">Create an account</h1>
        <p className="text-sm text-zinc-500">
          Join us today, it's free
        </p>
      </div>

      {/* Error Alert */}
      <Alert
        visible={isError}
        type="error"
        message={error?.message ?? "Something went wrong."}
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
      >
        {/* Name Row */}
        <div className="flex gap-3">
          <Input
            id="firstname"
            type="text"
            label="First name"
            placeholder="John"
            autoComplete="given-name"
            error={errors.firstname}
            {...register("firstname")}
          />

          <Input
            id="lastname"
            type="text"
            label="Last name"
            placeholder="Doe"
            autoComplete="family-name"
            error={errors.lastname}
            {...register("lastname")}
          />
        </div>

        <Input
          id="username"
          type="text"
          label="Username"
          placeholder="john_doe"
          autoComplete="username"
          error={errors.username}
          {...register("username")}
        />

        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email}
          {...register("email")}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={errors.password}
          {...register("password")}
        />

        <Input
          id="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />

        <Button
          type="submit"
          fullWidth
          isLoading={isPending}
          className="mt-2"
        >
          Create account
        </Button>
      </form>

      {/* Footer */}
      <p className="text-sm text-center text-zinc-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </motion.div>
  );
};

export default RegisterForm;