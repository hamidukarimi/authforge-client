import { QueryClient } from "@tanstack/react-query";
import { parseApiError } from "@/utils/errorHandler";

// ─── Query Client ─────────────────────────────────────────────────────────────

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const { statusCode } = parseApiError(error);

        // Never retry on client errors
        if (statusCode >= 400 && statusCode < 500) return false;

        // Retry up to 2 times on server/network errors
        return failureCount < 2;
      },
      staleTime: 1000 * 60 * 5,   // 5 minutes
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryClient;