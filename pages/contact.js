import Form from "../components/contactus/Form";
import Map from "../components/contactus/Map";
import {BASE_URL} from "../variable";

import axios from "axios"
export default function Contact({data}) {
  return (
    <>
      <Form data={data} />
      <Map />
    </>
  );
}
export async function getStaticProps(){
   let data = [];
   await axios.get(`${BASE_URL}/social-media`).then((res)=>{
       data = res.data;
   });

return {
  props:{
    data
  }
}
}