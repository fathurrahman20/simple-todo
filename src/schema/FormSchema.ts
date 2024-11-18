import { z } from "zod";

export const FormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(50),
  description: z
    .string()
    .min(10, { message: "Must be 10 or more characters long" })
    .max(200),
  status: z.string({
    required_error: "Please select an status to display.",
  }),
});
