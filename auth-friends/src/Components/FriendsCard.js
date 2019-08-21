import React from "react"

const FriendsCard = props => {
  console.log("THIS", props)
  return (
    <div>
      <h2>Name: {props.people.name}</h2>
      <h2>Age: {props.people.age}</h2>
      <h2>Email: {props.people.email}</h2>
    </div>
  )
}

export default FriendsCard
