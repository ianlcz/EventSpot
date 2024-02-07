export type SignUpState = {
  errors?: {
    lastname?: string[];
    firstname?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};
