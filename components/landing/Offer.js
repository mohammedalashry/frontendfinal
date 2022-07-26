import styles from "../../styles/landing/Offer.module.css";
import BtnLearnMore from "./BtnLearnMore";
import Image from "next/image";
export default function Offer({data}) {
  let filterPosition =data.filter((db)=> db.position == 5);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row mt-3 m-auto ">
          <div className="col-12 offset-md-1 col-md-5">
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
          <div className="col-12 offset-md-1 col-md-5 p-0">
            <Image alt={filterPosition[0].title} className={styles.img} src={filterPosition[0]?.image[0].url} width={filterPosition[0]?.image[0].width} height={filterPosition[0]?.image[0].height} />
          </div>
        </div>
      </div>
    </>
  );
}
