
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import {AppContext,socket} from './context/appContext'
//import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/LoginLogin'
import Chat from './pages/Chat'
import Signup from './pages/LoginSignup';
import About from './pages/About';
import Services from './pages/services';
import Carou from './components/caroussel'
//import Footer from './components/footer'
import Slider from "./components/slider";
import { useState } from 'react';
function App() {
  const [rooms,setRooms] = useState([])
  const[currentRoom,setCurrentRoom] = useState([])
  const [messages, setMessages] = useState([]);
const [newMessages, setNewMessages] = useState({});

  return (
    <AppContext.Provider value={{socket,currentRoom,setCurrentRoom,messages,setMessages,newMessages,setNewMessages,rooms,setRooms}}>
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ca" element={<Carou />} />
        <Route path="/test" element={<Slider />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
