"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema: any = z.object({
  id: z.string(),
  lastname: z.string().refine((data) => data !== undefined && data !== "", {
    message: "Veuillez renseigner votre nom de famille.",
  }),
  firstname: z.string().refine((data) => data !== undefined && data !== "", {
    message: "Veuillez renseigner votre prénom.",
  }),
  phoneNumber: z.string(),
  email: z.string().email({
    message: "Veuillez saisir une adresse email valide.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Le mot de passe doit avoir au moins 8 caractères.",
    })
    .refine((data) => /[A-Z]/.test(data), {
      message: "Le mot de passe doit contenir des majuscules.",
    })
    .refine((data) => /[a-z]/.test(data), {
      message: "Le mot de passe doit contenir des minuscules.",
    })
    .refine((data) => /\d/.test(data), {
      message: "Le mot de passe doit contenir des chiffres.",
    })
    .refine((data) => /[!@#$%^&*(),.?":{}|<>]/.test(data), {
      message: "Le mot de passe doit contenir au moins un caractère spécial.",
    })
    .refine((data) => data !== undefined && data !== "", {
      message: "Veuillez renseigner votre mot de passe.",
    }),
  confirmPassword: z.string().refine((data) => data === FormSchema.password, {
    message: "Les mots de passe ne correspondent pas.",
  }),
  bornAt: z.string(),
});

export type State = {
  errors?: {
    lastname?: string[];
    firstname?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

const SignUp = FormSchema.omit({ id: true });

export const signUp = async (
  prevState: State,
  formData: FormData,
): Promise<{ errors?: {}; message?: string | null }> => {
  // Validate form using Zod
  const validatedFields = SignUp.safeParse({
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
  console.log({
    lastname,
    firstname,
    phoneNumber,
    email,
    password,
    confirmPassword,
    bornAt,
  });

  // Revalidate the cache for the login page and redirect the user.
  revalidatePath("/login");
  redirect("/login");
};
