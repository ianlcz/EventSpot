"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import APIClient from "../utils/apiClient";
import { SignUpSchema } from "./schemas";
import { LoginState, SignUpState } from "./states";

export const signUp = async (
  prevState: SignUpState,
  formData: FormData,
): Promise<{ errors?: {}; message?: string | null }> => {
  // Validate form using Zod
  const validatedFields = SignUpSchema.safeParse({
    lastname: formData.get("lastname"),
    firstname: formData.get("firstname"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    bornAt: formData.get("bornAt"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Champs manquants. Nous n'avons pas pu créer votre compte.",
    };
  }

  // Prepare data for insertion into the database
  const {
    lastname,
    firstname,
    phoneNumber,
    email,
    password,
    confirmPassword,
    bornAt,
  } = validatedFields.data;

  // Insert data into the database
  await APIClient(`mutation SignUp {
    signUp(
      createUserInput: {
        lastname: "${lastname}"
        firstname: "${firstname}"
        email: "${email}"
        phoneNumber: "${phoneNumber}"
        password: "${password}"
        confirmPassword: "${confirmPassword}"
        bornAt: "${bornAt}"
      }) {
        lastname
        firstname
        email
        phoneNumber
        bornAt
        registeredAt
      }
  }`);

  // Revalidate the cache for the login page and redirect the user.
  revalidatePath("/login");
  redirect("/login");
};

export const login = async (prevData: LoginState, formData: FormData) => {
  const credential = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { signIn }: { signIn: { accessToken: string; refreshToken: string } } =
    await APIClient(`mutation SignIn {
    signIn(email: "${credential.email}", password: "${credential.password}") {
      accessToken
      refreshToken
    }
  }`);

  cookies().set("auth_tokens", JSON.stringify(signIn));

  // Revalidate the cache for the login page and redirect the user.
  revalidatePath("/event");
  redirect("/events");
};
