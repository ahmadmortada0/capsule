import React from 'react'
import logo from '../../assets/images/logo.png'
import usericon from '../../assets/images/usericon.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

  const [show,setShow]=useState("invisible ")

  const navigate = useNavigate()

  const toggleLog=()=>{

    show==="invisible "?setShow("block"):setShow("invisible ")

  }

  return (

<header className="custom-header flex">

      <div className="left">

        <h3>Surprise Me</h3>

      </div>

      <nav className="center">

        <Link to="/home" className='active'>Home</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/public">Public</Link>

      </nav>

      <div className="right">

        <img src={usericon} alt="User " className="user-icon" onClick={toggleLog}/>

        <button className={show}onClick={()=>{navigate("/login")}}>Logout</button>

      </div>

    </header>

  )
}

export default Header