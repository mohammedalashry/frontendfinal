import Image from "next/image";
import styles from "../../styles/landing/Video.module.css";


export default function Video({data}) {

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className={` ${styles.containerSectionOne}`}>
          <img
            className={styles.imgSectionOne}
            src={data?.image[0].url}
            alt={data?.image[0].name}
          
          />
        </div>

        <div className={styles.centered}><h1 className={styles.introLabel}>{data.title}</h1></div>
      </div>
    </>
  );
}

