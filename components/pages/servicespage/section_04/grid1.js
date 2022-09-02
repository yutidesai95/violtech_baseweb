import styles from '../../../global/layout/layout.module.css'
import classes from '../service.module.css';
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
                <h2 data-aos="fade-up">ORGANIC OUTREACH AND<br />STRATEGIC CAMPAIGNS</h2>         
        </div>
        <div data-aos="fade-up" className={styles.supportingtextsection}>
                <h3>We use storytelling to create a deeper connection with our audience.</h3>
        </div>
        <div className={styles.detailtextsection}>   
                <h6>We brainstorm multi-channel marketing tactics to get you noticed. We leverage the power of imagination and the accuracy of data to revise, amend, and repeat what’s working. And this is how the magic happens.</h6>
        </div>
        <div data-aos="fade-up" className={styles.iconcards}>
            {/* Column1  */}
            <div className={styles.iconcard}>
                <img data-aos="flip-up" className={styles.toolicon} src="/images/mailchimp.png" alt="DeliveryIcon" width="40" height="45" />                      
            </div>

            {/* <!-- Column2 --> */}
            <div className={styles.iconcard}>    
                <img data-aos="flip-up" className={styles.toolicon} src="/images/google-analytics.png" alt="DeliveryIcon" width="40" height="45" />   
            </div>

            {/* <!-- Column3 --> */}
            <div className={styles.iconcard}>                  
                <img data-aos="flip-up" className={styles.toolicon} src="/images/google-adwords.png" alt="DeliveryIcon" width="40" height="45" />                        
            </div>

            {/* <!-- Column4 --> */}
            <div className={styles.iconcard}>
                <img data-aos="flip-up" className={styles.toolicon} src="/images/facebook.png" alt="DeliveryIcon" width="40" height="45" />   
            </div>
        
            {/* <!-- Column5 --> */}
            <div className={styles.iconcard}>
                <img data-aos="flip-up" className={styles.toolicon} src="/images/mail.webp" alt="DeliveryIcon" width="40" height="45" />   
            </div>

            {/* <!-- Column6 --> */}
            <div className={styles.iconcard}>
                <img data-aos="flip-up" className={styles.toolicon} src="/images/funnel.webp" alt="DeliveryIcon" width="40" height="45" />   
            </div>
         </div>
    </div>
    );
    }
    
export default Textgrid;



