import {React, useState} from 'react'
import {Button, ProgressBar} from 'react-bootstrap';
import Dimension from '../images/dimension.png';
import Fourth_Page from './fourth_page';
import Second_Page from './second_page';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';


export default function Third_Page(props) {
    const [totalamt,setTotalamt] = useState(props.totalamt)
    const [page,setPage] = useState(3)
    const [input1,setInput1] = useState(0)
    const [input2,setInput2] = useState(0)
    const [input3,setInput3] = useState(0)
    const [back,setBack] = useState(false)
    const [page3amt,setPage3amt] = useState((input1*input2*input3)/2)
    const [selecteddata, setSelecteddata] = useState(props.selecteddata)
    function handleSubmitpage3(event) {
        setPage3amt((input1*input2*input3)/2)
        event.preventDefault();
        event.stopPropagation();
        setPage(4);
        let dim = "Dim ".concat("length:",input1.toString(),"  width:",input2.toString(),"  heigth:", input3.toString())
        setSelecteddata({...selecteddata,page3dim:dim})
    }

    function handleClickback(event){
        console.warn("test")
        setBack(true)
    }
    console.warn("p2",props.page2amt)
    console.warn(selecteddata)

    return (
        <div className="flexbox">

            {back?<Second_Page selecteddata={selecteddata} totalamt={totalamt-props.page2amt} />:(page==3)?
        <div><h2 className="title">Dimensions</h2>
        <div className="body flexbox">
        <div><h1 className="arrow"  onClick={(event)=>handleClickback(event)}>&#60;</h1></div>
        <ProgressBar className="progressbar" variant="success" animated now={60} />
            <h4 >
            <span style={{fontWeight:"700"}}>What are the Measurements?</span><br/><br/>
            </h4>
            <LazyLoadImage effect="blur" src={Dimension} style={{marginTop:"0px"}} className="roof_img" name="image3" />
            <form onSubmit={(event)=>handleSubmitpage3(event)}>
            <div className="flexboxcol">
                <input onChange={(event)=>setInput1(event.target.value)} type="number" className="inputpage3" placeholder="length(cm) *" required/>
                <input onChange={(event)=>setInput2(event.target.value)} type="number" className="inputpage3" placeholder="breath(cm) *" required/>
                <input onChange={(event)=>setInput3(event.target.value)} type="number" className="inputpage3" placeholder="height(cm) *" required/>
            </div>
            <Button  variant="secondary" type="submit"className="button" style={{padding:"10px"}} >SUBMIT</Button>
            </form>
        </div></div>:<Fourth_Page selecteddata={selecteddata} page2amt={props.page2amt} page3amt={page3amt} totalamt={totalamt+page3amt} />}

        </div>
    )
}


