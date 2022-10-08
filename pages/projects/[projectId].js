import axios from "axios";
import styles from "../../styles/projects/Project.module.css";
import Image from "next/image";
import {BASE_URL} from "../../variable";

export default function Project({gallary}) {
  return (
    <> 
      <div className="container">
        <div className={`row ${styles.wrapContainer}`}>
          <div className={`col-10 col-sm-12 col-md-6 ${styles.wrapImg}`}>
            <Image
              className={styles.img}
              src={gallary?.image?.url}
              width={gallary?.image?.width}
              height={gallary?.image?.height}

              alt="Card image cap"
            />
          </div>
          <div className="col-10 col-sm-12 col-md-5">
            <div className={styles.title}>{gallary.title}</div>
            <div className={styles.subTitle}>{gallary?.category["name"]}</div>
            <div className={styles.description}>
              {gallary.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({params}){
   let gallary = [];
   await axios.get(`${BASE_URL}/projects/${params.projectId}`).then((res)=>{
       gallary = res.data;  
   });
 return{
    props:{
       gallary
    }
 } 
}