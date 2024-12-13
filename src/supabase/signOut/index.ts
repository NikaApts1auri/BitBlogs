import { supabase } from "../supaClient";

export const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(
      "An error occurred while logging out. Please try again."
    );
  }

  // წაშალეთ ტოკენი localStorage-დან
  //   localStorage.removeItem("accessToken");

  console.log("Logout successful.");
};
