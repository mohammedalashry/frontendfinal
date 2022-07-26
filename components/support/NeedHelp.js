import styles from "../../styles/support/NeedHelp.module.css";
import { useRouter } from "next/router";

export default function NeedHelp({data}) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className="row justify-content-evenly">
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div className={` ${styles.containerImages}`}>
              <table className={`table table-borderless ${styles.table}`}>
                <tbody>
                  <tr>
                    <td className={styles.td}>
                      <img className={styles.img2} src={data?.image[0].url} alt={data.title} />
                      <img className={styles.img3} src={data?.image[2].url}  alt={data.title}/>
                    </td>
                    <td className={styles.td}></td>
                  </tr>
                  <tr>
                    <td className={styles.td}>
                      <img className={styles.img1} src={data?.image[1].url} alt={data.title} />
                    </td>
                    <td className={styles.td}>
                      <img className={styles.img4} src={data?.image[3].url} alt={data.title}/>
                    </td>
                  </tr>
                </tbody>

                {/* <tbody>
                  <tr>
                    <td>
                      <img className={styles.img2} src="/image_support 2.png" />
                    </td>
                    <td>
                      <img className={styles.img3} src="/image_support 3.png" />
                    </td>
                    <td>
                      <img className={styles.img1} src="/image_support .png" />
                    </td>
                    <td>
                      <img className={styles.img4} src="/image_support 4.png" />
                    </td>
                  </tr>
                </tbody> */}
              </table>
              {/* <img className={styles.img2} src="/image_support 2.png" />
            <img className={styles.img2} src="/image_support 3.png" />
            <img className={styles.img2} src="/image_support 4.png" />       
            <img className={styles.img1} src="/image_support .png" /> */}
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className={styles.div}>
              <p className={styles.title}>{data.title}</p>
              <p className={styles.description}>
                {data.description}
              </p>
              <button onClick={handleClick} className={styles.button}>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}