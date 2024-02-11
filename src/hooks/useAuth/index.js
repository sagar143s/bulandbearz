"use client";
import React from "react";
import Cookies from "universal-cookie";
import { useCookies } from 'next-client-cookies';
import { verifyJwtToken } from "@/libs/auth";

export function useAuth() {
  const [auth, setAuth] = React.useState(null);
  const cookies = useCookies();
  
  const getVerifiedToken = async () => {
    
    const cookies = new Cookies();
    const token = cookies.get("userToken") ?? null;
    
    const verifiedToken = await verifyJwtToken(token);
  
    setAuth(verifiedToken);
  };

  React.useEffect(() => {
    getVerifiedToken();
  }, []);

  // Expose a function to check if the user is authenticated
  const isAuthenticated = () => {
    return !!auth; // Converts auth to a boolean (true if auth is truthy, false if null)
  };

  return { auth, isAuthenticated };
}
