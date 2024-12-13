import { PropsWithChildren } from "react";
import {
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

const IsAuthorizedGuard: React.FC<
  PropsWithChildren
> = ({ children }) => {
  const location = useLocation();
  const { data: user } = useGetMe();

  if (!user) {
    return (
      <Navigate
        to="authorization"
        state={{ from: location }}
      />
    );
  }

  return children || <Outlet />;
};

export default IsAuthorizedGuard;
function useGetMe(): { data: any } {
  throw new Error("Function not implemented.");
}
