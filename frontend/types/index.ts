export type UserTypes = {
  userId: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  gender: string;
  avatarUrl: string;
  userRole: string[];
} | null;

export interface UserAuthState {
  isAuthenticated: boolean;
  user: UserTypes | null;
}

export interface UserActions {
  signIn: (data: any) => void;
  signUp: (data: UserTypes) => void;
  signOut: () => void;
  setUser: (data: UserTypes) => void;
}

export type UserStore = UserAuthState & UserActions;