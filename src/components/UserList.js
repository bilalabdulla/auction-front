import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import UserDetails from './UserDetails'

function UserList() {
    const { users } = useContext(UserContext)


  return users.length ? (
    <div className='user-list'>
      <h2 className='users-title'>The Bidders List</h2>
      <ul className='user-ul'>
        { 
           users.map((item) => {
            return  <div className='user-li'>
                    <UserDetails user={item} key={item.id}/>
                </div>
            })
        }
      </ul>
    </div>
  ) : (
    <div className='empty'> There are no bidders </div>
  )
}

export default UserList


