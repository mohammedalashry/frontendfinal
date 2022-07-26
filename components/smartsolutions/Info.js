import styles from "../../styles/smartsolutions/Info.module.css";
import Image  from "next/image";
export default function Info({data}) {
  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className={` ${styles.containerSectionOne}`}>
          <img
            className={styles.imgSectionOne}
            src={data[0]?.image[0].url}
            
            alt={data[0]?.title}
          />
        </div>

        <div className={styles.textSectionOne}>
          <p className={styles.title}>{data[0]?.title}</p>
          <div className={styles.description}>
           <p>{data[0]?.description}</p>
          </div>
        </div>
        <div className={styles.container_bee}>
       <h2>{data[1]?.title}</h2>
       <p className={styles.desc}>{data[1]?.description}</p>
    </div>
      </div>
    </>
  );
}
