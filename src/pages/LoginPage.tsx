import LoginForm from "@/features/auth/components/LoginForm";

// ─── Component ────────────────────────────────────────────────────────────────

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <LoginForm />
    </div>
  );
};

export default LoginPage;