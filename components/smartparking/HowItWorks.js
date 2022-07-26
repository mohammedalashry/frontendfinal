import styles from "../../styles/intercom/WhoIsThere.module.css";
import Link from "next/link";
import Image from "next/image";
export default function HowItWorks({data}) {
  return (
    <>
      <div className={`container-fluid mb-5 pb-5 ${styles.container} ${styles.containerHelp}`}>
        <div className="row justify-content-evenly">
          <div className="col-12 col-lg-5 col-md-9 col-sm-9 m-auto">
            <div className={styles.containerImages}>
              <Image alt={data.title} className={styles.img} src={data.image[0].url} layout='fill'  />
            </div>
          </div>
          <div className="col-12 col-lg-5 col-md-9 col-sm-9 m-auto">
            <div className={styles.div}>
              <h3 className={styles.title}>{data.title}</h3>
              <p className={styles.description}>
               {data.description}
              </p>
             
              <Link href="/requestdemo">
              <a className={styles.button}>REQUEST DEMO</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
