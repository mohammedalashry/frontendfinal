import Connect from "../components/smartconnect/Connect";
import StayConnected from "../components/smartconnect/StayConnected";
import {BASE_URL} from "../variable";
import axios from "axios";
export default function Smartconnect({data}) {
  return (
    <>
    <Connect data={data[0]} />
    <StayConnected data={data[1]}/>
    </>
  )
}
export async function getStaticProps(){
  let data = [];
   await axios.get(`${BASE_URL}/posts/smart-connect`).then((res)=>{
      data = res.data;
   });
  return{
     props:{
       data
     }
  }
}