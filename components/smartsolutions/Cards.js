import styles from "../../styles/smartsolutions/Cards.module.css";
import { FaRobot,FaKey,FaHandHoldingWater,FaWarehouse,FaSlideshare,FaUsers,FaConciergeBell,FaCalendarPlus,FaHandsWash,FaFan,FaMapSigns} from "react-icons/fa";
import { MdPower,MdLightbulb } from "react-icons/md";
import { RiBarChart2Fill, } from "react-icons/ri";
import { CgController } from "react-icons/cg";


export default function Cards({data}) {
  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-4 col-lg-4  col-xl-3  d-flex justify-content-center">
            <div className={styles.card}>
              <p className={`${styles.iconCard} ${styles.orange}`}>
              <MdLightbulb/>
              </p>
              <div>
                <h5 className={styles.cardTitle}>{data[3]?.title}</h5>
                <p className={styles.cardDescription}>
                  {data[3]?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-4 col-lg-4 col-xl-3 d-flex justify-content-center">
            <div className={styles.card}>
            <p className={`${styles.iconCard} ${styles.orange2}`}>
             <CgController/>
             </p>
              <div>
                <h5 className={styles.cardTitle}>{data[4]?.title}</h5>
                <p className={styles.cardDescription}>
                 {data[4]?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-4 col-lg-4  col-xl-3 d-flex justify-content-center">
            <div className={styles.card}>
            <p className={`${styles.iconCard} ${styles.orange3}`}>
             <RiBarChart2Fill/>
             </p>
              <div>
                <h5 className={styles.cardTitle}>{data[5]?.title}</h5>
                <p className={styles.cardDescription}>
                 {data[5]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
