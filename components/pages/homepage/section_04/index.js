import classes from './section_04.module.css';
import styles from '../../../global/layout/layout.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function SectionFour(){

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
                    <h2>INDUSTRIES WE SERVE</h2>
                </div>
                <div data-aos="fade-up" className={styles.heading2}>
                    <h3>Extending tech capacity.</h3>
                </div>
                <div data-aos="fade-up" className={styles.heading3}>
                    <h6>Viol helps companies become innovation leaders by provding digital services on demand.<br />You run your business. We take care of your technological needs.</h6>
                </div>          
            </div>
        <div data-aos="fade-up" className={classes.slider}>
		
            <div className={classes.slide}>
                <img src="/images/slide1.png" alt="" />
                <div className={classes.slidetext}><h6>Hospitality</h6></div>
            </div>
        
            <div className={classes.slide}>
                <img src="/images/slide2.png" alt="" />
                <div className={classes.slidetext}><h6>Tourism</h6></div>
            </div>
            <div className={classes.slide}>
                <img src="/images/slide6.png" alt="" />
                <div className={classes.slidetext}><h6>Education</h6></div>
            </div>
            {/* <div className={classes.slide}>
                <img src="/images/slide3.png" alt="" />
                <div className={classes.slidetext}><h6>Media/Entertainment</h6></div>
            </div> */}
           
            <div className={classes.slide}>
                <img src="/images/slide5.png" alt="" />
                <div className={classes.slidetext}><h6>Healthcare</h6></div>
            </div>
           
            <div className={classes.slide}>
                <img src="/images/slide3.png" alt="" />
                <div className={classes.slidetext}><h6>Media</h6></div>
            </div>
            <div className={classes.slide}>
                <img src="/images/slide4.png" alt="" />
                <div className={classes.slidetext}><h6>eCommerce</h6></div>
            
            </div>
            <div className={classes.slide}>
                <img src="/images/slide7.png" alt="" />
                <div className={classes.slidetext}><h6>Real Estate</h6></div>
            </div>
            <div className={classes.slide}>
                <img src="/images/slide8.png" alt="" />
                <div className={classes.slidetext}><h6>Manufacturing</h6></div>
            </div>
            
	</div>
</div>
           
         
    );
}

export default SectionFour;

