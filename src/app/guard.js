"use client";
import { useCallback, useEffect } from "react";
import { redirect } from "next/navigation";

export default function WithAuth({ children }) {

  console.log("Child===", children)
  // return function (props) {
  const auth = false;

  console.log("inside auth component==>>");

  const checkAuth = useCallback(() => {
    const handleUpdate = () => {
      if (!auth) {
        redirect("/auth/login");
      }
    };

    handleUpdate(); // Call it once after the initial render
  }, [auth]); // Include auth in the dependency array

  useEffect(() => {
    checkAuth()
  }, [])

  return children
}
