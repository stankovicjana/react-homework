
import emailjs from "@emailjs/browser"

const Mailer = () =>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
        'service_h49ebka',
        'template_e48murs',
        e.target,
        'OfdejK3ymeR7a7bkh').then(res=>
            {console.log(res);
        }).catch(err=>console.log(err));

    }
    return(
        <div className="container border"
        style={{marginTop:"50px", width: '50%',
        backgroundImage:`url(https://img.freepik.com/free-vector/stamped-postcard-frame-with-travel-theme_53876-97441.jpg)`,
        backgroundPosition:'center',
        backgrountSize:'cover'}}>
            <h1 style={{marginTop:'25px'}}>Kontakt forma</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}> 
            <label>Ime i prezime</label>
            <input type = 'text' name ="name" className="form-control"/>

            <label>Email</label>
            <input type = "email" name="user_email" className="form-control"/>
            

            <label>Poruka</label>
            <textarea name="message" rows="4" className="form-control"/>
            <input type='submit' value="Pošalji" className="form-control btn btn-primary" 
            style={{marginTop:'30px'}}/>
            
            </form>
           
        </div>
    );
};

export default Mailer;

