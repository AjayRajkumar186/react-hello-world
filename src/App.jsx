import React from 'react'
import GreetComponent from './components/greet_component/GreetComponent'
import CounterComponents from './components/counterComponents/CounterComponents'
import UserComponents from './components/userComponents/UserComponents'
import HeaderComponents from './components/layouts/headerComponents/HeaderComponents'
import FooterComponents from './components/layouts/footerComponents/FooterComponents'
import UserPostComponents from './components/userComponents/UserPostComponents'
import HomeComponents from './components/homecomponents/HomeComponents'



function App() {
  return (
    <React.Fragment>

      {/* <GreetComponent userName={'Ajay'} />
      <GreetComponent userName={'Reventh'} />
      <GreetComponent userName={'Ram'} />
      <GreetComponent userName={'Priya'} />
      <CounterComponents/>  */}
         {/*<HeaderComponents/>
    <UserComponents/> 
     <FooterComponents/>
      <UserPostComponents/>*/}
<HomeComponents/>
    </React.Fragment>
  )
}

export default App