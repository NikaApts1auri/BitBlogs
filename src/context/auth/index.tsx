import {
  PropsWithChildren,
  useState,
} from "react";
import { createContext } from "react";

type AuthContexType = any;

export const AuthContext =
  createContext<AuthContexType>(null);
export const AuthProvider: React.FC<
  PropsWithChildren
> = ({ children }) => {
  const [user, setUser] = useState<any>();

  const handleSetUser = (session: {
    user: any;
  }) => {
    setUser(session?.user || null);
  };
  return (
    <AuthContext.Provider
      value={{ user, handleSetUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
