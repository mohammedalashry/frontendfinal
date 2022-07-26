import styles from "../../styles/about/Image.module.css";

export default function Image() {
  return (
    <>
    <div className={`container-fluid ${styles.container}`}>
      <div className={` ${styles.containerImage}`}>
        <img
          className={styles.img}
          src="/image_about.png"
          alt="Card image cap"
        />
      </div>
    </div>
  </>
  )
}
