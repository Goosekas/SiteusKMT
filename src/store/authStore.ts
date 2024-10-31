import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { username: string; role: string };
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (username: string, password: string) => {
    // In a real app, this would make an API call
    if (username && password) {
      set({ isAuthenticated: true, user: { username, role: 'user' } });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));