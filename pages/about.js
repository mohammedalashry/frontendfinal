import AboutUs from '../components/aboutus/AboutUs'
import ImageAboutus from '../components/aboutus/ImageAboutus'
import OurTeam from '../components/aboutus/OurTeam'
import OurStory from '../components/aboutus/OurStory'
import WhatOurPartnersSay from '../components/aboutus/WhatOurPartnersSay'
import OurGlobalPartners from '../components/landing/OurGlobalPartners'
import SliderComp from '../components/aboutus/SliderComp'
import axios from "axios";
import {BASE_URL} from "../variable";



export default function About({data,dataPartner}) {

  return (
    <>
        <AboutUs data={data} />
        <OurStory data={data} />
        <ImageAboutus  data={data}/>
         <OurTeam />
         <SliderComp data={data}/>
        <WhatOurPartnersSay data={data} />
        <OurGlobalPartners data={dataPartner}/>
    </>
  )
}
export async function getStaticProps(){
  let data = [];
  let dataPartner = [];

  await axios.get(`${BASE_URL}/posts/landing-page`).then((response) => {
    dataPartner = response.data;
  });

   await axios.get(`${BASE_URL}/posts/about-us`).then((response) => {
    data = response.data;
  });
 
  return{
    props:{
      data,
      dataPartner
    }
  }
}