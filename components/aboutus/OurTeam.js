import styles from "../../styles/about/OurTeam.module.css";

export default function OurTeam() {

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
          <p className={styles.header}>OUR TEAM</p>
          <p className={styles.description}>
            Meet the talent behind our success
          </p>
        </div>
    </>
  );
}
