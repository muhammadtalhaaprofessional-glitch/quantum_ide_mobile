import type { User } from "@/types/user";

type RegisterUser = Omit<User, "id" | "createdAt">;

const MOCK_DELAY_MS = 500;

let currentUser: User | null = null;

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), MOCK_DELAY_MS);
  });
}

function createMockUser(fullName: string, email: string, avatar?: string): User {
  return {
    id: `user_${Date.now()}`,
    fullName,
    email,
    avatar,
    createdAt: new Date().toISOString(),
  };
}

export const AuthService = {
  async login(email: string, password: string): Promise<User> {
    if (!email.trim() || !password) {
      throw new Error("Email and password are required.");
    }

    const normalizedEmail = email.trim().toLowerCase();
    const name = normalizedEmail.split("@")[0] || "Quantum User";

    currentUser = createMockUser(
      name
        .split(/[._-]/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" "),
      normalizedEmail,
    );

    return delay(currentUser);
  },

  async register(user: RegisterUser): Promise<User> {
    if (!user.fullName.trim() || !user.email.trim()) {
      throw new Error("Full name and email are required.");
    }

    currentUser = createMockUser(
      user.fullName.trim(),
      user.email.trim().toLowerCase(),
      user.avatar,
    );

    return delay(currentUser);
  },

  async logout(): Promise<void> {
    currentUser = null;
    return delay(undefined);
  },

  async getCurrentUser(): Promise<User | null> {
    return delay(currentUser);
  },
};

export default AuthService;
