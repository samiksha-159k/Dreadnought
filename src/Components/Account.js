import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../index.css'
import react from 'react'
//import { useState } from 'react/cjs/react.production.min';



function Account() {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const mobno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const[email, setemail] = useState('');
  const[error, seterror] = useState('');
  const[err, seterr] = useState('');
  const[eror, seteror] = useState('');
  const[phone, setphone] = useState('');
  const[password, setpassword] = useState('');
  const[confirmpass, setconfirm] = useState('');

  const checkEmail = (e) => {
    setemail(e.target.value);

    if(regex.test(email) === false){
      seterror('Please enter valid email address')
    }
    else{
      seterror('');
      return true;
    }
  }

  const checkMobile = (e) => {
    setphone(e.target.value);

    if(mobno.test(phone) === false){
      seterr("Enter 10 digit number")
    }else{
      seterr('');
      return true;
    }
  }

  const handlechange = (e) =>{
    setpassword(e.target.value);
  }

  const matchPass = (e) => {
   // setconfirm(e.target.value);
     if(e.target.value !== password){
     seteror("Password doesn't match")}
     else{
      seteror('');
      return true;
    }
  }

  const checkpass = () => {
    console.log(password);
    console.log(confirmpass);
    if(password.match(confirmpass)){
      seterror("invalid pass")
      
    }else{
      seterror('');
      return true;
    }
  }  
   
  let navigate = useNavigate();
  return (
    <div>
       
        <div class="container-fluid">
           <div class="row sa-container">
              <div class="col-7 bg-img">
                    <div className='sa-left_text'>
                       <b> Choose a date range </b><br/> Lorem ipsum dolor sit amet, consectetur<br/> In vero quibusdam id cupiditate
                    </div>
           {/* <img src='src/xy.png' alt=''/> */}
           </div>
        <div class="col-4 ">
            <div className='sa-heading'><b>Create an account</b></div>
                 <div className='sa-margin'>
                       <div class=" mb-2 mt-3 col-11">
                           <label for="exampleFormControlInput1" className="form-label sa-label" >Your email address</label>
                               <input type="email" class="form-control required" id="exampleFormControlInput1" 
                               onChange={checkEmail} required/>
                               <p className='text-danger p-2'>{error}</p>
             </div>
                  <div class="mb-2  col-11">
                       <label for="exampleFormControlInput1" class="form-label sa-label">Your password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" name='pass1'
                         onChange={handlechange}
                      />
                  </div>
              <div class="mb-2  col-11">
                 <label for="exampleFormControlInput2" class="form-label sa-label">confirm your  password</label>
                   <input type="password" class="form-control" id="exampleFormControlInput2" name='pass2' 
                   onChange={matchPass} onFocus
                   />
                    <p className='text-danger p-2'>{eror}</p>
              </div>
              <div class="mb-2  col-11">
                 <label for="exampleFormControlInput1" class="form-label sa-label">Your full name</label>
                   <input type="email" class="form-control" id="exampleFormControlInput1" required/>
                </div>
                <div class="mb-3 col-7">
               <label for="exampleFormControlInput1" class="form-label sa-label">Your phone number</label>
                 <input type="email" className="form-control  " id="exampleFormControlInput1"
                  onChange={checkMobile}/>
                  <p className='text-danger p-2'>{err}</p>
                  </div>
                    <div>
                <div class="form-check mt-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
                  <label class="form-check-label" for="flexCheckDefault">
                     <b> I read and agree Terms and Conditions</b>
                       </label>
                      </div>
                 <div className=''>
               
                      <button type="button" className="btn btn-primary col-5 mt-3 mb-3"
                      onClick={()=>navigate('/chart')}
                     >Create account
                     </button>
                  </div>
                        </div>
                  </div>
                        </div>
                        </div>
                        </div>
                        </div>
  )
}

export default Account