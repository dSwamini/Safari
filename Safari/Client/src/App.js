import React, {createContext, useReducer} from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Signup from './components/Signup';
import Map from './components/Map';
import Community from './components/Community';
import Events from './components/Events';
import Footer from './components/Footer';
import Logout from './components/Logout';
import Site from './components/Site';
import GetEvents from './components/GetEvents';
import NewEvent from './components/newEvent';
import SingleEvent from './components/SingleEvent';
import AllPosts from './components/AllPosts';

import { initialState , reducer } from '../src/reducer/UseReducer';

// 1. Context API
export const UserContext = createContext(); 

const Routing = () => {
  return (
    <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/events" element={<Events />} />
    <Route path="/community" element={<Community />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/site" element={<Site />} />
      <Route path="/getevents" element={<GetEvents />} />
      <Route path="/getevents/new" element={<NewEvent />} />
      <Route path="/getevents/:eventId" element={<SingleEvent />} />
      <Route path="/allposts" element={<AllPosts />} />
    </Routes>
    
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Navbar />
      <Routing />
      <Footer />
    </UserContext.Provider>
    </>
  )
}

export default App
