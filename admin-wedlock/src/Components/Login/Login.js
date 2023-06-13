import React, {  useState } from 'react';
import './Login.css';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Login = () => {
     const [email,setEmail]=useState("");
     const[password,setPassword]=useState("");
     let navigate=useNavigate();
     const loginHandeler=()=>{
      if(email==="" && password===""){
        alert("Fill both email and password first")
        return
    }

      if(email==="abc@gmail.com" && password==="123@45"){
        localStorage.setItem('authenticated','true');
        navigate('/');
        window.location.reload(true);
      }

     }

     



    return (
        <div >
        
        <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Wedlock Team</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={event=>setEmail(event.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={event=>setPassword(event.target.value)}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={loginHandeler}>Sign in</MDBBtn>
              <p className="text-muted" >Forgot password?</p>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
               Create New
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
        
    );
}

export default Login;
