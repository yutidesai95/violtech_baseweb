import classes from './form.module.css';


function Formsection(){
    async function handleOnSubmit(e) {
        e.preventDefault();
    
        const formData = {};
    
        Array.from(e.currentTarget.elements).forEach(field => {
          if ( !field.name ) return;
          formData[field.name] = field.value;
        });
       
    
        await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
      }

return( 
    <div className={classes.formcard}>
        <div className={classes.formcontainer}>
        <form onSubmit={handleOnSubmit}>
            <div className={classes.contactheading}> 
                <h3  data-aos="fade-up">Let&#39;s talk over coffee <i className="fa fa-coffee"></i></h3>
            </div>         
            <div className={classes.contactsubheading}> 
                <h6  data-aos="fade-up">15-minute call to discuss about your project</h6>
            </div> 
            <div className={classes.row}>    
                <div className={classes.col}>
                    <label htmlFor="name"></label>
                    <input className={classes.inputcls} type="text" placeholder="Name *" name="name" id="name_input" required /> 
                </div>
            </div>
            <div className={classes.row}>    
                <div className={classes.col}>
                    <label htmlFor="email"></label>
                    <input className={classes.inputcls} type="email" placeholder="E-mail *" name="email" id="email_input" required />
                </div>
            </div>
            <div className={classes.row}>    
                <div className={classes.col}>
                    <label htmlFor="phone"></label>
                    <input className={classes.inputcls} type="text" placeholder="Contact Numbar" name="phone" id="phone_input" />
                </div>
            </div>
         
            <div className={classes.row}>    
                <div className={classes.col}>
                    <label htmlFor="companyname"></label>
                    <input className={classes.inputcls} type="text" placeholder="Company Name" name="companyname" id="companyname_input"/>
                </div>
            </div>
            <div className={classes.row}>    
                <div className={classes.col}>
                    <label htmlFor="companywebsite"></label>
                    <input className={classes.inputcls} type="text" placeholder="Company Website" name="companywebsite" id="companywebsite_input"/>
                </div>
            </div>
            <div className={classes.row}>    
                <div className={classes.col}>
                    <label htmlFor="message"></label>
                    <textarea className={classes.inputcls} name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
                </div>    
            </div>
            <div className={classes.row}>    
                <button className={classes.submitcls} type="submit" value="Send Message" id="form_button">Send Message</button>
            </div>
        </form>
    </div>
    </div>
);
}
export default Formsection;