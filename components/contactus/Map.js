import styles from "../../styles/contactus/Map.module.css";


export default function Map() {



  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
       
          <iframe className={styles.google_map} src="https://maps.google.com/maps?q=23.8859,45.0792&z=10&output=embed" height="450" width="600"></iframe>
      </div>
    </>
  );
}
