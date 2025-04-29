import useSession from "@/hooks/useSession";
import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import BlockUI from "../containers/BlockUI";

const AuthRoute: FC = () => {
  const location = useLocation();

  const { isUpdatingSession, isLoggedIn } = useSession();

  if (isUpdatingSession) return <BlockUI />;

  return <Outlet />;
};

export default AuthRoute;
