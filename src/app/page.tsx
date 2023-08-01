import Image from 'next/image'
import dynamic from 'next/dynamic';

const HomeComponent = dynamic(()=> import('./about/page') ,{ ssr : true , loading : <p>Loading...</p> })


export default function Home() {
  return (
<h1>This is Home component</h1>
    // <HomeComponent/>
  )
}
