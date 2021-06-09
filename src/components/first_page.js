import {React, useState, lazy, Suspense} from 'react'
import {Button, ProgressBar} from 'react-bootstrap';
import Roof_Mainl from '../images/roofmainl.png';
import Roof_Mainr from '../images/roofmainr.png';
import Second_Page from './second_page';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
//import {amt2} from './second_page';
//const Roof_Mainl = lazy(()=>import('../images/roofmainl.jpg'));
//const Roof_Mainr = lazy(()=>import('../images/roofmainr.jpg'));


export default function First_Page() {
    const [disable,setDisable] = useState(true)
    const [page1amt,setPage1amt] = useState(0)
    const [page,setPage] = useState(1)
    const [selecteddata, setSelecteddata] = useState({data:{page1:"",page2:"",page3dim:"",page4:""}})
    function handleimageSelectpage1(event){
        if (event.target.name=="image1"){
            setPage1amt(50)
            setSelecteddata({"page1":event.target.name})
        }
        else if (event.target.name=="image2"){
            setPage1amt(100)
            setSelecteddata({"page1":event.target.name})
        }
        console.warn(page1amt)
        setDisable(false)

    };

    function handleSubmitpage1(event) {
        console.warn("test")
        setPage(2);
    }

    console.warn()

    return (
        <div className="flexbox">

            {(page==1)?<div><h2 className="title">Select Type</h2>
        <div className="body flexbox">
        <ProgressBar className="progressbar" variant="success" animated now={20} />
            <h4 >
            <span style={{fontWeight:"700"}}>How does your dream roof look like?</span><br/><br/>
            </h4>
            <div className="flexboxcol">
                <LazyLoadImage tabindex="0" effect="blur" src={Roof_Mainl} className="roof_img" onClick={(event)=>handleimageSelectpage1(event)} name="image1" />
                <LazyLoadImage tabindex="0" effect="blur" src={Roof_Mainr} className="roof_img" onClick={(event)=>handleimageSelectpage1(event)} name="image2" />
            </div>
            <Button  variant="secondary" className="button" style={{padding:"10px"}} onClick={(event)=>handleSubmitpage1(event)} disabled={disable}>SUBMIT</Button>
        </div></div>: 
        
        <Second_Page selecteddata={selecteddata} totalamt={page1amt}/>}

        </div>
    )
}


