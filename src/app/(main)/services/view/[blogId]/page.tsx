"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


interface IProps {
    params: {
      blogId: string;
    };
    searchParams: {};
  }
  
export default function ViewService({ params } : IProps) {
    const router = params;
    // const { id } = router;
    console.log("blogId=====>>>",params.blogId)
  return (
    <div>ViewService</div>
  )
}
