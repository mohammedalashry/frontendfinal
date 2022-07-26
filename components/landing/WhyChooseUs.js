import styles from "../../styles/landing/WhyChooseUs.module.css";
 import Image from "next/image";
export default function WhyChooseUs({data}) {
 let filterPosition =data.filter((db)=> db.position == 4);
 
    const myStyle={
        backgroundImage: 
        "url('/bg shape_why choose us.png')",
        height:'130vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FF5C00',
    };
  return (
      <>
<div className={`container-fluid ${styles.bg}`}>
    
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.title}>
                Why choose us?  
            </div>
            <div className="row d-flex justify-content-center">
                {filterPosition.map((db,i)=>(
                <div className="col-10 col-md-3 col-lg-4 col-sm-12" key={db._id}>
                    <div className={styles.card}>
                        <Image className={styles.iconCard} src={db?.image[0].url}  width={db?.image[0].width} height={db?.image[0].height} alt="Card image cap"/>
                        <div>
                            <h5 className={styles.cardTitle}>{db.title}</h5>
                            <p className={styles.cardDescription}>{db.description}</p>
                        </div>
                    </div>
                </div>
               ))}
            
            </div>

        </div>    
    </div>

    </div>
    </>
  )
}
