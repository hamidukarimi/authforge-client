import RegisterForm from "@/features/auth/components/RegisterForm";

// ─── Component ────────────────────────────────────────────────────────────────

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;