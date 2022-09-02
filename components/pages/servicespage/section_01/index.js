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
                <div data-aos="fade-up" className={classes.mainheading}>
                    <h4>Your digital needs in only three parts</h4>
                    <h1>Design, Development,<br />& Delivery</h1>
                </div>               
        </div>
        <div className={styles.container_section3}>
                <div data-aos="fade-up" className={styles.supportingtext}>
                    <h3>We know you are busy creating something worthy of attention. Well, we are here to draw the attention by making your business digitally available.</h3>
                </div>
        </div>
    </div>
);
}

export default SectionOne;