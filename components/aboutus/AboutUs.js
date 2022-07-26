import styles from "../../styles/about/AboutUs.module.css";
import Image from "next/image"
export default function AboutUs({data}) {
  let filterPosition =data.filter((db)=> db.position == 1);

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className={` ${styles.containerSectionOne}`}>
          <img
            className={styles.imgSectionOne}
            src={filterPosition[0].image[0].url}
           
            alt={filterPosition[0].title}
          />
        </div>

        <div className={styles.textSectionOne}>
          <p className={styles.title}>{filterPosition[0].title}</p>
          <div className={styles.description}>
           {filterPosition[0].description}
          </div>
        </div>
      </div>
    </>
  );
}
