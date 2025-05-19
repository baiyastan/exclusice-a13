import React, {useState} from 'react'
  import google from "../assets/svg/google.svg"
  import { Link } from 'react-router-dom'
  import image2 from "../assets/image/phone.png"
  import "./style/Register.scss"
  import { auth } from '../firebase'
  import { createUserWithEmailAndPassword } from 'firebase/auth'
   import {  toast } from 'react-toastify';

  function Regicter() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function createUser() {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)

        console.log(res);
        if(res) {
          toast.success("User created successfully")
        }
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }

    return (
      <div className='regicter'>
        <div className="box">
          <img className='todzi' src={image2} alt="" />
          <div className='gojo'>
            <h2>Create an account</h2>
            <h6>Enter your details below</h6>
            <div className="geto">
            <input type="text" placeholder='Name'/>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="text" 
              placeholder='Email or Phone Number'/>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder='Password'/>
            </div>
            <button onClick={createUser} className='red'>Create Account</button>
            <button className='no-red'>
              <img src={google} alt="" />Sign up with Google
            </button>
            <p>Already have account? 
              <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  export default Regicter