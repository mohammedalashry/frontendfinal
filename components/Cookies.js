import Link from "next/link";
import styles from "../styles/Cookies.module.css";

export default function Cookies() {
  return (
    <>
      <div className={`container-fluid ${styles.bg}`}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className={styles.div}>
                We use cookies to enhance your experience. By continuing to
                visit this site you agree to our use of cookies.
                <Link href="/">
                  <a className={styles.link} aria-current="page">
                    More info
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className={styles.button}>ACCEPT COOKIES</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
