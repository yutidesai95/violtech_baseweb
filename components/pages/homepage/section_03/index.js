import { Fragment } from 'react';
import classes from './section_03.module.css';
import styles from '../../../global/layout/layout.module.css'
import Textgrid from './grid1';
import Svggrid from './grid2';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function SectionThree(){
        
    useEffect(() => {
        Aos.init({ duration: 500,
            easing: 'ease-out-back',
            once: true,
            anchorPlacement: ' top-bottom' });
     }, []);
    return(


    <div className={classes.container} >
        <div className ={styles.grids}>
            <Fragment>
            <div data-aos="fade-up" className={styles.grid1 + ' ' + classes.grid1}>
                <Textgrid />
            </div>
            <div data-aos="fade-up" className={styles.grid2 + ' ' + classes.grid2}>
                <Svggrid />   
            </div>                    
            </Fragment>
        </div> 
    </div>
);
}

export default SectionThree;