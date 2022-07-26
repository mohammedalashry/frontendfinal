import Link from "next/link";
import styles from "../../styles/smartsolutions/ResidentialSolutions.module.css";
import Image from "next/image";
export default function ResidentialSolutions({data}) {
  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className={` ${styles.containerSectionOne}`}>
          <img
            className={styles.imgSectionOne}
            src={data?.image[0].url}
            alt={data.title}
          />
        </div>

        <div className={styles.textSectionOne}>
          <p className={styles.title}>{data.title}</p>
          <div className={styles.description}>
             {data.description}
          </div>
          <Link href="/requestdemo">
          <a className={styles.button}>REQUEST DEMO</a>
          </Link>
        </div>
      </div>
    </>
  );
}
