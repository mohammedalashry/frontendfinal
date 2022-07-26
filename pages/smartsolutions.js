
import Cards from "../components/smartsolutions/Cards";
import CommunityApp from "../components/smartsolutions/CommunityApp";
import ImageWrapper from "../components/smartsolutions/Image";
import Info from "../components/smartsolutions/Info";
import ResidentialSolutions from "../components/smartsolutions/ResidentialSolutions";
import BeeHiveIcons from "../components/smartsolutions/BeeHiveIcons";
import axios from "axios";
export default function SmartSolutions({data}) {
  return (
    <>
        {/* <Navbar /> */}
        <Info data={data} />
        <BeeHiveIcons data={data}/>
        <ImageWrapper  data={data[1]}/>
        <CommunityApp data={data[2]} />
        <Cards data={data}/>
        <ResidentialSolutions data={data[6]}/>
        {/* <Footer /> */}
    </>
  )
}
export async function getStaticProps(){
  let data = [];
  await axios.get("https://advanced-velocity.herokuapp.com/posts/smart-solutions").then((res)=>{
    data = res.data;
  });
  return {
     props:{
       data
     }
  }
}