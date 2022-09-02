import { Fragment } from 'react';
import classes from './section_01.module.css';
import styles from '../../../global/layout/layout.module.css'
import Content from './content';
import Script from 'next/script';

function SectionOne(){
    return(
        <div className={classes.primaryContainer + ' ' + styles.full_height_container}>
        <div id="particles-js" className={classes.particleContainer}>
        <Script src="./scripts/particles.min.js" 
         strategy="beforeInteractive"
          />
        <Script
        
  src="./scripts/particles.js"
  strategy="lazyOnload"
/></div>
    <div className={classes.container} >

                <Content />   

    </div>
</div>
);
}

export default SectionOne;