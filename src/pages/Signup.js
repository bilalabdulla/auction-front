import React, { useContext, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

function Signup() {
  const { dispatch, users } = useContext(UserContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)

  const navigate = useNavigate() 

  const handleSubmit = (e) => {
    e.preventDefault()
      dispatch({ type: 'ADD_USER', user: {
        email: email, name: name 
      }})
      setName('')
      setEmail('')
      navigate('/bids')
  }


  return (
    <div className='login three'>
        <h3 className='login-title'>Join the Bidding now</h3>
      <Form method='post' action='/signup' onSubmit={handleSubmit}>
        <label className='email-label two'>
            <span>Your email: </span>
            <input className='login-email' type='email' name='email' required 
            value={email} onChange={(e) => setEmail(e.target.value)}/> 
        </label>
        <label className='email-label two'>
            <span>Your name: </span>
            <input className='login-email' type='text' name='name' required 
            value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <button className='login-submit' type='submit'>Join</button>
      </Form>
    </div>
  )
}

export default Signup
