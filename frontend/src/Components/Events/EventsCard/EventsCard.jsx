import React from 'react'
import "./_EventsCard.scss"
const EventsCard = () => {
  return (
    <div className='eventCard'>
    <div className="row">
        <div className="col-3 card">
        <h1>$16 <span>per table</span> </h1>
        <h3>Birthday Events</h3>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <div className='cardBtn'>
        <button>Shop Now</button>
        </div>
        </div>
        <div className="col-3 card">
        <h1>$16 <span>per table</span> </h1>
        <h3>Birthday Events</h3>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <div className='cardBtn'>
        <button>Shop Now</button>
        </div>
        </div>
        <div className="col-3 card">
        <h1>$16 <span>per table</span> </h1>
        <h3>Birthday Events</h3>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <div className='cardBtn'>
        <button>Shop Now</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default EventsCard