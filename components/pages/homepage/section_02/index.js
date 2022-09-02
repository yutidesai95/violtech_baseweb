import classes from './sectiontwo.module.css';
import React from 'react';
import styles from '../../../global/layout/layout.module.css';

function SectionTwo(){

    return(
        <div className={styles.container + ' ' + classes.container}>
            <div className={classes.container_section1}>
                <div data-aos="fade-up" className={styles.heading1}>
                    <h2>YOUR BUSINESS NEEDS</h2>
                </div>
                <div data-aos="fade-up" className={styles.heading2}>
                    <h3>A smart website.</h3>
                </div>
                <div data-aos="fade-up" className={styles.heading3}>
                    <h6>This is a perfect solution we provide, not because it is possible but to give you maintainace free, ability to handle unlimited visitors without any breakdown, and self-generating organic trafffic without running ads.</h6>
                </div>          
            </div>

           
            <div  className={classes.cards}>
                {/* Column1  */}
                <div data-aos="fade-up" className={classes.card}>
                <div className={classes.post}>
                            
                            <div className={classes.column__icon}>
                                    <img className={classes.postimg} src="/images/lightening.png" alt="LighteningFast" width="40" height="40" />   
                            </div>
                            

                                <div className={classes.column__heading}>
                                        <h4 className={classes.posttitle}>Blazing Speed</h4>
                                </div>
                                <div className={classes.column__content}> 
                                        <h5 className={classes.postdata}>Hybrid, static & server rendering, smart bundling, route pre-fetching, fast refresh and more. </h5>
                                </div>
                        
                            </div>
                </div>
      
                {/* <!-- Column2 --> */}
                <div data-aos="fade-up" className={classes.card}>
                <div className={classes.post}>
                    <div className={classes.column__icon}>
                            <img className={classes.postimg} src="/images/traffic.png" alt="WebsiteTraffic" width="40" height="40" />   
                    </div>
                    <div className={classes.column__heading}>
                        <h4 className={classes.posttitle}>Unlimited Traffic</h4>
                    </div>
                    <div className={classes.column__content}> 
                        <h5 className={classes.postdata}>Serverless fuctionality is proportional to data usage than old-fashioned fixed amount of bandwidth or number of servers.</h5>
                    </div>
                </div>
                </div>

                {/* <!-- Column3 --> */}
                <div data-aos="fade-up" className={classes.card}>
                <div className={classes.post}>
                        <div className={classes.column__icon}>                         
                            <img className={classes.postimg} src="/images/global.svg" alt="Global" width="40" height="40" />   
                        </div>
                        <div className={classes.column__heading}>
                            <h4 className={classes.posttitle}>Hosted Globally</h4>
                        </div>
                        <div className={classes.column__content}> 
                            <h5 className={classes.postdata}>CDN or Anycast technology is to provide high availibility and performance by distributing files over network across the world so your users an access from closest one. </h5>
                        </div>
                </div>
                </div>
                {/* <!-- Column4 --> */}
                <div data-aos="fade-up" className={classes.card}>
                <div className={classes.post}>
                        <div className={classes.column__icon}>
                                <img className={classes.postimg} src="/images/secure.png" alt="Secure" width="40" height="40" />   
                        </div>
                        <div className={classes.column__heading}>
                            <h4 className={classes.posttitle}>Secure</h4>
                        </div>
                        <div className={classes.column__content}> 
                            <h5 className={classes.postdata}>SSL encryption, A security protocol that creates an encrypted link between a web server and a web browser, protects the website you are visitor.</h5>
                        </div>
                </div>
                </div>
                {/* <!-- Column5 --> */}
                <div data-aos="fade-up" className={classes.card}>
                <div className={classes.post}>
                    <div className={classes.column__icon}>
                            <img className={classes.postimg} src="/images/seo.png" alt="SEO" width="40" height="40" />   
                    </div>
                    <div className={classes.column__heading}>
                        <h4 className={classes.posttitle}>SEO-Friendly</h4>
                    </div>
                    <div className={classes.column__content}> 
                        <h5 className={classes.postdata}>Help search engines find, understand, and connect your content to the topic you are trying to deliver.</h5>
                    </div>
                </div>
                </div>
                {/* <!-- Column6 --> */}
                <div data-aos="fade-up" className={classes.card}>
                <div className={classes.post}>
                    <div className={classes.column__icon}>
                            <img className={classes.postimg} src="/images/responsive.png" alt="Responsive" width="40" height="40" />   
                    </div>
                    <div className={classes.column__heading}>
                        <h4 className={classes.posttitle}>Responsive</h4>
                    </div>
                    <div className={classes.column__content}> 
                        <h5 className={classes.postdata}>The presented content automatically changes or adapts to fit the device user reading it on per the size of screen.</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;

