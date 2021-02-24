import React, { useState } from "react";


import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
    name: "",
    age: "",
    email: ""
}



function FriendForm(){

    
    const [ friend, setFriend ] = useState(initialState);

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const postFriend = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/api/friends", friend)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
     return(
         <div>
             <form onSubmit={postFriend}>
                 <label /> Name
                 <input 
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={handleChange}
                    />
                 <label /> Age
                 <input 
                    type="text"
                    name="age"
                    value={friend.age}
                    onChange={handleChange}
                    />
                 <label /> Email
                 <input 
                    type="email"
                    name="email"
                    value={friend.email}
                    onChange={handleChange}
                    />
                 <button>Submit Friend</button>
             </form>
         </div>
     )
}

export default FriendForm;