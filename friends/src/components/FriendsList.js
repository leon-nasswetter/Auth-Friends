import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };
  componentDidMount() {
    this.getFriends();
  }
  componentDidUpdate(){
      this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => this.setState({ friends: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="FriendList">
        <FriendForm />
        {this.state.friends.map((friend) => {
          return (
            <div className="FriendCard">
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>email: {friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
