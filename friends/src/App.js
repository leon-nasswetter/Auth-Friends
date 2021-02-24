import { Route, Switch, Link, useHistory } from "react-router-dom";
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import FriendsList from "./components/FriendsList";

function App() {

  const history = useHistory();

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <div className="App">
      <div className="NavLinks">
        <a className="navA" href="/">Home</a>
        <a className="navA" href="/login">Login</a>
        <a className="navA" href="" onClick={handleLogout}>Logout</a>
        <a className="navA" href="/friends">Friends List</a>
        {/* friends list button for auth test - redirect to login */}
      </div>
      <Switch>
        <PrivateRoute path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
