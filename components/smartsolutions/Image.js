import styles from "../../styles/about/Image.module.css";
import Image from "next/image";
export default function ImageWrapper({data}) {
  return (
    <>
    <div className={`container-fluid ${styles.container}`}>
      <div className={` ${styles.containerImage}`}>
        <Image
          className={styles.img}
          src={data?.image[0].url}
          width={data?.image[0].width}
          height={data?.image[0].height}
          alt="Card image cap"
        />
      </div>
    </div>
  </>
  )
}
