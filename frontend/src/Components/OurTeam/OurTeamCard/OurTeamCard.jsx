import React from 'react'
import "./_OurTeamCard.scss"
import card1 from "../../../media/portr1.jpg"
import card2 from "../../../media/portr2.jpg"
import card3 from "../../../media/portr3.jpg"
const OurTeamCard = () => {
  return (
    <div className='ourCard'>
        <div className="row">
            <div className="col-3 card">
                <div className='cardImage'>
                    <img src={card1} alt="" />
                </div>
                <h3>Velva Kopf</h3>
                <p>Biologist</p>
            </div>
            <div className="col-3 card">
                <div className='cardImage'>
                    <img src={card2} alt="" />
                </div>
                <h3>Sarah Palmer</h3>
                <p>Florist</p>
            </div>
            <div className="col-3 card">
                <div className='cardImage'>
                    <img src={card3} alt="" />
                </div>
                <h3>Jessica Swift</h3>
                <p>Photographer</p>
            </div>
        </div>
    </div>
  )
}

export default OurTeamCard