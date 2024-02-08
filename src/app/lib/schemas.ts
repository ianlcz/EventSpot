import { z } from "zod";

export const SignUpSchema = z
  .object({
    lastname: z
      .string()
      .refine((data) => data !== undefined && data.trim() !== "", {
        message: "Veuillez renseigner votre nom de famille.",
      }),
    firstname: z
      .string()
      .refine((data) => data !== undefined && data.trim() !== "", {
        message: "Veuillez renseigner votre prénom.",
      }),
    phoneNumber: z.string(),
    email: z.string().email({
      message: "Veuillez saisir une adresse email valide.",
    }),
    password: z
      .string()
      .min(8, {
        message: "Doit avoir au moins 8 caractères.",
      })
      .refine((data) => /[A-Z]/.test(data), {
        message: "Doit contenir des majuscules.",
      })
      .refine((data) => /[a-z]/.test(data), {
        message: "Doit contenir des minuscules.",
      })
      .refine((data) => /\d/.test(data), {
        message: "Doit contenir des chiffres.",
      })
      .refine((data) => /[!@#$%^&*(),.?":{}|<>-_]/.test(data), {
        message: "Doit contenir au moins un caractère spécial.",
      }),

    confirmPassword: z.string(),
    bornAt: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
