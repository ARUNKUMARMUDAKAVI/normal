import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Login.module.css'

export const Login = () => {

  return (
    <>
    <center>
    <div className={Styles.container}>
        <span className={Styles.log}>Log In</span>
        <input className={Styles.email} type="email" name="email" id="eid" />
        <input className={Styles.pwd} type="password" name="password" id="pwd" />
        <button className={Styles.btnSub} type="submit">LOG IN</button>
        <NavLink className={Styles.alr} to='/signup'>Already have an account? Sign Up</NavLink>
    </div>
    </center>
    </>
  )
}
