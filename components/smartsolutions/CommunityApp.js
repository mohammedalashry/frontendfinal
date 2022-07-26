import Link from "next/link";
import styles from "../../styles/smartsolutions/CommunityApp.module.css";

export default function CommunityApp({data}) {
  return (
    <>
      <div className={`container-fluid  ${styles.container}`}>
        <div className="row m-auto">
          <div
            className={`offset-2  col-8 col-sm-7 offset-md-3 col-md-5  ${styles.containerText}`}
          >
            <p className={styles.title}>COMMUNITY APP</p>
            <p className={styles.subTitle}>{data.title}</p>
            <p className={styles.description}>
              {data.description}
            </p>
            <Link href="/requestdemo">
            <a className={styles.button}>REQUEST DEMO</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
