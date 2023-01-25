import React from 'react'
import EventsCard from './EventsCard/EventsCard'
import EventsTitle from './EventysTitle/EventsTitle'
import "./_Events.scss"
const Events = () => {
    return (
        <div className='eventSection'>
            <div className="container-fluid">
                <EventsTitle/>
                <EventsCard />
            </div>
        </div>
    )
}

export default Events