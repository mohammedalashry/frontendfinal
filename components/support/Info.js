import styles from "../../styles/intercom/Info.module.css";
import Image from "next/image";
export default function Info({data}) {
  return (
    <>
      <div className={`container-fluid ${styles.container} ${styles.containerHelp}`}>
        <div className={` ${styles.containerSectionOne}`}>
          <img
            className={styles.imgSectionOne}
            src={data.image[0].url}
           
            alt="Card image cap"
          />
        </div>

        <div className={styles.textSectionOne}>
          <h2 className={styles.title}>{data.title}</h2>
          <div className={styles.description}>
            <p>
               {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
