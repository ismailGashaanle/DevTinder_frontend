import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import SignUp from "./pages/SignUp"
import Profile from "./components/Profile"
import Friends from "./components/Friends"
import { Provider } from "react-redux"
import AppStore from "./redux/AppStore"
import Feed from "./components/Feed"
import Requests from "./components/Requests"

 
function App() {
  return (
    <div className="">
    
       <BrowserRouter basename="/">
      <Routes>

        <Route path="/" element={<Body/>}>
           <Route path="/" element={<SignUp/>} ></Route>
           <Route path="/feed" element={<Feed/>} ></Route>
           <Route path="/profile" element={<Profile/>}></Route>
           <Route path="/friends" element={<Friends/>}></Route>
           <Route path="/requests/recieved" element={<Requests/>}></Route>
           <Route path="/send/requests" element={<Feed/>}></Route>
           <Route path="*" element={<div className="h-100 w-full bg-red-500 text-white text-4xl justify-center flex items-center">NOT FOUND</div>} />
          </Route>

      </Routes>
    
      </BrowserRouter>
   

    </div>
  )
}

export default App
