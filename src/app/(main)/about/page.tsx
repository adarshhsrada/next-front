"use client"
import './about.css'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import WithAuth from '../../../../route-gaurds/guard';
// import PDF from '../components/pdf';


// async function getData() {
//     const { data } = await axios.post(`https://dev.jiweman.com/api/pawapay/correspondent/list`,{country : "" , limit : 10 , page : 0 , status : ""})

//     return data
// }

 function About() {

    const data :any = [] //await getData()
    
    console.log("this the data===>>>",data)
    
    return (
    <>
    <h1>This is about component</h1>
    <div className ="dis_list">
    { data.map((res:any)=> <p className='dis_items'>{res?.name}</p> )}
    </div>
    {/* <PDF></PDF> */}
    </>)
}

export default About

// export async function generateStaticParams() {
    // // Fetch data from external API
    // const res = await fetch(`https://dev.jiweman.com/api/pawapay/correspondent/list`)
    // const data = await res.json()
   
    // // Pass data to the page via props
    // return { props: { data } }
//   }
