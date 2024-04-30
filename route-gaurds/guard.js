"use client";
import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocalUserData } from "../utils/authService";

export default function WithAuth({ children }) {

  console.log("Child===", children)
  // return function (props) {
  const auth = getLocalUserData().isUser;
  const router = useRouter();
  const currentPath = usePathname();

  
  const checkAuth = useCallback(() => {
    
    console.log("inside auth component==>>",auth , currentPath);

    const handleUpdate = () => {
      if (!auth) {
        router.push("/auth/login")
      } else if (auth && currentPath == "/auth/login") {
        console.log("should go here")
        router.push("/")
      }
    };

    handleUpdate(); // Call it once after the initial render
  }, [auth]); // Include auth in the dependency array

  useEffect(() => {
    checkAuth()
  }, [])

  return children
}
