import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
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
            <div data-aos="fade-up" className={styles.imagebox}>
                <img src="/images/service_delivery.png" alt="deliverysvg" />
            </div>
    );
    }
    
export default Imagegrid;