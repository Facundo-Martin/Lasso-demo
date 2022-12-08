import { useSession } from "next-auth/react";

export default function useAuth() {
  const { data } = useSession();
  const user = data?.user;

  return { user };
}
