import { Fragment } from 'react';
import styles from '../../../global/layout/layout.module.css'
import classes from './sectiontwo.module.css'
import Imagegrid from './grid2';
import Textgrid from './grid1';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function SectionTwo(){
    
    useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            once: true,
            anchorPlacement: ' top-bottom' });
     }, []);
    return(
        <div className={styles.container} id={classes["container"]}>
            <div className={styles.cards}> 
            <Fragment>
                <div data-aos="fade-up" className={styles.card1}>    
                    <Textgrid />
                </div>
                <div data-aos="fade-up" className={styles.card2}>
                    <Imagegrid /> 
                </div>
            </Fragment>
            </div>
        </div>
    );
    }
    
export default SectionTwo;