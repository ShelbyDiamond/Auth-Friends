import React from "react"

const FriendsCard = props => {
  return (
    <div>
      <p> Name: {props.data.name} </p>
      <p> Age: {props.data.age} </p>
      <p> Email: {props.data.email} </p>
    </div>
  )
}

export default FriendsCard
