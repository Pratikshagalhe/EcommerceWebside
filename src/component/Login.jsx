import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth

 } from './firebase';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async(e) =>{
  e.preventDefault();

 try {
  await signInWithEmailAndPassword(auth,email,password);
  console.log("User Register Successfully!!")
  toast.success("User Register Successfully!!",{position:'top-center'});
  window.location.href="/home";
 } catch (error) {
  console.log(error)
  toast.error(error.message,{position:'bottom-center'})
 }
}

  return (

    <form onSubmit={handleSubmit}>
    <div style={{ width: 500, height: 350 }} className="position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded m-4">
     <div className="mb-3 m-3" >
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
      <div className='m-3'>
        <label htmlFor="inputPassword5" className="form-label">Password</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
        <input type="submit" className="btn btn-light btn-outline-dark m-3" value="Login"/>
      </div>
    </div>
    </form>
  )
}

export default Login
