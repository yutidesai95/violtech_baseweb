import classes from './sectiontwo.module.css';

function Imagegrid(){

    return(
    <section>
        <div data-aos="fade-up" className={classes.landingSVGbox}>
            <img src="/images/brand.png" alt="Branding" width="750" height="600" />
        </div>
    </section>
    );
    }
    
export default Imagegrid;