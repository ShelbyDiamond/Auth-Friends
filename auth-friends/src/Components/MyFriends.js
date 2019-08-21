import React from "react"
import { axiosWithAuth } from "../utils/AxiosWithAuth"
import FriendsCard from "./FriendsCard.js"

class Friends extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data })
      })
      .catch(error => {
        console.log("ERROR", error)
      })
  }
  render() {
    console.log(this.state.friends)
    return (
      <div>
        <p> This is my Friends Folder </p>
        {this.state.map(people => (
          <FriendsCard people={people} />
        ))}
      </div>
    )
  }
}

export default Friends
