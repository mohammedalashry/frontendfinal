import { useState } from "react";
import styles from "../../styles/projects/Projects.module.css";
import Link from "next/link"; 
import Image from "next/image";
import axios from "axios";
export default function Projects({gallary,categories}) {
	const [data,setData] = useState([]);
	const filterImg = async (filterTag) => {
		  await axios.get("https://advanced-velocity-2022.herokuapp.com/projects?category.name="+filterTag).then((res)=>{
			setData(res.data); 
		  })
	  };
  return (
    <>
     <div className={`container-fluid m-0 p-0 w-100 h-100`}>
     <div className={styles.divContainerTest}>

      <div className={styles.filter}>
		  {categories.map((db,i)=>(
          <a key={i} onClick={()=> filterImg(db.name)}><span className={styles.projects}>{db.name}</span></a>
		  ))}
          <a onClick={()=> filterImg("all")}><span className={styles.projects}>All</span></a>
		  </div>
        <div className={styles.projects__wrapper}>
         

		<div className={styles.grid_container}>

		{(data.length >0? data:gallary).map((db,i)=>(
			<Link href={"/projects/"+db.id} key={db._id} passHref>
  <div className={styles.itemWrapper} key={db._id} style={{height:db.image.height >= 500 ?db.image.height/2:db.image.height}}>
	<div className={styles.imgContainer}>  
    <Image className={`${styles.grid_item} ${styles.grid_item_1}`} layout='fill' src={db.image.url} alt=''/>
    <p className={styles.desc}>{db.description}</p>
	</div>
	<h4 className={styles.title}>{db.title}</h4>
  </div>
 
	
	</Link>
		
    ))}
	

	</div>
		
        </div>
        </div>

      </div>
    </>
  );
}

export async function getStaticProps(){
	let data = [];
	let categories = [];
	await axios.get("https://advanced-velocity-2022.herokuapp.com/projects").then((res)=>{
		data = res.data;
	});
	await axios.get("https://advanced-velocity-2022.herokuapp.com/categories").then((res)=>{
		categories = res.data;
	});
	return {
		props:{
			gallary:data,
			categories
		}
	}
}