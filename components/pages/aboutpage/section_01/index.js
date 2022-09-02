import classes from './sectionone.module.css';
import styles from '../../../global/layout/layout.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function SectionOne(){

    useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            once: true,
            anchorPlacement: ' top-bottom' });
     }, []);

return(

<div className={styles.container + ' ' + styles.full_height_container} id={classes["container"]}>
<div className={styles.container_section1}>
    <div data-aos="fade-up" className={styles.mainheading}>
                <h4>Agency that is here to listen to you</h4>
                <h1>Hi! 
                <img data-aos="fade-up" className={classes.hitag} src="/images/hi.png" alt="Wave"/></h1>
                <h1>We’re Viol.
                    
                </h1>
    </div>   
    <div data-aos="fade-up" className={classes.aboutimage}> 
            <img src="/images/about.png" alt="about" />    
    </div>   
                   
</div>
<div className={styles.container_section3}>
    <div data-aos="fade-up" className={styles.supportingtext}>
    <h3>We're a global digital agency.
<br />We provide agile and attractive digital solutions universally <br />over all platforms.</h3>
                       
    </div>
   
   
</div>

</div>
);
}

export default SectionOne;
