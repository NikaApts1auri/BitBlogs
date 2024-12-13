// import {
//   createContext,
//   useState,
//   ReactNode,
// } from "react";

// type AuthContextType = {
//   user: any;
//   handleSetUser: (user: any) => void;
// };

// export const AuthContext = createContext<
//   AuthContextType | undefined
// >(undefined);

// export const AuthProvider: React.FC<{
//   children: ReactNode;
// }> = ({ children }) => {
//   const [user, setUser] = useState<any>(null);

//   const handleSetUser = (user: any) => {
//     setUser(user);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, handleSetUser }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
