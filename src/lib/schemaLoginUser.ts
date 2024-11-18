import { z } from "zod";
export const userRegisterSchema = z.object({

  password: z.string().min(1, {
    message: "Por favor informar a Sennha",
  }),

  cpf: z
    .string()
    .min(1, { message: "O campo CPF  precisa ser preenchido" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF Inválido" }),

})

