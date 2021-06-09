import {React, useState} from 'react';
import {Button} from 'react-bootstrap';
import Fourth_Page from './fourth_page';
import ThankYou from './thankyou';
import emailjs from 'emailjs-com';


export default function Submit_Page(props) {
    const [totalamt,setTotalamt] = useState(props.totalamt)
    const [back,setBack] = useState(false) 
    const [thankyou,setThankyou] = useState(false)
    const [selecteddata, setSelecteddata] = useState(props.selecteddata)


    function handleSubmitpage(event) {
        event.preventDefault();
        emailjs.sendForm("service_s09sqgo","template_r7svo9i",event.target,"user_Pvu6vpdMymfNJKrcYw0WY")
        .then((result) => {
            console.warn(result.text);
        }, (error) => {
            console.warn(error.text);
        })
        setThankyou(true)
    }

    function handleClickback(event){
        console.warn("test")
        setBack(true)
    }
    console.warn(JSON.stringify(selecteddata))

    return (
        <div>

                {back?<Fourth_Page selecteddata={selecteddata}  page2amt={props.page2amt} page3amt={props.page3amt} totalamt={totalamt-props.page4amt}/>:thankyou?<ThankYou totalamt={totalamt}/>:
                <div className="flexbox">
        <h2 className="title">Get Cost Estimation Now?</h2>
        <form className="bodypage4 flexbox" onSubmit={(event)=>handleSubmitpage(event)}>
        <h4 >
            <div><h1 className="arrow" onClick={(event)=>handleClickback(event)}>&#60;</h1></div>
            <span style={{fontWeight:"700"}}>Please fill out the form!</span><br/><br/>
            </h4>
            <div className="flexboxcolpagesubmit">
            <div className="flexboxpagesubmit">
            <label className="label required">Salutaion</label>
            <select><option>Man</option><option>Woman</option><option>Other</option></select>
            </div>
            <div className="flexboxpagesubmit">
            <label className="label required">Name</label>
            <input placeholder="Your Name" name="name" required/>
            </div>
            </div>


            <div className="flexboxcolpagesubmit">
            <div className="flexboxpagesubmit">
            <label className="label required">Email-ID</label>
            <input placeholder="Your Email-ID" type="email" name="email" required/>
            </div>
            <div className="flexboxpagesubmit">
            <label className="label required">Region</label>
            <input placeholder="City" name="city" required/>
            </div>
            </div>

            <div className="flexboxcolpagesubmit">
            <div className="flexboxpagesubmit">
            <label className="label required">PLZ</label>
            <input placeholder="Pin code" name="plz" required/>
            </div>
            <div className="flexboxpagesubmit">
            <label className="label">Telephone</label>
            <input placeholder="Optional" name="telephone" />
            </div>
            </div>

            <div className="flexboxcolpagesubmit">
            <div className="flexboxpagesubmit">
            <label className="label">Message</label>
            <textarea  placeholder="Optional" name="message"/>
            </div>
            </div>

            <input  name="totalamt" value={totalamt} hidden/>
            <input  name="selecteddata" value={JSON.stringify(selecteddata)} hidden/>

            <div className="flexboxcolpagesubmitbutton">
            <Button  variant="secondary" className="button" style={{padding:"10px"}} type="submit">SUBMIT</Button>
            </div>
        </form>
        </div>}
        </div>

    )
}
