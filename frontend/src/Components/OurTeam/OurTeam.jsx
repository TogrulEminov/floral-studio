import React from 'react'
import OurTeamCard from './OurTeamCard/OurTeamCard'
import OurTeamTitle from './OurTeamTitle/OurTeamTitle'
import "./_OurTeam.scss"
const OurTeam = () => {
  return (
    <div className='ourSection'>
        <div className="container-fluid">
            <OurTeamTitle/>
            <OurTeamCard/>
        </div>
    </div>
  ) 
}

export default OurTeam