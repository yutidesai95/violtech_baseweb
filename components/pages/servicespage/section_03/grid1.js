import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import classes from '../service.module.css';
import styles from '../../../global/layout/layout.module.css'

function Imagegrid(){

    useEffect(() => {
        Aos.init({ 
            duration: 500,
            easing: 'linear',
            once: true,
            anchor: "top-center" });
     }, []);

    return(
       <div data-aos="fade-up" className={styles.imagebox + ' ' + classes.imagebox}>
                <img src="/images/service_developement.png" alt="developsvg" />
        </div>
    );
    }
    
export default Imagegrid;