import React, { useContext, useEffect, useState } from 'react'
import { Form, redirect, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'



function Login() {
  
  const navigate = useNavigate()
  const { users } = useContext(UserContext)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    localStorage.setItem('newUser', JSON.stringify(newName))
  }, [newName])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('button clicked')
    
    users.map((item) => { 
      if (item.email === newEmail && item.name === newName) {
        alert(`welcome ${newName}`)
        setIsLoggedIn(true)
        navigate('/bids')
      }
      else if (item === null) {
        setMessage('there are no users')
      }
        else {
        setMessage('you are not signed in')
        setIsLoggedIn(false)
      }
    })
    console.log(newEmail)
  }

  return (
    <div className='login'>
      <h2 className='login-title'>Enter the auction</h2>
      <Form className='login-form' method='post'  onSubmit={handleSubmit}>
        <label className='email-label'>
            <span>Enter your Email:  </span>
            <input className='login-email' type='email' name='email' required 
            onChange={(e) => setNewEmail(e.target.value)}
            value={newEmail}/> 
        </label>
        <label className='email-label'>
            <span>Enter your Name: </span>
            <input className='login-email' type='text' name='name' required 
            onChange={(e) => setNewName(e.target.value)}
              value={newName}
            />
        </label>
        <button className='login-submit' type='submit'>Submit</button>
        <p>{message}</p>
        <a className={(isLoggedIn) ? 'view' : 'no-view'} href='/signup'>Register now</a>
      </Form>
    </div>
  )
}

// export const loginAction = async ({ request }) => {
  
//   const data = await request.formData()
  
//   const submission = {
//     email: data.get('email'),
//     name: data.get('name')
//   }
//   console.log(submission)
//   users.map((item) => {
//     if(item.email === submission.email){
//       return redirect('/users')
//     }
//     else {
//       return redirect('/')
//     }
//   })
  
// }

export default Login