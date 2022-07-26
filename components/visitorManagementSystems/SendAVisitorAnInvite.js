import styles from "../../styles/visitorManagementSystems/SendAVisitorAnInvite.module.css";
import Link from "next/link";
import Image from "next/image";
export default function SendAVisitorAnInvite({data}) {

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
               <div className={styles.image_container}>  
                 <Image alt={data.title} src={data?.image[0].url} width={data?.image[0].width} height={data?.image[0].height}/>
               </div>
               <div className={styles.desc_container}>
                  <h3 className={styles.title}>{data.title}</h3>
                 
                  <p className={styles.description}>{data.description}</p>
                 <Link href="/requestdemo">
                  <a className={styles.button}>REQUEST DEMO</a>
                  </Link>
               </div>
             
           
      </div>
    </>
  );
}
