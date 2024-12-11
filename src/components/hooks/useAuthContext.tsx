import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "you must use auth context inside auth context!"
    );
  }
  return authContext;
};
