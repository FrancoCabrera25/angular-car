export interface User {
  _id: string;
  email: string;
  role: UserRole;
  token: string;
}

export enum UserRole {
  'ADMIN' = 'ADMIN',
  'CLIENT' = 'CLIENT',
  'MECHANIC' = 'MECHANIC',
}
