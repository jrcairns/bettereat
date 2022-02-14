import React from 'react'

import Background from '../../images/betterhelp-hero.jpg'
import Logo from '../../images/Logo.png'

export default function Hero() {
  return (
    <div
      className="flex bg-center bg-cover relative before:absolute before:h-full before:w-full before:hero-gradient"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="px-9 pt-10 pb-64 md:pb-20 lg:pb-40 relative">
        <img className="w-72 lg:w-auto mx-auto md:mx-0" src={Logo} alt="BetterEat Logo" />
      </div>
    </div>
  )
}
