import styles from "../../styles/landing/MonitorEnergy.module.css";
import Image from "next/image";
import BtnLearnMore from "./BtnLearnMore";

export default function MonitorEnergy({data}) {
  let filterPosition =data.filter((db)=> db.position == 6);

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className="row mt-5 pb-3 pt-5">
          <div className={`col-12 col-md-5 ${styles.containerImg}`}>
            <Image alt={filterPosition[0].title} className={styles.img} src={filterPosition[0]?.image[0].url} width={filterPosition[0]?.image[0].width} height={filterPosition[0]?.image[0].height} />
          </div>
          <div className="col-12 offset-md-2 col-md-5">
            <div className={styles.div}>
              <p className={styles.title}>
              {filterPosition[0].title}
              </p>
              <div className={styles.description}>
               {filterPosition[0].description}
              </div>
              <BtnLearnMore />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
