import {React, useState} from 'react'
import {Button, ProgressBar} from 'react-bootstrap';
import BrownHouse from '../images/brownhouse.png';
import GreenHouse from '../images/greenhouse.png';
import First_Page from './first_page';
import Third_Page from './third_page'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';


export default function Second_Page(props) {
    const [disable,setDisable] = useState(true)
    const [totalamt,setTotalamt] = useState(props.totalamt)
    const [page2amt,setPage2amt] = useState(0)
    const [page,setPage] = useState(2)
    const [back,setBack] = useState(false)
    const [selecteddata, setSelecteddata] = useState(props.selecteddata)
    function handleimageSelectpage2(event){
        if (event.target.name=="image3"){
            setPage2amt(150)
            setSelecteddata({...selecteddata,page2:event.target.name})
        }
        else if(event.target.name=="image4") {
            setPage2amt(200)
            setSelecteddata({...selecteddata,page2:event.target.name});
        }
        
        console.warn(page2amt)
        setDisable(false)

    };

    function handleSubmitpage2(event) {
        setPage(3);
    }

    function handleClickback(event){
        console.warn("test")
        setBack(true)
    }
  
    console.warn(selecteddata)

    return (
        <div className="flexbox">

            {back?<First_Page />:(page==2)?
        <div><h2 className="title">Select Design</h2>
        <div className="body flexbox">
        <div><h1 className="arrow"  onClick={(event)=>handleClickback(event)}>&#60;</h1></div>
        <ProgressBar className="progressbar" variant="success" animated now={40} />
            <h4 >
            <span style={{fontWeight:"700"}}>How is the design?</span><br/><br/>
            </h4>
            <div className="flexboxcol">
                <LazyLoadImage tabindex="0" effect="blur" src={BrownHouse} className="roof_img" onClick={(event)=>handleimageSelectpage2(event)} name="image3" />
                <LazyLoadImage tabindex="0" effect="blur" src={GreenHouse} className="roof_img" onClick={(event)=>handleimageSelectpage2(event)} name="image4" />
            </div>
            <Button  variant="secondary" className="button" style={{padding:"10px"}} onClick={(event)=>handleSubmitpage2(event)} disabled={disable}>SUBMIT</Button>
        </div></div>:<Third_Page selecteddata={selecteddata} page2amt={page2amt} totalamt={totalamt+page2amt}/>}

        </div>
    )
}


