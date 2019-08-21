import React from "react"

const FriendsCard = props => {
  console.log("THIS", props)
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>email: {props.email}</p>
    </div>
  )
}

export default FriendsCard
