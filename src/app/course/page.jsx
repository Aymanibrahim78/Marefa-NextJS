
import React from 'react'
import {Container,} from '@mui/material'
import TitlePage from '@/_components/TitlePage';
import ContainerCoursesPage from './_components/ContainerCoursesPage';
import NotFoundSec from '@/_components/NotFoundSec';


  
  async function getData() {
    // await new Promise(resolve => setTimeout(resolve, 6000))
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}cousrses?populate=*`, { next: { revalidate: 100 } });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }





export const metadata = {
  title: "Courses",
  description: "Browse a wide range of high-quality free courses on Marefa4u. Start your educational journey now!",
};


const page = async () => {

const data = await getData();


  if (data.data.length < 1) {
    return (
      <>
    <TitlePage title={"Courses"}/>
    <Container maxWidth="lg">
     
      <NotFoundSec title={"Courses"} />
    </Container>
    </>
    );
  }

  return (
   
<>
<TitlePage title={"Courses"}/>


<Container maxWidth="lg">

<ContainerCoursesPage dataAPi={data.data.reverse()}   />


</Container>


  </>
  )
}

export default page
