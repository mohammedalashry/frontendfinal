import styles from "../../styles/landing/MonitorEnergy.module.css";
import { useRouter } from "next/router";

export default function BtnLearnMore() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <>
      <button onClick={handleClick} className={styles.button}>
        LEARN MORE
      </button>
    </>
  );
}
