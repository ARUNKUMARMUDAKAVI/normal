import React, { useRef } from 'react'
import axios from 'axios'


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
              <label htmlFor="fname" >First Name</label>
              <input type="text" ref={fnameRef}/>
              <label htmlFor="lname">Last Name</label>
              <input type="text" ref={lnameRef} />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" ref={emailRef} />
              <label htmlFor="pwd">Password</label>
              <input type="password" name="pwd" id="pwd" />
              <label htmlFor="cpwd">Confirm Password</label>
              <input type="password" name="cpwd" id="cpwd" ref={pwdRef} />
              <button type="submit">Sign Up</button>
            </form>
        </center>
    </>
  )
}
