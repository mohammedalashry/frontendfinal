import Link from "next/link";
import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image'

export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light h-100">
            <div className="container-fluid h-100">
              <div className="col-6 col-md-4 h-100">
                <Link href="/">
                    <a className="navbar-brand">
                    <img
                        className={styles.logo}
                        src="/logo.png"
                    />
                        {/* <Image src="/logo.png" alt="velocity Logo" width={200} height={50} /> */}
                    </a>
                </Link>
              </div>

              <button
                className={`navbar-toggler ${styles.btnToggle}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`col-6 col-md-8 h-100 ${styles.colLinks}`}>
                <div  className={`${isNavCollapsed ? "collapse" : ""}  h-100 navbar-collapse`} id="navbarText">
                  <ul className="navbar-nav h-100">
                    <li className={`nav-item ${styles.sub_hover}`}>
                      <div className={styles.dropdown}>
                        <Link href="/smartsolutions">
                              <a
                                className={`nav-link ${styles.links} `}
                                aria-current="page"
                              >
                                SMART SOLUTIONS
                              </a>
                        </Link>
                        <div className={`${styles.sub_nav}`}>
                 <p className={styles.sub_desc}>
                 Control your environment, montior your energy<br/>
                  consumption and connect to your community  
                 </p>  
                 <ul className={styles.list}>
                  
                  <li><Link href="/visitormanagementsystems">Visitor Manage System</Link></li>
                  <li><Link href="/intercom">Intercom</Link></li>
                   <li><Link href="/smartconnect">Smart Connect</Link></li>
                   <li><Link href="/support">Support</Link></li>
                 </ul>  
        </div>
                        <div className={styles.dropdownContent}>
                          <Link href="/visitormanagementsystems">Visitor Manage System</Link>
                          <Link href="/intercom">Intercom</Link>
                          <Link href="/smartconnect">Smart Connect</Link>
                          <Link href="/support">Support</Link>

                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                     <Link href="/projects">
                        <a className={`nav-link ${styles.links} `}>
                            PROJECTS
                        </a>
                     </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">
                        <a className={`nav-link ${styles.links} `}>
                            ABOUT
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">
                        <a className={`nav-link ${styles.links} `}>
                            CONTACT
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/requestdemo">
                      <a className={` ${styles.button} `}>
                          REQUEST DEMO
                      </a>
                      </Link>
                    </li>
                  </ul>
                </div>
             
              </div>
            </div>
          </nav>
        </div>
 
      </div>
  
    </>
  );
}
