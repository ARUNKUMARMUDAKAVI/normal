import React from 'react'

export const Login = () => {
  return (
    <>
    <div className="container">
        <div>Log In</div>
        <div className="email">
            <input type="email" name="email" id="eid" />
        </div>
        <div className='pwd'>
            <input type="password" name="password" id="pwd" />
        </div>
        <button type="submit">LOG IN</button>
    </div>
    </>
  )
}
