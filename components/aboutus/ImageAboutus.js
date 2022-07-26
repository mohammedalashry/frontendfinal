import styles from "../../styles/about/Image.module.css";
import Image from "next/image";
export default function ImageAboutus({data}) {
  let filterPosition =data.filter((db)=> db.position == 2);

  return (
    <>
    <div className={`container-fluid ${styles.container}`}>
      <div className={` ${styles.containerImage}`}>
        <Image
          className={styles.img}
          src={filterPosition[0]?.image[0].url}
          width={filterPosition[0]?.image[0].width}
          height={filterPosition[0]?.image[0].height}
          alt="Card image cap"
        />
      </div>
    </div>
  </>
  )
}
