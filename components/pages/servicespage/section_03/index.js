import { Fragment } from 'react';
import styles from '../../../global/layout/layout.module.css';
import classes from '../service.module.css';
import Imagegrid from './grid1';
import Textgrid from './grid2';

function SectionThree(){
return(
    <div className={styles.container + ' ' + classes.container}>
        <div className={styles.cards + ' ' + classes.cards}> 
            <Fragment>
                <div className={styles.card1 + ' ' + classes.section3card1}>             
                    <Imagegrid />
                </div>
                <div className={classes.section3card2}>
                    <Textgrid /> 
                </div>
            </Fragment>
        </div>
    </div>
);
}

export default SectionThree;