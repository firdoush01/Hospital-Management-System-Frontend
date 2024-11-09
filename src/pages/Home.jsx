import React from 'react'
import MessageForm from '../components/MessageForm'
import Hero from '../components/Hero'
import Departments from '../components/Departments'
import Biography from '../components/Biography'

function Home() {
  return (
    <>
      <Hero
        title={
            "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      
      />
      <Biography/>
      <Departments/>
      <MessageForm/>
    </>
  )
}

export default Home
