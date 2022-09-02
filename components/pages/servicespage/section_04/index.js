import { Fragment } from 'react';
import styles from '../../../global/layout/layout.module.css';
import classes from '../service.module.css';
import Textgrid from './grid1';
import Imagegrid from './grid2';


function SectionFour(){
return(
    <div className={styles.container + ' ' + classes.container}>
        <div className={styles.cards + ' ' + classes.card}> 
            <Fragment>
                <div className={styles.card1 + ' ' + classes.section4card1}>             
                    <Textgrid />
                </div>
                <div className={styles.card2 + ' ' + classes.section4card2}>
                    <Imagegrid /> 
                </div>
            </Fragment>
        </div>
    </div>
);
}

export default SectionFour;