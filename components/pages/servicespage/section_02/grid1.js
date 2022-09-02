import classes from '../service.module.css';
import styles from '../../../global/layout/layout.module.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Textgrid(){    
    useEffect(() => {
        Aos.init({
            duration: 500,
            easing: 'linear',
            once: true,
            anchor: "top-center" });
     }, []);

    return(
        <div>
            <div data-aos="fade-up" className={styles.headingsection}>
                    <h2>VISUAL IDENTITY AND<br /> USER EXPERIENCE</h2>                 
            </div>
            <div data-aos="fade-up" className={styles.supportingtextsection}>
                    <h3>With user experience design we support user behavior through usability.</h3>
            </div>
            <div  data-aos="fade-up" className={styles.detailtextsection}>
                    <h6>We design products that deliver meaningful and relevant experiences to users. We try to create distinct visual identity for you. We know that a good visual identity should be scalable and able to grow with your brand.</h6>
            </div>
            <div data-aos="fade-up" className={styles.iconcards}>
                {/* Column1  */}
                <div className={styles.iconcard}>
                    <img data-aos="flip-up" data-aos-delay="50" data-aos-duration="800" data-aos-easing="ease-in-out" className={styles.toolicon} src="/images/designicon1.png" alt="DesignIcon" />                      
                </div>

                {/* <!-- Column2 --> */}
                <div className={styles.iconcard}>       
                    <img data-aos="flip-up" data-aos-delay="50" data-aos-duration="800" data-aos-easing="ease-in-out" className={styles.toolicon} src="/images/designicon2.png"  alt="DesignIcon" />   
                </div>

                {/* <!-- Column3 --> */}
                <div className={styles.iconcard}>
                    <img data-aos="flip-up" data-aos-delay="50" data-aos-duration="800" data-aos-easing="ease-in-out" className={styles.toolicon} src="/images/designicon3.png"  alt="DesignIcon" />                        
                </div>

                {/* <!-- Column4 --> */}
                <div className={styles.iconcard}>
                    <img data-aos="flip-up" data-aos-delay="50" data-aos-duration="800" data-aos-easing="ease-in-out" className={styles.toolicon} src="/images/designicon4.png"  alt="DesignIcon" />   
                </div>
            
                {/* <!-- Column5 --> */}
                <div className={styles.iconcard}>
                    <img data-aos="flip-up" data-aos-delay="50" data-aos-duration="800" data-aos-easing="ease-in-out" className={styles.toolicon} src="/images/designicon5.png"  alt="DesignIcon" width="40" height="45" />   
                </div>

                {/* <!-- Column6 --> */}
                <div className={styles.iconcard}>
                    <img data-aos="flip-up" data-aos-delay="50" data-aos-duration="800" data-aos-easing="ease-in-out" className={styles.toolicon} src="/images/designicon6.png"  alt="DesignIcon" width="40" height="45" />   
                </div>
             </div>
        </div>
    );
    }
    
export default Textgrid;