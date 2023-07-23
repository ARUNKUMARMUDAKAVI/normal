import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Header.module.css'

export const Header = () => {
  return (
    <>
        <header className={Styles.container}>
            <ul>
                <li>
                    <NavLink className={Styles.navlink} to='/'>HOME</NavLink>
                </li>
                <li>
                    <input className={Styles.search} type="search" name="search" id="ser" />
                </li>
                <li>
                    <NavLink className={Styles.navlink} to='/seller'>Be a Seller</NavLink>
                </li>
                <li>
                    <NavLink className={Styles.navlink} to='/orders'>ORDERS</NavLink>
                </li>
                <li>
                    <NavLink className={Styles.navlink} to='/cart'>CART</NavLink>
                </li>
                <li>
                    <NavLink className={Styles.navlink} to='/login'>LOGIN</NavLink>
                </li>
                <li>
                    <NavLink className={Styles.navlink} to='/signup'>SIGN UP</NavLink>
                </li>
            </ul>
        </header>
    </>
  )
}
