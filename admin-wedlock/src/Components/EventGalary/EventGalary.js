import React, { useState } from 'react';
import './EventGalary.css'
import {
    MDBFile,
    MDBBtn,
    MDBTable, MDBTableHead, MDBTableBody
  } from 'mdb-react-ui-kit';
const EventGalary = () => {
    const [galaryImage,setGalaryImage]=useState(null);
    const [galary,setGalary]=useState([
        {id:1,
         images:'name'
        },
        {
            id:2,
            images:'name'
        }

    ]);
    const submitEvent=(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", galaryImage);

        // upload image to database 

        event.target.reset();
        setGalaryImage(null);
    }
    return (
        <div>
            <form className='galaryInput' onSubmit={submitEvent}>
           <h1>Event Galary</h1> 
           <div className='fileholder'>
           <MDBFile label='Choose Image' className='file' id='customFile' onChange={(e)=>setGalaryImage(e.target.files[0])}/>
           <MDBBtn type='submit' className='mb-4' block >
            Add Image
        </MDBBtn>
        </div>
        </form>

        <div className='galary'>
          <h4>Galary Images</h4>
       <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Images</th>
          <th scope='col'>Action</th>
          </tr>
      </MDBTableHead>
      <MDBTableBody className='tableBody'>
       
             {
                galary.map((image)=>(
                   
                    <tr key={image.id} >
                    <th scope='row'>{image.id}</th>
                    <td>{image.images}</td>
                    <td><MDBBtn className=" mb-0  gradient-custom-2 " id='imageBtn' >Delete</MDBBtn></td>
                    
                     </tr>
                    
                ))
             }
             
      </MDBTableBody>
       
      </MDBTable>
        </div>
        </div>
    );
}

export default EventGalary;
