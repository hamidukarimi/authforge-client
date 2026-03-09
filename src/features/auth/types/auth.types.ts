import type { ApiUser } from "@/types/api.types";

// ─── Request Payloads ─────────────────────────────────────────────────────────

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

// ─── Response Data ────────────────────────────────────────────────────────────

export interface AuthResult {
  user: ApiUser;
  accessToken: string;
}