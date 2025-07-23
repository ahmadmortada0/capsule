import React from 'react'
import logo from '../../assets/images/logo.png'
import signup from '../../assets/images/signup.jpg'
import SignUpAuth from './SignUpAuth'

const SignUpLabel = () => {

  return (

<div>

      <header>

            <img src={logo} alt="" />

        </header>

        <div className='container flex'>

           <div className='image-section'>

                <img src={signup} alt="" />

            </div> 

            <div className='signUp-section'>

                <div className='greeting-section '>

                    <h1>

                        Welcome 

                    </h1>

                    <p>Sign In to continue</p>

                </div>

                <SignUpAuth/>

            </div>

        </div>

    </div>

  )

}

export default SignUpLabel