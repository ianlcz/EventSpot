export type Link = {
  name: string;
  href: string;
  icon?: string | JSX.Element;
};

export type User = {
  id: string; // Will be created on the database
  lastname: string;
  firstname: string;
  avatarUrl?: string;
  phoneNumber?: string;
  bornAt?: Date;
  email: string;
  password: string;
  refreshToken?: string;
  lastConnectionAt?: Date;
  registeredAt?: Date;
  updatedAt?: Date;
};
