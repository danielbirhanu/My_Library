import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage"
import { User } from "./models/User";

function App() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<User>()

  function updateLoggedInUser (user: User){
    setLoggedInUser(user)
  }
  return (
    <div>
      <HomePage displayLogin={displayLogin}/>
    </div>
  )
}

export default App
