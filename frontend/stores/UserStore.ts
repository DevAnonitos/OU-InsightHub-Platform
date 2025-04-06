import { createStore } from "zustand/vanilla";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { UserTypes, UserAuthState, UserActions, UserStore } from "@/types";

const defaultInitState: UserAuthState = {
  isAuthenticated: false,
  user: null,
};

export const createUserStore = (initState: UserAuthState = defaultInitState) => {
  return createStore<UserStore>() (
    devtools (
      persist(
        (set, get) => ({
          ...initState,
          signOut: async () => {
            // Explicitly set the default logged-out state
            set({ isAuthenticated: false, user: null });
          },
          signIn: async () => {

          },
          signUp: (data: UserTypes) => {
            // Assuming sign-up also logs the user in
            set({ isAuthenticated: true, user: data });
          },
          setUser: (data: UserTypes) => {
            set({
              isAuthenticated: true,
              user: data,
            });
          },
        }),
        {
          name: 'UserStore',
          storage: createJSONStorage(() => sessionStorage),
          partialize: (state) => ({
            isAuthenticated: state.isAuthenticated,
            user: state.user,
          }),
        }
      )
    )
  )
};
