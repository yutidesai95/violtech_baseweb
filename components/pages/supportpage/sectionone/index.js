import classes from './sectionone.module.css';
import styles from '../../../global/layout/layout.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Modalmenu from '../../../global/menu/containers/Modal';

function SectionOne() {
     useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            once: true,
            anchorPlacement: ' top-bottom' });
     }, []);

    return (

<div className={styles.container
     + ' ' + styles.full_height_container
     } id={classes["container"]}>
    <div className={styles.container_section1}>
        <div data-aos="fade-up" className={styles.mainheading}>
            <h4>For the meaningful change</h4>
            <h1>Ready to innovate?</h1> 
        </div>    
        <div data-aos="fade-up" className={classes.supportimage}>           
             <img src="/images/support.png" alt="support" />     
         </div> 
                    
    </div>
    <div className={styles.container_section3}>
    <div data-aos="fade-up" className={styles.supportingtext}>
                        <h3>Let us get talking.</h3>
                       
    </div>
        <div className={classes.buttonbox}>
                    <Modalmenu buttonText={"Contact us"} className={styles.btndesign}/>
        </div>  
    </div>
</div>
    )
  }
  
  export default SectionOne;