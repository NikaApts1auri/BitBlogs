import {
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import { supabase } from "../../supabase/supaClient";
import { Session } from "@supabase/supabase-js";

type AuthContexType = any;

export const AuthContext =
  createContext<AuthContexType>(null);
export const AuthProvider: React.FC<
  PropsWithChildren
> = ({ children }) => {
  const [user, setUser] = useState<any>();

  const handleSetUser = (
    session: Session | null
  ) => {
    setUser(session?.user || null);
  };

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        handleSetUser(session);
      });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        handleSetUser(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, handleSetUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
