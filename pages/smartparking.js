import HowItWorks from "../components/smartparking/HowItWorks";
import Parking from "../components/smartparking/Parking";
import axios from "axios";
export default function Smartparking({data}) {
  return (
    <>
    <Parking data={data[0]} />
    <HowItWorks data={data[1]}/>
    </>
  )
}
export async function getStaticProps(){
  let data = [];
   await axios.get("https://advanced-velocity-2022.herokuapp.com/posts/smart-parking").then((res)=>{
      data = res.data;
   });
  return{
     props:{
       data
     }
  }
}