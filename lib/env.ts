import * as z from "zod";

export const envSchema = z.object({
  GMAIL_API_KEY: z
    .string({
      required_error: "Gmail API key is required",
      invalid_type_error: "Gmail API key must be a string",
    })
    .min(1, "Gmail API key cannot be empty"),
  AUTH_SECRET: z
    .string({
      required_error: "Auth secret is required",
      invalid_type_error: "Auth secret must be a string",
    })
    .min(1, "Auth secret cannot be empty"),
  AUTH_CLIENT_ID: z
    .string({
      required_error: "Auth client ID is required",
      invalid_type_error: "Auth client ID must be a string",
    })
    .min(1, "Auth client ID cannot be empty"),
  AUTH_CLIENT_SECRET: z
    .string({
      required_error: "Auth client secret is required",
      invalid_type_error: "Auth client secret must be a string",
    })
    .min(1, "Auth client secret cannot be empty"),
});

export type envSchema = z.infer<typeof envSchema>;

