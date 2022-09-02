import classes from '../service.module.css';
import styles from '../../../global/layout/layout.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Fragment, useEffect } from 'react';

function Imagegrid(){
    useEffect(() => {
        Aos.init({ 
            duration: 500,
            easing: 'linear',
            once: true,
            anchor: "top-center" });
     }, []);

    return(
    <Fragment>
        <div data-aos="fade-up" className={styles.imagebox + ' ' + classes.imagebox}>
                <img src="/images/service_design.png" alt="designsvg" />
            </div>
    </Fragment>
    );
    }
    
export default Imagegrid;