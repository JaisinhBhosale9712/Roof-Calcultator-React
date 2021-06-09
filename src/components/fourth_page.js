import {React, useState} from 'react';
import {Button, ProgressBar} from 'react-bootstrap';
import Material1 from '../images/material1.png';
import Material2 from '../images/material2.png';
import Material3 from '../images/material3.png';
import Submit_Page from './submit_page';
import Third_Page from './third_page';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

export default function Fourth_Page(props) {
    const [disable,setDisable] = useState(true)
    const [totalamt,setTotalamt] = useState(props.totalamt)
    const [page4amt,setPage4amt] = useState(0)
    const [page,setPage] = useState(4)
    const [back,setBack] = useState(false)
    const [selecteddata, setSelecteddata] = useState(props.selecteddata)
    function handleimageSelectpage4(event){
        if (event.target.name=="image6"){
            setPage4amt(10)
            setSelecteddata({...selecteddata,page4:event.target.name})
        }
        else if(event.target.name=="image7") {
            setPage4amt(20)
            setSelecteddata({...selecteddata,page4:event.target.name})
        }
        else if(event.target.name=="image8") {
            setPage4amt(30)
            setSelecteddata({...selecteddata,page4:event.target.name})
        }
        
        console.warn(page4amt)
        setDisable(false)

    };

    function handleSubmitpage4(event) {
        setPage(5);
    }
  
    function handleClickback(event){
        console.warn("test")
        setBack(true)
    }
    console.warn(selecteddata)

    return (
        <div className="flexbox">

            {back?<Third_Page selecteddata={selecteddata}  page2amt={props.page2amt} totalamt={totalamt-props.page3amt}/>:(page==4)?
        <div><h2 className="title">ROOF CALCULATOR 2</h2>
        <div className="body flexbox">
        <div><h1 className="arrow"  onClick={(event)=>handleClickback(event)}>&#60;</h1></div>
        <ProgressBar className="progressbar" variant="success" animated now={80} />
            <h4 >
            <span style={{fontWeight:"700"}}>Select Roof Material</span><br/><br/>
            </h4>
            <div className="flexboxcol">
                <LazyLoadImage tabindex="0" effect="blur" src={Material1} className="roof_img" onClick={(event)=>handleimageSelectpage4(event)} name="image6" />
                <LazyLoadImage tabindex="0" effect="blur" src={Material2} className="roof_img" onClick={(event)=>handleimageSelectpage4(event)} name="image7" />
                <LazyLoadImage tabindex="0" effect="blur" src={Material3} className="roof_img" onClick={(event)=>handleimageSelectpage4(event)} name="image8" />
            </div>
            <Button  variant="secondary" className="button" style={{padding:"10px"}} onClick={(event)=>handleSubmitpage4(event)} disabled={disable}>SUBMIT</Button>
        </div></div>:<Submit_Page selecteddata={selecteddata} page2amt={props.page2amt} page3amt={props.page3amt} page4amt={page4amt} totalamt={totalamt+page4amt}/>}

        </div>
    )
}


