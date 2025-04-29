import Loader from "@/containers/BlockUI";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./PublicRoutes";

const AppRoutes = () => {
  const appRoutes = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{appRoutes}</Suspense>;
};

export default AppRoutes;
