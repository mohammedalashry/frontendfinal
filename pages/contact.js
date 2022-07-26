import Form from "../components/contactus/Form";
import Map from "../components/contactus/Map";
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
   await axios.get("https://advanced-velocity.herokuapp.com/social-media").then((res)=>{
       data = res.data;
   });

return {
  props:{
    data
  }
}
}