import styles from "../../styles/landing/Para.module.css";
export default function Para({data}) {
  return (
    <>
      <div className={`container-fluid bg-light ${styles.container}`}>
        <div className="row">
          <div className="col-10 col-md-8 m-auto">
            <div className={styles.para}>
               {data.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}