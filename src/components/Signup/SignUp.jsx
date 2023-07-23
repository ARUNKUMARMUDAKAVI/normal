import React, { useRef } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Styles from './Signup.module.css'


export const SignUp = () => {

  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  
  const data = (e) => {
    e.preventDefault();

    let userData = {
      firstName : fnameRef.current.value,
      lastName : lnameRef.current.value,
      email : emailRef.current.value,
      password : pwdRef.current.value
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', userData)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  return (
    <>
        <center>
            <form onSubmit={(e) => data(e)}>
              <section className={Styles.container}>
              <span className={Styles.sign}>Sign Up</span>
              <input className={Styles.fname} placeholder='Enter First Name' type="text" ref={fnameRef}/>
              <input className={Styles.lname} placeholder='Enter Last Name' type="text" ref={lnameRef} />
              <input className={Styles.email} placeholder='Enter Your Email' type="email" name="email" id="email" ref={emailRef} />
              <input className={Styles.pwd} placeholder='Enter Password' type="password" name="pwd" id="pwd" />
              <input className={Styles.cpwd} placeholder='Enter Confirm Password' type="password" name="cpwd" id="cpwd" ref={pwdRef} />
              <button className={Styles.btnSub} type="submit">Sign Up</button>
              <NavLink className={Styles.alr} to='/login'>Already have an account? Log In</NavLink>
              </section>
            </form>
        </center>
    </>
  )
}
