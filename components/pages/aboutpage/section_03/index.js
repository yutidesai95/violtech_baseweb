import classes from './sectionthree.module.css';
import Link from 'next/link';
import styles from '../../../global/layout/layout.module.css';

function SectionThree(){

    return(
        <div className={styles.container + ' ' + classes.container} id={classes["container"]}>
            <script defer src="https://use.fontawesome.com/e79c22766f.js"></script>
            <div className={classes.container_section1}>
                <div data-aos="fade-up" className={styles.heading1}>
                    <h2>SERVER SIDED RENDERED</h2>
                </div>
                <div data-aos="fade-up" className={styles.heading2}>
                    <h3>We are expert in making Pre-rendered pages.</h3>
                </div>
                <div data-aos="fade-up" className={styles.heading3 + ' ' + classes.heading3}>
                    <h6>Readily available to dispatch before your visitors visit the web pages.</h6>
                </div>          
            </div>
            <div className={classes.container_section2}>            
                <div data-aos="fade-up" className={classes.nextjssymbol}>
                    <img src="/images/nextjs.png" alt="Nextjs" />   
                </div>
                <div data-aos="fade-up" className={classes.textline}>
                    <p><u><Link href='https://nextjs.org/'><a target="_blank" className={classes.Link}>Next.js</a></Link></u> helps us to make it possible, that’s why it is one of our faviorite <u><Link href='https://jamstack.org/' ><a target="_blank" className={classes.Link}>JamStack frameworks.</a></Link></u><Link href='https://jamstack.org/what-is-jamstack/'><a target="_blank" className={classes.Link}><i className="fa fa-info-circle"></i></a></Link></p> 
                </div>        
            </div>
            <div className={classes.cards}>
        
                {/* Column1  */}
                <div data-aos="flip-left" className={classes.card}>
                    <img src="/images/reactjs.png" alt="Reactjs"/>  
                </div>

                {/* <!-- Column2 --> */}
                <div data-aos="flip-left" className={classes.card}>
                    <img src="/images/gatsby.png" alt="Gatsby" />  
                </div>

                {/* <!-- Column3 --> */}
                <div data-aos="flip-left" className={classes.card}>
                    <img src="/images/vuejs.png" alt="Vuejs"/>  
                </div>
                {/* <!-- Column4 --> */}
                
                {/* <!-- Column6 --> */}
                <div data-aos="flip-left" className={classes.card}>                   
                    <img src="/images/hugo.png" alt="Hugo"/>  
                </div>
                <div data-aos="flip-left" className={classes.card}>
                    <img src="/images/angular.png" alt="Angularjs"/>  
                </div>
                <div data-aos="flip-left" className={classes.card}>
                    {/* <div className={classes.column__icon}> */}
                    <img src="/images/ember.png" alt="Ember"/>  
                    {/* </div> */}
                </div>
                <div data-aos="flip-left" className={classes.card}>
                    <img src="/images/svelte.png" alt="Svelte"/>  
                </div>
                {/* <!-- Column5 --> */}
                <div data-aos="flip-left" className={classes.card}>
                    <img src="/images/vercel.png" alt="Vercel"/>  
                </div>
            </div>
        </div>
    );
}

export default SectionThree;