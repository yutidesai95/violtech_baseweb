import classes from './section_03.module.css';
import styles from '../../../global/layout/layout.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Textgrid(){

    useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            delay: 100,
            once: true, });
     }, []);

    return(

        <div className={styles.container + ' ' + classes.container}>
            <div className={classes.container_section1}>
                <div data-aos="fade-up" className={styles.heading1}>
                    <h2>OUR TURNED KEY WEBSITES</h2>
                </div>
                {/* <div data-aos="fade-up" className={styles.heading2}>
                    <h3>Extending tech capacity.</h3>
                </div>
                <div data-aos="fade-up" className={styles.heading3}>
                    <h6>Viol helps companies become innovation leaders by provding digital services on demand.<br />You run your business. We take care of your technological needs.</h6>
                </div>           */}
            </div>
            <div data-aos="fade-up" className={classes.textContent}>
            <p><span className={classes.textTitle}>Performance:</span> Optimized website performance of every element on your webpage.</p>    
            <p><span className={classes.textTitle}>Security:</span> Advanced security checkpoint at different stages of the development lifecycle.</p>    
            <p><span className={classes.textTitle}>Responsive:</span> Web design for a multi-device audience to deliver the best user experiences.</p>    
            <p><span className={classes.textTitle}>SEO:</span> Extensive implementation of best SEO practices that search engines will love.</p>        
            </div>
     
        </div>
    );
}

export default Textgrid;
