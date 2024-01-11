import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";

const Venues = () => {
  const venues = useLoaderData();
  console.log("This is: ", venues);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-10">
        These are beautiful venues we will host your events!
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {venues.map((venue, ind) => (
          <div data-aos="zoom-in" data-aos-duration="5000" key={ind}>
            <div className="flex flex-col gap-3">
              <img className="" src={venue.image} alt="" />

              <h2 className="card-title">{venue.name}</h2>
              <div className="flex gap-10">
                <span className="flex items-center gap-2">
                  <FaLocationDot></FaLocationDot>
                  {venue.location}
                </span>
                <span className="flex items-center gap-2">
                  <MdOutlineReduceCapacity></MdOutlineReduceCapacity>
                  {venue.capacity}
                </span>
              </div>
              <p>{venue.description}</p>

              <div className="flex gap-3">
                <p>Facilities:</p>
                {venue.amenities ? (
                  venue.amenities.map((amenity, ind) => (
                    <div key={ind} className="flex">
                      <p className="badge badge-accent h-10 lg:h-5">{amenity}</p>
                    </div>
                  ))
                ) : (
                  <p>No amenities available</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p>Contact:</p>
                <div className="flex flex-col">
                  <span>{venue.contact.name}</span>
                  <span>{venue.contact.email}</span>
                  <code>{venue.contact.phone}</code>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues;
