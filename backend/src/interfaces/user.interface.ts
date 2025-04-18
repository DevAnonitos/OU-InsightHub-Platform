export interface IUser {
  id: string
  email: string;
  username?: string;
  password?: string;
  googleId?: string;


  gender?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  isVerified: boolean;
  description?: string;

  createdAt: Date;
  updatedAt: Date;
};

export interface IUserRoles {

};