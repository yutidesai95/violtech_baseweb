import { Fragment, useEffect } from 'react';
import classes from './contact.module.css';
import SVGclasses from './containers/Svg/svg.module.css';
import styles from '../layout/layout.module.css';
import Formsection from './containers/Form';
import Svgsection from './containers/Svg'; 
import Aos from 'aos';
import "aos/dist/aos.css";
import Modalmenu from '../menu/containers/Modal'

function Contact(prop) {     
    console.log(prop.form);
    useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            once: true,
            anchorPlacement: ' top-bottom' });
     }, []);

        return(
        <div className={styles.container} id={classes["container"]}>
            <div className={classes.cards}>
            <Fragment>
                <div className={classes.card1}>
                    <div className={SVGclasses.contentbox}>        
                        <div className={SVGclasses.svgboxcard}>    
                            <div className={SVGclasses.heading1}>
                                <h2 data-aos="fade-up">NOT ALL WEBSITES BUILT FOR SAME PURPOSE</h2>
                            </div>     
                            <div className={SVGclasses.heading2}>
                                <h3 data-aos="fade-up">We will love to hear your idea!</h3>
                            </div>                       
                            <Svgsection />                           
                        </div>                       
                    </div>
                </div>            
                <div  data-aos="flip-down" className={classes.card2}>
                <Formsection />
                   </div>
                   <div className={classes.button}>
                   <Modalmenu buttonText={"Let's talk"}/>
                   </div>         
            </Fragment>
            </div>
        </div>
        );
        }

export default Contact;