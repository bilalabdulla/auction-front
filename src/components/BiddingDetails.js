import React, { useContext, useEffect, useReducer, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import UserList from './UserList'
import io from 'socket.io-client'
import antique from '../assets/antique-cd.avif'

const socket = io.connect('http://localhost:3001')

function BiddingDetails() {
    const { bids, dispatchTwo, users, dispatch  } = useContext(UserContext)
    // const location = useLocation()
    // console.log(location.state)

    const sentBid = () => {
      socket.emit('send_message', {message: 'A new highest bid has been placed'})
    }


    

      let id = ''
      let newUser = ''
      let navigate = useNavigate()
      let localData = JSON.parse(localStorage.getItem('newUser'))
      users.map((item) => {
        if (item.name === localData){
          newUser = item.name
          id = item.id
        }
      })
      console.log(newUser)

  
   
  //  let newUser = users.filter((item) => {
  //     return item.id === id
  //   })
  //   console.log(newUser)


    const [bidItem, setBidItem] = useState({
        name: 'Antique CD Collection',
        startBid: 200,
        highestBid: bids.amount
    })

    
    useEffect(() => {
      socket.off('receive_message').on('receive_message', (data) => {
        alert(data.message)
      })
    }, [])
    
    const [newBid, setNewBid] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newBid < bidItem.startBid){
            setMessage("You cant bid lower than starting bid")
        }
        // else if (newBid > bidItem.highestBid) {
        else if (newBid > bids.amount){
            setBidItem({...bidItem, highestBid: newBid})
            setMessage('')
            sentBid()
            
        } 
        else {
        setMessage("You can't bid lower than highest bid")
        }
    }
    console.log(bidItem)

    const logout = (e) => {
      e.preventDefault()
      dispatch({
        type: 'REMOVE_USER',
        id:id
      })
      navigate('/')
    }

    const showUsers = (e) => {
      e.preventDefault()
      navigate('/users')
    }

    useEffect(() => {
      console.log('hege')
      if (bidItem.highestBid > bids.amount) {
      dispatchTwo({type: 'ADD_BID', bid: {
        amount: bidItem.highestBid, 
        user: 'anonymous'
    }})
  }
    }, [bidItem])

  return (
    <div className='bid'>
      <h2 className='bid-title'> Welcome to the Auction</h2>
      {/* <p>{location.state}</p> */}
      <div className='auction-item'>
        <img src={antique} className='auction-img'/>
        <h1 className='item-name'>{bidItem.name}</h1>
        <p>Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual
Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection
Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera
5000mAh(typ) battery with 22.5W charger in-box
MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating
        </p>
        <h4 className='start-bid'>Starting Bid amount is: ${bidItem.startBid}</h4>
      </div>
      
      {/* <p>{newBid}</p> */}
      <div className='end-bid'>
      <h4 className='highest-bid'>{(bids.amount <= 0) ? 'No bids yet' : `Highest bid Amount is $${bids.amount}`}</h4>
      <form onSubmit={handleSubmit} className='bid-form'>
      <input className='bid-input' type='number' placeholder='raise bid' value={newBid}
      onChange={(event) =>  setNewBid(event.target.value)}
      />
      <p className='error-bid'>{message}</p>
      <button className='newbid-btn' type='submit'>Submit New Bid</button>
      </form>

      <button onClick={logout} className='logout-btn'>Withdraw from the Auction</button>
      <button className='bidders' onClick={showUsers}>Show all Bidders</button>
      </div>
      {/* <button onClick={sentBid}>sent bid</button> */}
    </div>

  )
}

export default BiddingDetails

