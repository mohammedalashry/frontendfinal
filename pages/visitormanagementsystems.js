import Info from '../components/visitorManagementSystems/Info'
import SendAVisitorAnInvite from '../components/visitorManagementSystems/SendAVisitorAnInvite'
import axios from "axios";
export default function index({data}) {
  return (
    <>
    <Info data={data[0]} />
    <SendAVisitorAnInvite data={data[1]} />
    </>
  )
}

export async function getStaticProps(){
  let data = [];
  await axios.get("https://advanced-velocity-2022.herokuapp.com/posts/visitor-management-system").then((res)=>{
     data = res.data;
  });
  return {
     props:{
       data
     }
  }
}