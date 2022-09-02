import classes from './capabilities.module.css';
import styles from '../layout/layout.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Categories(prop){
    console.log(prop);
    useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            delay: 0,
            once: true,
            mirror: false,
            anchorPlacement: ' top-bottom' });
     }, []);
        return(
        <div className={styles.container} id={classes["containerbg"]}>
            <div data-aos="fade-up" className={styles.heading1}>
                    <h2>CAPABILITIES</h2>
            </div> 
            <div data-aos="fade-up" className={styles.heading2}>
                    <h3>Building potential future with innovation and technology.</h3>
            </div> 
            <div data-aos="fade-up" className={styles.heading3}>
            <h6>We are perfectionists, dreamers, adventurers — you’ll be sure your digital platform/product is in good hands.</h6>
            </div>       

                   
            <div className={prop.className ? classes.cardsPlain : classes.cards}>
                {/* Column1  */}
                <div data-aos="zoom-in" className={prop.className ? classes.cardPlain :classes.card}>
                    <div>
                    <div className={classes.column__icon}>
                                <img src="/images/designs.png" alt="Design" width="70" height="70" />
                    </div>
                    <div className={classes.column__heading}>
                        <h4>Design</h4>
                    </div>
                    <div className={classes.column__content}> 
                        <h5>Websites and Mobile Apps </h5>
                        <h5>Brand Identity </h5>
                        <h5>UI/UX Design and Analysis </h5>
                        <h5>Fidelity Prototype and testing </h5>
                    </div>
                    </div>
                </div>

                {/* <!-- Column2 --> */}
                <div data-aos="zoom-in" className={prop.className ? classes.cardPlain :classes.card}>
                    <div>
                    <div className={classes.column__icon}>
                        <img src="/images/developments.png" alt="Development" width="70" height="70" />                 
                    </div>
                    <div className={classes.column__heading}>
                        <h4>Developement</h4>
                    </div>
                    <div className={classes.column__content}> 
                        <h5>Web & Mobile Application Developement </h5>
                        <h5>eCommerce Developement </h5>
                        <h5>Full-Stack Developement </h5>
                        <h5>Progressive Web Apps </h5>
                        <h5>DevOps</h5>
                    </div>
                    </div>
                </div>

                {/* <!-- Column3 --> */}
                <div data-aos="zoom-in" className={prop.className ? classes.cardPlain :classes.card}>
                    <div>
                        <div className={classes.column__icon}>
                            <img src="/images/deliverys.png" alt="Delivery" width="70" height="70" />  
                        </div>
                        <div className={classes.column__heading}>
                            <h4>Delivery</h4>
                        </div>
                        <div className={classes.column__content}> 
                            <h5>Content Creation</h5>
                            <h5>PPC Campaigns</h5>
                            <h5>Social Media</h5>
                            <h5>Strategy</h5>
                        </div>
                </div>
                </div>
            </div>
        </div>
        );
    }

export default Categories;