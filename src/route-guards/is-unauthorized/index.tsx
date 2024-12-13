import { PropsWithChildren } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

const IsUnauthorizedGuard: React.FC<
  PropsWithChildren
> = ({ children }) => {
  const location = useLocation();
  const { data: user } = useGetMe();

  // თუ მომხმარებელი უკვე ავტორიზებულია, გადავამისამართოთ სხვა გვერდზე
  if (user) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
      />
    );
  }

  return children || <Outlet />;
};

export default IsUnauthorizedGuard;

function useGetMe(): { data: any } {
  const user = null;
  return { data: user };
}
