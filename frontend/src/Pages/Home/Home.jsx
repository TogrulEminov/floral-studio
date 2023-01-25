import React from 'react'
import Events from '../../Components/Events/Events'
import Florist from '../../Components/Florist/Florist'
import FlowerPricing from '../../Components/FlowerPricing/FlowerPricing'
import Header from '../../Components/Header/Header'
import Mission from '../../Components/Mission/Mission'
import OurTeam from '../../Components/OurTeam/OurTeam'

const Home = () => {
  return (
    <div>
      <Header/>
      <Florist/>
      <Mission/>
      <FlowerPricing/>
      <Events/>
      <OurTeam/>
    </div>
  )
}

export default Home