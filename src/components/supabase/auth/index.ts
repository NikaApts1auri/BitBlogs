import { supabase } from "..";

export const registerrr = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,
    });

  if (error) {
    throw new Error(error.message); // თუ შეცდომა მოხდა, პირდაპირ ვაგდებთ
  }

  return { data }; // წარმატების შემთხვევაში ვაბრუნებთ მონაცემებს
};
