import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerService } from "@/features/auth/services/auth.service";
import { setToken } from "@/utils/token";
import useAuthStore from "@/store/authStore";
import type { RegisterPayload } from "@/features/auth/types/auth.types";
import type { ParsedError } from "@/utils/errorHandler";

const useRegister = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const { mutate, isPending, isError, error } = useMutation<void, ParsedError, RegisterPayload>({
    mutationFn: async (payload: RegisterPayload) => {
      const result = await registerService(payload);
      setToken(result.accessToken);
      setUser(result.user);
    },
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("[useRegister]", error.message);
    },
  });

  return { register: mutate, isPending, isError, error };
};

export default useRegister;