"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const AuthProvider = ({children}: {children: ReactNode}) => {
  return (
    <>
        <div>AuthProvider</div>
        <SessionProvider>
            {children}
        </SessionProvider>
    </>

  )
}

export default AuthProvider