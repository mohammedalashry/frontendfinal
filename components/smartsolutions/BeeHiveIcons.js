import { useState } from "react";
import styles from "../../styles/BeeHive.module.css";
import { FaRobot,FaKey,FaHandHoldingWater,FaWarehouse,FaSlideshare,FaUsers,FaConciergeBell,FaCalendarPlus,FaHandsWash,FaFan,FaMapSigns} from "react-icons/fa";
import { MdPower,MdLightbulb } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";
import { RiRoadMapFill } from "react-icons/ri";

export default function BeeHiveIcons(){
  const [show,setShow] = useState(false);
  const [show2,setShow2] = useState(false);

return ( 
<div className={styles.container}>
  <div className={`${styles.item} ${styles.community_5}`} style={{display:show? "block":"none"}}><div className={`${styles.hexagon}`}>
  <p className={`${styles.robot} ${styles.orange_4}`}><FaConciergeBell/></p>
  <p className={styles.robot_text}>Concierge</p>   
  </div></div>
  <div className={`${styles.item} ${styles.community_5}`}  style={{display:show? "block":"none"}}><div className={`${styles.hexagon}`}>
  <p className={`${styles.robot} ${styles.orange_4}`}><FaUsers/></p>
  <p className={styles.robot_text}>Visitors</p>    
  </div></div>
  <div className={`${styles.item} ${styles.community_5}`}  style={{display:show? "block":"none"}}><div className={`${styles.hexagon}`}>
  <p className={`${styles.robot} ${styles.orange_4}`}><FaSlideshare/></p>
  <p className={styles.robot_text}>Book Room</p>  
  </div></div>
  <div className={`${styles.item} ${styles.management_4}`} style={{display:show2? "block":"none"}}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_3}`}><FaMapSigns/></p>
  <p className={styles.robot_text}>Way Finding</p>  
  </div></div>
  <div className={`${styles.item} ${styles.management_4}`} style={{display:show2? "block":"none"}}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_3}`}><FaHandsWash/></p>
  <p className={styles.robot_text}>Cleaning & Maintenance</p>    
  </div></div>
  <div className={`${styles.item} ${styles.community_5}`} style={{display:show? "block":"none"}}><div className={`${styles.hexagon}`}>
  <p className={`${styles.robot} ${styles.orange_4}`}><FaCalendarPlus/></p>
  <p className={styles.robot_text}>Events & Offers</p>  
  </div></div>
  <div className={`${styles.item}  ${styles.community_container}`}
    onMouseOver={() =>{setShow(true)}}
      onMouseOut={() =>{setTimeout(()=> setShow(false),1500)}}
  >  
    <div className={`${styles.hexagon}`}>
  <p className={`${styles.bg_wrapper} ${styles.compunity}`}></p>
     <p className={`${styles.community_desc}`}>Community</p>  
  </div>
  </div>
  <div className={`${styles.item} ${styles.management_container}`}  
      onMouseOver={() =>{setShow2(true);}}
      onMouseOut={() =>{setTimeout(()=> setShow2(false),1500)}}

   ><div className={styles.hexagon}>
  <p className={`${styles.bg_wrapper} ${styles.management}`}></p>
  <p className={`${styles.community_desc}`}>Facility Management</p>  
  </div></div>
  <div className={`${styles.item} ${styles.management_4}`}  style={{display:show2? "block":"none"}}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_3}`}><RiRoadMapFill/></p>
  <p className={styles.robot_text}>Assert Tracting</p>  
  </div></div>
  <div className={`${styles.item} ${styles.hidden}`}><div className={`${styles.hexagon}`}>
  <p className={`${styles.robot} ${styles.orange_4}`}><FaCalendarPlus/></p>
  <p className={styles.robot_text}>Events & Offers</p>  
  </div></div>
  <div  className={`${styles.item} ${styles.machine_container}`}><div className={styles.hexagon}>
  <p className={`${styles.bg_wrapper} ${styles.machine}`}></p>
  <p className={`${styles.ai_desc}`}>AI & Machine Learning</p>  
  </div></div>
  <div className={styles.item}><div className={styles.hexagon}>
   <img className={styles.main_logo} src="/logo-removebg.png" />
   <p className={styles.main_desc}>OUR<br/> ECOSYSTEM</p>
  </div></div>
  <div className={`${styles.item} ${styles.automate_container}`}><div className={styles.hexagon}>
  <p className={`${styles.automate_desc}`}>Automate</p>    
  <p className={`${styles.bg_wrapper} ${styles.automate}`}></p>
  </div>
  </div>
  <div className={`${styles.item} ${styles.management_4}`}  style={{display:show2? "block":"none"}}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_3}`}><BsTextarea/></p>
  <p className={styles.robot_text}>Space Maximization</p>    
  </div></div>
  <div className={`${styles.item} ${styles.ai_2}`}><div className={styles.hexagon}>
    <p className={styles.robot}><FaRobot/></p>
    <p className={styles.robot_text}>AI Machine Learning</p>
    </div></div>
  <div className={`${styles.item} ${styles.security_container}`}><div className={styles.hexagon}>
  <p className={`${styles.bg_wrapper} ${styles.security}`}></p>
  <p className={styles.icon_desc}>Security</p>    
  </div></div>
  
  <div className={`${styles.item} ${styles.monitor_container}`}><div className={styles.hexagon}>
  <p className={`${styles.bg_wrapper} ${styles.monitor}`}></p>
  <p className={styles.icon_desc}>Monitor</p>      
  </div></div>
  
  <div className={`${styles.item} ${styles.automate_4}`}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_2}`}><MdLightbulb/></p>
  <p className={styles.robot_text}>Lights</p>  
  </div></div>
  <div className={`${styles.item} ${styles.ai_2}`}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.api}`}>API</p>
    <p className={styles.robot_text}>
    Application Programming Interface  
    </p>  
  </div></div>
  <div className={`${styles.item} ${styles.security_1}`}><div className={styles.hexagon}>
    
  <p className={`${styles.robot} ${styles.gray}`}><FaKey/></p>
    <p className={styles.robot_text}>Access Control</p>
  </div></div>
  
  <div className={`${styles.item} ${styles.monitor_1}`}>
    
 <div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_1}`}><MdPower/></p>
    <p className={styles.robot_text}>power & energy</p>
  </div></div>
  <div className={`${styles.item} ${styles.automate_4}`}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_2}`}><FaHandHoldingWater/></p>
  <p className={styles.robot_text}>Water</p>    
  </div></div>
  <div className={`${styles.item} ${styles.automate_4}`}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_2}`}><FaWarehouse/></p>
  <p className={styles.robot_text}>Shades</p>    
  </div></div>
  <div className={`${styles.item} ${styles.hidden}`}><div className={styles.hexagon}></div></div>
  <div className={`${styles.item} ${styles.hidden}`}><div className={styles.hexagon}></div></div>
  <div className={`${styles.item} ${styles.hidden}`}><div className={styles.hexagon}></div></div>
  <div className={`${styles.item} ${styles.automate_4}`}><div className={styles.hexagon}>
  <p className={`${styles.robot} ${styles.orange_2}`}><FaFan/></p>
  <p className={styles.robot_text}>HVAC</p>  
  </div></div>
<ul className={styles.honeycomb}>
  <li className={styles.honeycomb_cell}>
    <img className={styles.honeycomb_cell__image} src="/pexels-pixabay-280221.jpg"/>
    <div className={styles.honeycomb_cell__title}>Community</div>
  </li>
  <li className={styles.honeycomb_cell}>
    <img className={styles.honeycomb_cell__image} src="/pexels-photomix-company-96612.jpg"/>
    <div className={styles.honeycomb_cell__title}>Security</div>
  </li>  <li className={styles.honeycomb_cell}>
    <img className={styles.honeycomb_cell__image} src="/pexels-photo-4276114.jpeg"/>
    <div className={styles.honeycomb_cell__title}>Automate</div>
  </li> 
    <li className={styles.honeycomb_cell}>
    <img className={styles.honeycomb_cell__image} src="/pexels-pixabay-416405.jpg"/>
    <div className={styles.honeycomb_cell__title}>Facility Management</div>
  </li>  <li className={styles.honeycomb_cell}>
    <img className={styles.honeycomb_cell__image} src="/pexels-alex-knight-2599244.jpg"/>
    <div className={styles.honeycomb_cell__title}>Ai & Machine Learning</div>
  </li>
  <li className={styles.honeycomb_cell}>
    <img className={styles.honeycomb_cell__image} src="/pexels-wilson-vitorino-2177473.jpg"/>
    <div className={styles.honeycomb_cell__title}>Monitor</div>
  </li>
  <li className={`${styles.honeycomb_cell} ${styles.honeycomb__placeholder}`}></li>
</ul>


</div>
  )
}
