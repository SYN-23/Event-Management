import React, { useState } from 'react';
import './AddEvent.css';
import {
    MDBInput,
    MDBBtn,
    MDBTextArea ,
    MDBFile
  } from 'mdb-react-ui-kit';

const AddEvent = () => {
    const [title,setTitle]=useState("");
    const [offer,setOffer]=useState("");
    const [desription,SetDescription]=useState("");
    const [selectedFile, setSelectedFile] = useState(null);
     const fromSubmit=(event)=>{
        event.preventDefault();
        if(title==='' || offer ==='' || desription===''|| selectedFile===null ){
            alert("Fill every input ");
            return;
        }
        const formData = new FormData();
        formData.append("file", selectedFile);

        const Data={
            title:title,
            offer:offer,
            desription:desription,
            image:formData
        }
        console.log(Data);
       // upload event to database 




        event.target.reset();
        setTitle("");
        setOffer("");
        SetDescription("");
        setSelectedFile(null);
     }
      
    return (
        <form className='eventFrom' onSubmit={fromSubmit}>
         <h1 className='title'>Add Your Events</h1>   
        <MDBInput id='form4Example1' wrapperClass='mb-4' label='Title' onChange={(e)=>setTitle(e.target.value)}/>
        <MDBTextArea type='text' id='form4Example2' wrapperClass='mb-4' label='What we offer' rows={4} onChange={(e)=>setOffer(e.target.value)} />
        <MDBTextArea  type='text' wrapperClass='mb-4'  rows={5} label='Description' onChange={(e)=>SetDescription(e.target.value)} />
        <div className='fileholder'>
        <MDBFile label='Choose File' className='file' id='customFile' onChange={(e)=>setSelectedFile(e.target.files[0])}/>
        <MDBBtn type='submit' className='mb-4' block>
            Add Event
        </MDBBtn>
        </div>
        </form>
    );
}

export default AddEvent;
