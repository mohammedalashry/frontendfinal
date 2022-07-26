import styles from "../../styles/about/OurStory.module.css";

export default function OurStory({data}) {
  let filterPosition =data.filter((db)=> db.position == 2);

  const newInfo = filterPosition[0]?.description.split(".");

  return (
    <>
      <div className={`${styles.container}`}>
        <p className={styles.header}>{filterPosition[0]?.title}</p>
        <p className={styles.description}>
         {newInfo.map((db,i)=>(
          <p key={i}>
            {db}
          </p>
        ))}
        {/* <p className={styles.centerDescription}>
        
          </p>
          <p className={styles.centerDescription}>
           
          </p> */}
          {/* <p>Interested in collaborating with us? Request a demo</p> */}
        </p>
      </div>
    </>
  );
}
