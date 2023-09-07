import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join the millions to lear the code"
    desc1 = "Build skills for today, tommorow and beyond"
    desc2 = "Education to future-proof your carrer"
    image = {loginImg}
    formtype = "signup"
    setIsLoggedIn = {setIsLoggedIn}
  />
  )
}

export default Signup