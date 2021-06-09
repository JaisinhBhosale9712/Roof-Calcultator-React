import React from 'react'

export default function ThankYou(props) {
    return (
        <div className="flexbox">
        <h2 className="title">SUCCESS</h2>
        <div className="body home">
            <h4 >
            <span style={{fontWeight:"700"}}>Calculated Result</span><br/><br/>
            Your total cost is <span style={{color:"green", fontWeight:"700"}}>{props.totalamt}€</span>. If you have any enquiry we will get back to you very soon.
            </h4>

        </div>
        
        </div>
    )
}
