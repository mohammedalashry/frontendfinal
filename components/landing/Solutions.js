import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/landing/Solutions.module.css";

export default function Solutions({data}) {
  let filterPosition =data.filter((db)=> db.position == 3);
  let solutionsFilter = filterPosition[0].description.split(",");
  const myStyle = {
    backgroundImage:`url(${filterPosition[0].image[0].url})`,
    height: "140vh",
    // marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle} className={`container-fluid bg-light ${styles.div}`}>
     
        <div className={styles.divText}>
          <p className={styles.title}>{filterPosition[0].title}</p>
          {solutionsFilter.map((db,i)=>(
              <p className={styles.description} key={i}>{db}</p>
          ))}
        
          <Link href="/requestdemo" passHref>
          <a className={styles.button}>REQUEST DEMO</a>
          </Link>
        </div>
      </div>
    
    </>
  );
}
