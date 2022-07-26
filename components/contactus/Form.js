import {useState} from "react";
import styles from "../../styles/contactus/Form.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export default function Form({data}) {
  const [firstName,setFirstName] = useState(""); 
  const [lastName,setLastName] = useState(""); 
  const [email,setEmail] = useState(""); 
  const [message,setMessage] = useState(""); 
  const [phoneNumber,setPhoneNumber] = useState(""); 
  const [company,setCompany] = useState(""); 
  const submitRequest = async (e)=>{
    e.preventDefault();
   let requestData = {
     firstName,
     lastName,
     phoneNumber,
     email,
     message,
     company,

   };
   let  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


   if(firstName !== "" && email !== ""&& phoneNumber !== "" && lastName !== ""){
     if(email.match(validRegex)){
   await axios.post("https://advanced-velocity.herokuapp.com/contacts",requestData).then((db)=>{
     setCompany("");
     setFirstName("");
     setLastName("");
     setPhoneNumber("");
     setEmail("");
     setMessage("");
     toast.success("We have recieved your message");

   })
  }else{
    toast.error("Your email address is invalid");
  }
  }else{
    toast.error("Please make sure all fields are filled in correctly");
  }
 }

  return (
    <>
          <ToastContainer />

      <div className={`container-fluid ${styles.container}`}>
        <div className="container">
          <div className={styles.title}>Get in touch with us</div>
          <div className={styles.header}>Please complete the form</div>

          <div className={`row`}>
            <div className={`col-12 col-md-5 m-auto`}>
              <div className={styles.info}>Phone</div>
              <div className={styles.data}>{data.phoneNumber}</div>
            </div>
            <div className="col-12 col-md-4 m-auto">
              <div className={styles.info}>Email</div>
              <div className={styles.data}>{data.email}</div>
            </div>
            <div className="col-12 col-md-3 m-auto">
              <div className={styles.info}>Social Media</div>
              <div className={styles.data}>
                <a href={data.instgram} target="_blank"  rel="noopener noreferrer">
                  <img
                    className={styles.iconSocialMedia}
                    src="/instagram.svg"
                    alt="Card image cap"
                  />
                </a>
                <a href={data.twitter} target="_blank"  rel="noopener noreferrer">
                  <img
                    className={styles.iconSocialMedia}
                    src="/twitter.svg"
                    alt="Card image cap"
                  />
                </a>
                <a href={data.linkedIn} target="_blank"  rel="noopener noreferrer">
                  <img
                    className={styles.iconSocialMedia}
                    style={{ marginRight: "0" }}
                    src="/linkedin.svg"
                    alt="Card image cap"
                  />
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.label}>First Name</div>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} defaultValue={firstName} className={styles.input} name="fname" />
              </div>

              <div className="col-12 col-md-6">
                <div className={styles.label}>Last Name:</div>
                <input type="text" className={styles.input}  defaultValue={lastName} onChange={(e)=>setLastName(e.target.value)} name="lname" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.label}>Email:</div>
                <input type="email"   defaultValue={email}  onChange={(e)=>setEmail(e.target.value)}  className={styles.input} name="email" />
              </div>

              <div className="col-12 col-md-6">
                <div className={styles.label}>Phone Number:</div>
                <input type="text"  defaultValue={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)} className={styles.input} name="phone" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.label}>Company:</div>
                <input type="text"   defaultValue={company} onChange={(e)=>setCompany(e.target.value)} className={styles.input} name="company" />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className={styles.message}>Leave a message:</div>
                <textarea className={styles.textarea} defaultValue={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
              <button type="submit" onClick={(e)=>  submitRequest(e)} className={styles.button}>
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
