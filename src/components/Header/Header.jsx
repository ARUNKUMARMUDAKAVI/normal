import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/myorders'>My Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </li>
            </ul>
        </header>
    </>
  )
}
