import { createStore } from "zustand/vanilla";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { UserTypes, UserAuthState, UserActions, UserStore } from "@/types";
import { SIGNOUT_ENDPOINT, GET_USER_ENDPOINT } from "@/constants/api-endpoint";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

const defaultInitState: UserAuthState = {
  isAuthenticated: false,
  user: null,
};

export const createUserStore = (
  initState: UserAuthState = defaultInitState
) => {
  return createStore<UserStore>()(
    persist(
      devtools((set, get) => ({
        ...initState,
        signOut: async () => {
          await fetch(`${BASE_URL}${SIGNOUT_ENDPOINT}`, {
            method: "POST",
            credentials: "include",
          });
          set(initState);
        },
        signIn: async (data) => {
          console.log("Access Token:", data.accessToken);
          try {
            const res = await fetch(`${BASE_URL}${GET_USER_ENDPOINT}`, {
              method: "GET",
              headers: { Authorization: `Bearer ${data.accessToken}` },
            });

            if (!res.ok) throw new Error("Failed to fetch user");
            const json = await res.json();

            console.log("✅ Fetched user:", json);

            set((state) => ({
              ...state,
              isAuthenticated: true,
              user: json.data,
            }));

            console.log("✅ Set state done!");
          } catch (error) {
            console.error("❌ Error in signIn:", error);
          }
        },
        signUp: (data) => {
          set({ isAuthenticated: true, user: data });
        },
        setUser: (data: UserTypes) => {
          console.log("Setting user:", data);
          set((state) => ({
            ...state,
            isAuthenticated: true,
            user: data,
          }));
        },
      })),
      {
        name: "UserStore",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          isAuthenticated: state.isAuthenticated,
          user: state.user,
        }),
      }
    )
  );
};
