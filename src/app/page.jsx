"use client"

// const HomeComponent = dynamic(()=> import('./about/page') ,{ ssr : true , loading : <p>Loading...</p> })


function Home() {


  return (
    <>
      <h1>This is Home component</h1>
    </>
    // <HomeComponent/>
  )
}

export default Home
