import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import './login.css'

const Login = () => {

  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("http://localhost:8000/login", {
        email,password
      })
      .then(res=>{
        if(res.data==="exist"){
          history("/one")
        }
        else if(res.data==="notexist"){
          alert("User have not sign up")
        }
      })
      .catch(e=>{
        alert("Wrong Details")
        console.log(e);
      })

    }catch(e){
      console.log(e);
    }
  } 

  return (
    <div id='home'>
        <div className="form">
          <h2>Login to your account</h2>
          <form action="POST" method='post'>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
            <br/><br/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
            <br/>

            <input type="checkbox" name="remember_me" id="remember_me"/>Remember Me
            <br/><br />

            <input type="submit" id="btn" value={"Login"} onClick={submit}/>
            <br/><br/>

            <p>New to MyApp ? <Link to="/" className='login'>Sign Up</Link></p>
          </form>
        </div>
    </div>
  )
}

export default Login