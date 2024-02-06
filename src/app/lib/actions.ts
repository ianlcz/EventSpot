"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  lastname: z.string(),
  firstname: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  bornAt: z.string(),
});

const CreateUser = FormSchema.omit({ id: true });

export const createUser = async (formData: FormData): Promise<void> => {
  const {
    lastname,
    firstname,
    phoneNumber,
    email,
    password,
    confirmPassword,
    bornAt,
  } = CreateUser.parse({
    lastname: formData.get("lastname"),
    firstname: formData.get("firstname"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    bornAt: formData.get("bornAt"),
  });

  console.log({
    lastname,
    firstname,
    phoneNumber,
    email,
    password,
    confirmPassword,
    bornAt: bornAt ? new Date(bornAt) : undefined,
  });

  revalidatePath("/login");
  redirect("/login");
};
