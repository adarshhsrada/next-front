"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function isAuth(Child) {
  return function IsAuth(props) {
    const auth = false;

    console.log("inside auth component==>>");

    useEffect(() => {
      const handleUpdate = () => {
        if (!auth) {
          redirect("/login");
        }
      };

      handleUpdate(); // Call it once after the initial render
    }, [auth]); // Include auth in the dependency array

    // if (!auth) {
    //   return null;
    // }

    return <Child {...props} />;
  };
}
