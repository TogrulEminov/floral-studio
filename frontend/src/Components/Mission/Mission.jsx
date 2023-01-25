import React from 'react'
import "./_Mission.scss"
import pl from "../../media/b4.jpg"
const Mission = () => {
  return (
    <div className='missionSection'>
        <div className='container-fluid'>
           <div className="row">
           <div className="col-4 missionLeft">
                <div className='missionContent'>
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="col-4 missionRight">
                <img src={pl} alt="" />
            </div>
           </div>
        </div>
    </div>
  )
}

export default Mission