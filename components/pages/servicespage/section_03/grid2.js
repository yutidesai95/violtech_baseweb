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
            <div className={styles.headingsection} >
                <div data-aos="fade-up" className={styles.headingsection + ' ' + classes.heading}>
                    <h2>COMPUTER CODING AND<br />INTEGRATIONS</h2>
                </div>            
            </div>
            
            <div data-aos="fade-up" className={styles.supportingtextsection}>
                <h3>We keep useful insights on the latest web technologies to create an up to date product for you.</h3>
        </div>
        <div  data-aos="fade-up" className={styles.detailtextsection}>   
                <h6>We keenly follow agile web development approach in order to gain higher customer satisfaction, increased project control and higher productivity.</h6>
        </div>
            <div data-aos="flip-up" className={styles.iconcards}>
                {/* Column1  */}
              
                <div className={classes.oneword}>           
                            <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f2"]} src="/images/devicon1.webp" alt="DevelopmentIcon"  />   </div>
                            <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f1"]} src="/images/devicon5.png" alt="DevelopmentIcon"  /> </div>                                               
                </div>

                {/* <!-- Column2 --> */}
               
                <div className={classes.oneword}>             
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f1"]} src="/images/devicon8.png" alt="DevelopmentIcon"  />   </div>
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f2"]} src="/images/devicon3.png" alt="DevelopmentIcon"  /> </div>                                                          
                </div>

                {/* <!-- Column3 --> */}
                <div className={classes.oneword}>
             
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f2"]} src="/images/devicon7.png" alt="DevelopmentIcon"  /> </div>                   
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f1"]} src="/images/devicon11.png" alt="DevelopmentIcon"  /> </div>                                       

                </div>

                {/* <!-- Column4 --> */}
                <div className={classes.oneword}>            
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f2"]} src="/images/devicon2.webp" alt="DevelopmentIcon"  /> </div>                   
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f1"]} src="/images/devicon12.png" alt="DevelopmentIcon"  /> </div>                                             
                </div>
                <div className={classes.oneword}>                                   
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f2"]} src="/images/devicon6.webp" alt="DevelopmentIcon"  /> </div>                   
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f1"]} src="/images/devicon9.png" alt="DevelopmentIcon"  /> </div>                                             
                </div>
                <div className={classes.oneword}>              
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f2"]} src="/images/devicon4.png" alt="DevelopmentIcon"  /> </div>                   
                        <div className={classes.wordlist}> <img className={classes.placeholder} id={classes["f1"]} src="/images/devicon10.png" alt="DevelopmentIcon"  /> </div>                                             
                </div>
            </div>
        </div>
    );
    }
    
export default Textgrid;