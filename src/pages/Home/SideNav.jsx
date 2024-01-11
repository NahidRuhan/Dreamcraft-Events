import PropTypes from 'prop-types'; // ES6
import { useEffect, useState } from 'react';
import { GrLocation } from "react-icons/gr";
// import { useLoaderData } from 'react-router-dom';

const SideNav = () => {

    const [events,setEvents] = useState([]);
    // const loaderEvents = useLoaderData()

    useEffect(()=>{
        fetch('/upcomingEvent.json')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])

    return (
   <>
   
        <div className='flex flex-col gap-5'>
            <h2 className="text-2xl font-extrabold mx-auto">Upcoming events</h2>
            {
                events.map((event,ind) => <div key={ind}  data-aos="flip-left" data-aos-duration="5000">

<div className="card card-compact bg-base-100 shadow-xl zoom">
  <figure><img data-aos="flip-right" src={event.image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold">{event.name}</h2>

    <p>{event.description}</p>
    <div className='flex flex-col gap-3'>
        <span className='flex mx-auto items-center font-bold gap-2'> <GrLocation></GrLocation>Location: {event.location}</span>
        <button data-aos="zoom-in" className="btn btn-primary mx-auto w-auto">Buy tickets</button>
    </div>
  </div>
</div>

                </div> )
            }

        </div>
   </>
    );
};


SideNav.propTypes = {
    event : PropTypes.object
}

export default SideNav;