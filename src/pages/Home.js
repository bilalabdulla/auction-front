import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import io from 'socket.io-client'

// const socket = io.connect("http://localhost:3001")

function Home() {

  // const sendMessage = () => {
  //   socket.emit("send_message", { message: 'hello'})
  // }

  
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     alert(data.message)
  //   })
    
  // }, [socket])

    const navigate = useNavigate()

    const login = () => {
        return navigate('/login')
    }
    const signup = () => {
        return navigate('/signup')
    }
    


  return (
    <div className='homepage'>
        <h2 className='welcome-home'>Welcome to the Bidding war</h2>
        <div className='home-btns'>
        <button className='login-btn' onClick={login}>Enter the Auction</button>
        <button className='signup-btn' onClick={signup}>Register</button>
        </div>
        {/* <button onClick={sendMessage}> send</button> */}
    </div>
  )
}

export default Home
