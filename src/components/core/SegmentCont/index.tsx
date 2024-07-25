import React from 'react';
import dynamic from "next/dynamic";
import Container from 'react-bootstrap/esm/Container';
//import styles from './Login.module.scss';
import Image from "next/image";
import styles from './SegmentCont.module.scss';
import Link from 'next/link';
import {logins} from './constant';
// import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
// import Footer from "@components/core/Footer";
import logo from './logo.png';

//import login from '@app/locale/auth/login';




const SegmentCont=()=>{
    return(
    
   <div >
      <section className={styles.segment}>
        <h1 className={styles.segmentHeading}>Why Choose LISKart?</h1>
        
        <div className={styles.segmentContent}>
         {/* <div key={login.id}>
            <Image src={login.image} alt={login.title}/>
            <h3>{login.title}</h3>
            <p>{login.description}</p>
         </div> */}

         {logins.map((item) => (
              <div key={item.id} className={styles.segmentItem}>
               <b><h1>{item.title}</h1> </b>
              <p>{item.description}</p>
              </div>
             
            ))}
           
        </div>
       
      </section>
      
    </div>
     
    );
};

export default SegmentCont;
//export { getToken, login } from "@services/login/apiDefs";

{/* <Image src={item.image} alt={item.title} width={100} height={100} /> */}