import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const ProtectedRouter = ({ children }: Props) => {
  const user = false;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
