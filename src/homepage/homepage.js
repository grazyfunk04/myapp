import React, { useState } from 'react'
import './homepage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const HomePage = () => {

  const history = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("http://localhost:8000/", {
        name,email,password
      })
      .then(res=>{
        if(res.data==="exist"){
          alert("User already exists")
        }
        else if(res.data==="notexist"){
          history("/login")
        }
      })
      .catch(e=>{
        alert("Wrong Details")
        console.log(e);
      })

    }catch{

    }
  }

  return (
    <div id='home'>
        <div className="form">
          <h2>Create Account</h2>
          <form action="POST" method='post'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id='user_name' onChange={(e) => {setName(e.target.value)}}/>
            <br></br>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
            <br/><br/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
            <br/>

            <input type="checkbox" name="remember_me" id="remember_me" />Remember Me
            <br/><br/>

            <input type="submit" id='btn' value={"Sign Up"} onClick={submit}/>
            <br/><br/>

            <p>Already have an account ? <Link to="/login" className='login'>Login</Link></p>
          </form>
        </div>
    </div>
  )
}

export default HomePage