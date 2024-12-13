import { supabase } from "../../supabase";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  console.log("data is", data);
  if (error) {
    if (
      error.message.includes(
        "Email not confirmed"
      )
    ) {
      throw new Error(
        "Your email is not confirmed. Please check your inbox and confirm your email."
      );
    } else if (
      error.message.includes(
        "Invalid login credentials"
      )
    ) {
      throw new Error(
        "Invalid email or password. Please try again."
      );
    } else {
      throw new Error(
        "An unexpected error occurred. Please try again later."
      );
    }
  }

  console.log("Login successful. User data:");
  return data;
};
