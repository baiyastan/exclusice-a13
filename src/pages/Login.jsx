import React, {useState} from 'react'
import image2 from "../assets/image/phone.png"
import "./style/Register.scss"
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signIn() {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)

            if(res) {
                toast.success("Login success")
            }
        } catch (error) {
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
                        <input 
                            type="text" 
                            placeholder='Email or Phone Number' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                        <input 
                            type="password" 
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                             />
                    </div>
                    <div className='ggg'>
                        <button onClick={signIn} className='redd'>Login</button>
                        <button className='no-redd'>
                            Forget Password?
                        </button>
                    </div>
                    <p>Already have account?

                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn