"use client";
import { LocalStorageKey } from '@/context/AuthProvider';
import { useAuth } from '@/context/authContext';
import { useLocalStorage } from '@/hook/useLocalStorage';
import React, {  ReactNode, useEffect } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [verifyToken] = useLazyQuery(VERIFY_TOKEN);
  const { item } = useLocalStorage<LocalStorageKey>("AUTH_TOKEN");
  const { isDashboard, logout } = useAuth();
  const handleVerifyToken = async () => {
    // const { data } = await verifyToken({ variables: { token: item } });
    // if (!data?.verifyToken) {
    //   logout();
    // }
  };
  useEffect(() => {
    handleVerifyToken();
  }, []);
  return (
    <>
      <main>
        {children}</main>
    </>
  );
};

export default Layout;