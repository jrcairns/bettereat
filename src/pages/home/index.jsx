import React from 'react'
import Hero from '../../components/Hero'
import Restaurants from '../../containers/Restaurants'
import Users from '../../containers/Users'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="container">
        <Restaurants />
      </div>
      <Users />
    </div>
  )
}
