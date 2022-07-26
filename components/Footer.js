import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import useFetchFooter from "./Hooks/FooterHooks";
export default function Footer() {
  const {data} = useFetchFooter("https://advanced-velocity.herokuapp.com/social-media");
  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 mt-md-4">
              <Image
                src="/logoFooter.png"
                alt="velocity Logo"
                width={125}
                height={30}
              />
              <div className={styles.info} style={{ marginTop: "20px" }}>
               {data.phoneNumber}
              </div>
              <div className={styles.info}>{data.email}</div>
              <div className={styles.address}>Address</div>
              <div className={styles.info}>
                <p>  {data.address}</p>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-12 mt-md-4">
              <div className={styles.divText}>
                <Link href="/visitormanagementsystems" passHref><p>Visitor Management System</p></Link>
                <Link href="/smartparking" passHref><p>Smart Parking</p></Link>
                <Link href="/intercom" passHref><p>Intercom</p></Link>
              </div>
            </div>
            <div className="col-6 col-md-2 col-sm-12 mt-md-4">
              <div className={styles.divText}>
              <Link href="/smartconnect" passHref><p>Smart Connect</p></Link>
              <Link href="/support" passHref><p>Support</p></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="col-6 col-md-5">
                <Link href="/requestdemo"> 
                <a className={styles.button}>REQUEST DEMO</a>
                </Link>
              </div>

              <div className={`col-6 col-md-7  ${styles.colLinks}`}>
                <div className={`navbar-collapse`} id="navbarText">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/smartsolutions">
                        <a
                          className={`nav-link ${styles.links} `}
                          style={{ marginLeft: 0 }}
                          aria-current="page"
                        >
                          SMART SOLUTIONS
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/projects">
                        <a className={`nav-link ${styles.links} `}>PROJECTS</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">
                        <a className={`nav-link ${styles.links} `}>ABOUT</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">
                        <a className={`nav-link ${styles.links} `}>CONTACT</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <hr style={{ height: "3px", color: "#ffffff" }} />

        <div className="container">
          <div
            className="row"
            style={{ paddingBottom: "25px", paddingTop: "13px" }}
          >
            <div className="col-7" style={{ color: "#7F7F7F" }}>
              ©2021 Advanced Velcoity LLC
            </div>
            <div className="col-5 d-flex justify-content-end">
              <a href={data.instgram} target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.iconCard}
                  src="/instagram.svg"
                  alt="Card image cap"
                />
              </a>
              <a href={data.twitter} target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.iconCard}
                  src="/twitter.svg"
                  alt="Card image cap"
                />
              </a>
              <a href={data.linkeIn} target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.iconCard}
                  style={{ marginRight: "0" }}
                  src="/linkedin.svg"
                  alt="Card image cap"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
