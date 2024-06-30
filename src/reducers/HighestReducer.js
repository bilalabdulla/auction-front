import React from 'react'

export const HighestReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HIGHEST_BID':
        return action.amount
    default:
        return state
  }
    
}


