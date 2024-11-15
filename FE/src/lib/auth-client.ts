import { createAuthClient } from "better-auth/react";

export const client = createAuthClient({
  baseURL: "http://localhost:3000", // the base URL of your auth server
});

export async function signUp(email: string, password: string) {
  try {
    const { data, error } = await client.signUp.email({
      email,
      name: "Default Name", // Add a default name or pass it as a parameter
      password
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await client.signIn.email({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
}