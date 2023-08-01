import './about.css'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
export default async function about() {

     const { data } = await axios.post(`https://dev.jiweman.com/api/pawapay/correspondent/list`,{country : "" , limit : 10 , page : 0 , status : ""})


    console.log("env check===>>>",data)
    
    return (
    <>
    <h1>This is about component</h1>
    <div className ="dis_list">
    { data.data.map((res:any)=> 
    
            <p className='dis_items'>{res?.name}</p>
            )}
    </div>
    </>)
}

// export async function generateStaticParams() {
    // // Fetch data from external API
    // const res = await fetch(`https://dev.jiweman.com/api/pawapay/correspondent/list`)
    // const data = await res.json()
   
    // // Pass data to the page via props
    // return { props: { data } }
//   }
