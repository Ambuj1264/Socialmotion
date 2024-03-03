import { useLocalStorage } from "@/hook/useLocalStorage";
import { IAuth } from "./authContext";
import { usePathname, useRouter } from "next/navigation";
import React, { PropsWithChildren, useState } from "react";
import { AuthContainer } from "./authContext";
export type LocalStorageKey = "AUTH_TOKEN" | "user";
interface UseLocalStorageResult {
  item: string | null;
  setItem: (value: string) => void;
  clearStorage: () => void;
}

function AuthProvider({ children }: PropsWithChildren) {
  const { setItem, item, clearStorage }: UseLocalStorageResult =
    useLocalStorage<LocalStorageKey>("AUTH_TOKEN");
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>(item);
  const pathname = usePathname();
  const router = useRouter();
  const isDashboard = pathname === "/menu";
  const authenticateUser = (token: string) => {
    setItem(token);
    setIsLoggedIn(token);
  };

  const logout = () => {
    clearStorage();
    setIsLoggedIn(null);
    router.push("/login");
  };

  const contextValues: IAuth = {
    authenticateUser,
    logout,
    isDashboard,
    isLoggedIn: !!isLoggedIn,
  };

  return <AuthContainer value={contextValues}>{children}</AuthContainer>;
}

export default AuthProvider;
