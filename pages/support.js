import Info from "../components/support/Info";
import NeedHelp from "../components/support/NeedHelp";
import {BASE_URL} from "../variable";

import axios from "axios"
export default function Support({data}) {
  return (
    <>
      <Info data={data[0]}/>
      <NeedHelp data={data[1]}/>  
    </>
  );
}
export async function getStaticProps(){
  let data = [];
  await axios.get(`${BASE_URL}/posts/support`).then((res)=>{
     data = res.data;
  });
  
  return{
     props:{
       data
     }
  }
}