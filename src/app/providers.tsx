// app/providers.tsx
"use client";
import AuthProvider from '@/context/AuthProvider';
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { Toaster } from 'react-hot-toast';
import { ApolloProvider } from "@apollo/client";
import { client } from '@/utility/authProvider';
export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      <Toaster />
      <AuthProvider>
        {children}
        </AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
    </ApolloProvider>
  )
}

