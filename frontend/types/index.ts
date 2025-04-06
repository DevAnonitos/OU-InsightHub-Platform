export type UserTypes = {
  userId: string;
  email: string;
  userName: string;
  userRoles: string[];
  createdAt: Date;
  gender?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  description?: string;
} | null;

export interface UserAuthState {
  isAuthenticated: boolean;
  user?: UserTypes | null;
};

export interface UserActions {
  signIn: (data: any) => void;
  signUp: (data: UserTypes) => void;
  signOut: () => void;
  setUser: (data: UserTypes) => void;
};

export type UserStore = UserAuthState & UserActions;