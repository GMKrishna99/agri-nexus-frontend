import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      register: (userData) => {
        // Check if user already exists
        const existingUser = localStorage.getItem(userData.email);
        if (existingUser) {
          throw new Error("Email is already registered");
        }

        // Store user data in localStorage
        localStorage.setItem(
          userData.email,
          JSON.stringify({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: userData.role || "user",
          })
        );

        // Auto login after registration
        set({ user: userData, isAuthenticated: true });
        return true;
      },
      login: (email, password) => {
        // Get user data from localStorage
        const userData = localStorage.getItem(email);
        if (!userData) {
          throw new Error("User not found");
        }

        const user = JSON.parse(userData);
        if (user.password !== password) {
          throw new Error("Invalid password");
        }

        // Set user in store
        set({
          user: {
            name: user.name,
            email: user.email,
            role: user.role,
          },
          isAuthenticated: true,
        });
        return true;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      getUser: () => get().user,
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
