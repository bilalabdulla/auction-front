import React, { createContext, useEffect, useReducer } from 'react'
import { UserReducer } from '../reducers/UserReducer'
import { BidReducer } from '../reducers/BidReducer'
import { json } from 'react-router-dom'
import { HighestReducer } from '../reducers/HighestReducer'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [users, dispatch] = useReducer(UserReducer, [], () => {
      const localData = localStorage.getItem('users')
      return localData ? JSON.parse(localData) : []
    })
    const [bids, dispatchTwo] = useReducer(BidReducer, {}, () => {
      const localBid = localStorage.getItem('bids')
      return localBid ? JSON.parse(localBid) : {user: 'none', amount: 0, id: 1}
    })


    useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users)) 
    }, [users])

    useEffect(() => {
      localStorage.setItem('bids', JSON.stringify(bids))
    }, [bids])


  return (
    <UserContext.Provider value={{users, dispatch, bids, dispatchTwo}}>
        { props.children }
    </UserContext.Provider>
  )
}

export default UserContextProvider
