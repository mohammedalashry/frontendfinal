import Info from "../components/intercom/Info";
import {BASE_URL} from "../variable";
import WhoIsThere from "../components/intercom/WhoIsThere";
import axios from "axios";
export default function Intercom({data}) {
  return (
    <>
        <Info data={data[0]} />
        <WhoIsThere data={data[1]}/>
    </>
  )
}
export async function getStaticProps(){
   let data = [];
   await axios.get(`${BASE_URL}/posts/intercom`).then((res)=>{
        data = res.data
   });
  return{
    props:{
       data
    }
  }
}
