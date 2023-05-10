import { Link } from "wouter";
import { useAuthContext } from "../AuthContext";

export const Nav = () => {
  const { user } = useAuthContext();

  return (
    <nav>
      <Link href="/" className="">
        Basic example
      </Link>
      <Link href="/tanstack-query">Tanstack query example</Link>
      {user && <div>user: {user}</div>}
    </nav>
  );
};
