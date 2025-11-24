import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import CounterComponents from '../counterComponents/CounterComponents'
import GreetComponent from '../greet_component/GreetComponent'
import UserComponents from '../userComponents/UserComponents'
import UserPostComponents from '../userComponents/UserPostComponents'
import './HomeComponents.css'
import FormComponents from '../FormComponents/FormComponents'
import WelcomeComponents from '../ContextComponents/welcomeComponents'
import WeatherAppComponents from '../WeatherAppComponents/WeatherAppComponents'



const Home = () => {
  return (

    <div>
      <h2>Welcome to Home Page</h2>
  

    </div>
  )
}

const HomeComponents = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul className='nav-ul'>
          <li className='nav-li'><NavLink to="/" end>Home</NavLink></li>
          <li className='nav-li'><NavLink to="/greet">Greeting</NavLink></li>
          <li className='nav-li'><NavLink to="/counter">Counter</NavLink></li>
          <li className='nav-li'><NavLink to="/user">User</NavLink></li>
          <li className='nav-li'><NavLink to="/post">UserPost</NavLink></li>
          <li className='nav-li'><NavLink to="/addform">Form</NavLink></li>
          <li className='nav-li'><NavLink to="/context">Context</NavLink></li>
          <li className='nav-li'><NavLink to="/weather">Weather</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterComponents />} />
        <Route path="/greet" element={<GreetComponent userName='Ajay' />} />
        <Route path="/user" element={<UserComponents />} />
        <Route path="/post" element={<UserPostComponents />} />
        <Route path='/addform' element={<FormComponents/>} />
        <Route path='/context' element={<WelcomeComponents userName={'RajKumar'}/>} />
        <Route path='/weather' element={<WeatherAppComponents/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default HomeComponents