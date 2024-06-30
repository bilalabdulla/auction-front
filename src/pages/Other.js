import React from 'react'

function Other(props) {
    const { state } = props.location
    const { name, age } = state
      return (
    <div>
        <h1>Hello from other</h1>
        <p>name: {name}</p>
        <p>Age: {age}</p>
    </div>
  )
}

export default Other
