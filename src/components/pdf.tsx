"use client"

// import './about.css'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
  } from "@react-pdf/renderer";
  import {useEffect} from 'react'


  

  
export default  function PDF() {

    


    // console.log("env check===>>>",data)

    const InvoiceData = `
    Total Orders: ${10}
    Total Orders Cost:  ${10}
    After ${10}% VAT : ${ 10 }
    After ${10}% Restaurant Commission  : ${10}
    Final Cost : ${10}
    `
  
    const styles = StyleSheet.create({
      page: {
          backgroundColor: '#fff',
          fontFamily: 'Helvetica',
          fontSize: 12,
          lineHeight: 2,
          padding : 20,
          textAlign: 'center',
  
      },
      head :{
        textAlign: 'center',
        color: '#3778C2',
      }
      
  });

  const [isClient, setIsClient] = useState(false)

  let data = {}
  useEffect(() => {
    setIsClient(true);

    ( async function (){
        data = await axios.post(`https://dev.jiweman.com/api/pawapay/correspondent/list`,{country : "" , limit : 10 , page : 0 , status : ""})

    })()
  }, [])
    
    return (
    <>
    <h1>This is about component</h1>
    <div className ="dis_list">
    {/* { data.data.map((res:any)=>  */}
   { isClient && <PDFDownloadLink document={<Document>
            <Page size="A4" style={ styles.page }>
            <View >
              <Text style={ styles.head}> Invoice </Text>
                <Text break>{InvoiceData} </Text>
            </View>
        </Page>
    </Document>}
    fileName="restaurant-report.pdf"
    style={{
      textDecoration: "none",
      padding: "10px",
      color: "#4a4a4a",
      backgroundColor: "#f2f2f2",
      border: "1px solid #4a4a4a",
    }}
    >

            Download PDF
    </PDFDownloadLink>}
            {/* )} */}
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
