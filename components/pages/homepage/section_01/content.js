import classes from './section_01.module.css';
import styles from '../../../global/layout/layout.module.css';
import Link from 'next/link';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Modalmenu from '../../../global/menu/containers/Modal';

function Textgrid(){
    useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            once: true,
            anchorPlacement: ' top-bottom' });
     }, []);

    return(
    <div className={classes.content}>
            <div data-aos="fade-up" className={classes.heading0}>
            <h4>A creative full-service</h4>
            </div>
            <div data-aos="fade-up" className={classes.heading1} >
            <h1>DIGITAL AGENCY</h1>
            </div>
            <div data-aos="fade-up" className={classes.heading2}>
            <h3>Specializing in web design & development, application design & development, and digital marketing.</h3>   
            </div>
        <div className={classes.buttonContainer}>     
<Modalmenu buttonText={"Let's work together"} className={styles.btndesign2}/><Link href='/services'>
            <button type="button" className={classes.learnMore}>Learn More</button>                             
        </Link>
      </div>
        
    </div>
    );
}

export default Textgrid;
