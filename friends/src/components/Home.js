import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <h1>
            <Link to="/login">Click To Login</Link>
        </h1>
    )
}
export default Home;