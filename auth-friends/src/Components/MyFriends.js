import React from "react"
import { axiosWithAuth } from "../utilites/axiosWithAuth"
import FriendsCard from "./FriendsCard.js"

class MyFriends extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends", this.state.friends)
      .then(response => {
        console.log("Am I working?", response)
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log("I broke!", error)
      })
  }

  render() {
    return (
      <div>
        <h2>This is my friends list</h2>
        {this.state.friends.map(friend => {
          return (
            <FriendsCard
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          )
        })}
      </div>
    )
  }
}

export default MyFriends
