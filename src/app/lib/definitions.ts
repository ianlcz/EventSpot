import { HTMLInputTypeAttribute } from "react";

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

export type FormInput = {
  name: string;
  type: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  state?: string[];
  required?: boolean;
};
