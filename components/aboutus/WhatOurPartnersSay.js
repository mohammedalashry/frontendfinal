import styles from "../../styles/about/WhatOurPartnersSay.module.css";

export default function WhatOurPartnersSay({data}) {
  let filterPosition =data.filter((db)=> db.position == 4);
console.log(filterPosition)
  return (
    <>
      <div className={`container-fluid  ${styles.container}`}>
        <p className={styles.header}>What our partners say</p>
        {filterPosition.map((db,i)=>{
          let title = db["description"].split("^");
          let description = title[0];
          let sliceDecs = title.slice(1);
        return(
        <div className={styles.wrapper} key={db.id}>
        <blockquote className={styles.blockquote}>
            {title[0]}
        </blockquote>
        {sliceDecs.map((db)=>
        <cite className={styles.cite} key={i}>{db}</cite> 
        )} 
        </div>
        
        
        )})}
      </div>
    </>
  );
}
