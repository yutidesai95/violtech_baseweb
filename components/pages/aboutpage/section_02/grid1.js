import styles from '../../../global/layout/layout.module.css'
import classes from './sectiontwo.module.css';
import Link from 'next/link';

function Textgrid(){

    return(
    <section>
        <div>
            <div data-aos="fade-up" className={classes.heading0}>
                <h5>WE ARE </h5>
            </div> 
            <div data-aos="fade-up" className={styles.heading1}>
                <h2>DIGITAL PRODUCERS</h2>
            </div>      
            <div data-aos="fade-up" className={styles.heading2}>
                <h3>Here to produce brand stories</h3>
            </div>  
            <div data-aos="fade-up" className={styles.heading3}>
                <h6>Our certified developers have unparalleled expertise in working with the latest technologies to deliver custom tech solutions for your brand.</h6>
            </div>
            <Link href='/services'>
            <button data-aos="fade-up"
        className={styles.btndesign2}
        type="button"
      >
            Learn More
      </button>                             
                            </Link>

        </div>
    </section>
    );
}
    
export default Textgrid;