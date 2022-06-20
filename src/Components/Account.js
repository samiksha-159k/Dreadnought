// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import '../index.css'
// import react from 'react'
// //import { useState } from 'react/cjs/react.production.min';
// import pablo from '../../src/pablo.png'


// function Account() {
//   // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   // const mobno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   // const[email, setemail] = useState('');
//   // const[error, seterror] = useState('');
//   // const[err, seterr] = useState('');
//   // const[eror, seteror] = useState('');
//   // const[phone, setphone] = useState('');
//   // const[password, setpassword] = useState('');
//   // const[confirmpass, setconfirm] = useState('');

//   // const checkEmail = (e) => {
//   //   setemail(e.target.value);

//   //   if(regex.test(email) === false){
//   //     seterror('Please enter valid email address')
//   //   }
//   //   else{
//   //     seterror('');
//   //     return true;
//   //   }
//   // }

//   // const checkMobile = (e) => {
//   //   setphone(e.target.value);

//   //   if(mobno.test(phone) === false){
//   //     seterr("Enter 10 digit number")
//   //   }else{
//   //     seterr('');
//   //     return true;
//   //   }
//   // }

//   // const handlechange = (e) =>{
//   //   setpassword(e.target.value);
//   // }

//   // const matchPass = (e) => {
//   //  // setconfirm(e.target.value);
//   //    if(e.target.value !== password){
//   //    seteror("Password doesn't match")}
//   //    else{
//   //     seteror('');
//   //     return true;
//   //   }
//   // }

//   // const checkpass = () => {
//   //   console.log(password);
//   //   console.log(confirmpass);
//   //   if(password.match(confirmpass)){
//   //     seterror("invalid pass")
      
//   //   }else{
//   //     seterror('');
//   //     return true;
//   //   }
//   // }  
   
//    let navigate = useNavigate();
//   return (
//     <div>
       
//         <div class="container">
//            <div class="d-flex column justify-content-space-evenly ">
             
//         <div class=" ">
//           <div className='sa-head mt-3 ' >TweetX</div>
//             <div>
//             <button type="button" className="btn btn-light sa-heading  mt-3 mb-3"
                      
//                      >Create Account
//                      </button>
//             </div>

//             <div className='mt-4 sa-login_text'><b>LOGIN</b></div>
//                  <div className='sa-margin'>
//                        <div class=" mb-4 mt-5 ">
                           
//                                <input type="email" class="form-control required " id="exampleFormControlInput1" 
//                                placeholder='Email'
//                             />
                              
//              </div>
//                   <div class=" mb-3">
                      
//                         <input type="password" class="form-control" id="exampleFormControlInput1" name='pass1'
//                           placeholder='Password'
//                       />
                      
//                   </div>
                

              
           
               
//                     <div>
               
//                  <form className='row'>
//                       <div className='col-auto mt-2'>Forgot Password ? </div>
//                       <div className='col-auto'> 
//                       <button type="button" className="d-flex btn btn-primary btn-login   justify-content-flex-end"
//                       onClick={()=>navigate('/chart')}
//                      >Login
//                      </button></div></form>
//                   </div>
                       
//                   </div>
//                         </div>
//                         <div class=" bg-img">
                   
//                    <img src={pablo} alt='' 
//                   />
//                    </div>
//                         </div>
//                         </div>
//                         </div>
//   )
// }

// export default Account