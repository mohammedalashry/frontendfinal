import HowItWorks from "../components/smartparking/HowItWorks";
import Parking from "../components/smartparking/Parking";
import axios from "axios";
import {BASE_URL} from "../variable";

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
   await axios.get(`${BASE_URL}/posts/smart-parking`).then((res)=>{
      data = res.data;
   });
  return{
     props:{
       data
     }
  }
}