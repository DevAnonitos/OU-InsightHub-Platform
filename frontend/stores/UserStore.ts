import { UserTypes, UserAuthState, UserActions, UserStore } from "@/types";
import { createStore } from "zustand/vanilla";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

const defaultInitState: UserAuthState = {
  isAuthenticated: false,
  user: null,
};

export const createUserStore = (initState: UserAuthState = defaultInitState) => {
  return createStore<UserStore>
  
};