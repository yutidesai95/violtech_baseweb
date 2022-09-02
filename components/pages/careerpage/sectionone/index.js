import classes from './sectionone.module.css';
import styles from '../../../global/layout/layout.module.css';
import Link from 'next/link';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function SectionOne() {

     useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            once: true,
            anchorPlacement: ' top-bottom'});
     }, []);

  return (

<div className={styles.container + ' ' + styles.full_height_container} id={classes["container"]}>
<div className={styles.container_section1}>
    <div data-aos="fade-up" className={styles.mainheading}>
        <h4>In order to modernize</h4>
        <h1>Join something beautiful</h1>
    </div>   
    <div data-aos="fade-up" className={classes.careerimage}> 
                        <img src="/images/career.png" alt="buildingblocks" />   
    </div>   
                   
</div>
<div className={styles.container_section3}>
    <div data-aos="fade-up" className={styles.supportingtext}>

                        <h3>We like to spend our days merging minds.</h3>
                       
    </div>
    <div className={classes.buttonbox}>
                        <Link href='https://in.indeed.com/cmp/Violtech-IT-Solutions-Private-Limited/jobs'>
                            <a className={styles.btndesign}>View Openings</a>
                        </Link>
    </div>
   
</div>

</div>
  )
}

export default SectionOne;