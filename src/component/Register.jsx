import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { auth,db } from './firebase';
import { setDoc,doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [userid,setUserid] =useState("");
  const [email, setEmail] = useState("");
 const [password,setPassword] =useState("");


 const handleRegister = async(e) => {
   e.preventDefault();

   try{
     await createUserWithEmailAndPassword(auth,email,password);
     const  user = auth.currentUser;
     console.log(user);
     if(user){
      await setDoc(doc(db,"users",user.uid),{
        email:user.email,
        userid:userid
      });
     }
    
     toast.success("User Register Successfully!!",{position:'top-center'});
     window.location.href="/login";
   }
   catch(error){
    toast.error(error.message,{position:'bottom-center'});
  
   }
 };
 
  return (
    <>
    <form onSubmit={handleRegister}>
    <div style={{ width: 500, height: 450 }} className="position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded m-4">
    
    <div className='m-3'>
    <h3 className='text-center'>Register</h3>
      <label htmlFor="exampleFormControlInput1" className="form-label ">User Name</label>
      <input className="form-control" type="text" placeholder="" aria-label="default input example" value={userid} onChange={(e) => setUserid(e.target.value)}/>
    </div>
    <div className="mb-3 m-3" >
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className='m-3'>
      <label htmlFor="inputPassword5" className="form-label">Password</label>
      <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </div>
      <input type="submit" className="btn btn-light btn-outline-dark m-3" value="Register"/>
    </div>
  </div>
  </form> 
  </>
  )
}

export default Register
