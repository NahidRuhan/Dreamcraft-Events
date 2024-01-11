import PropTypes from 'prop-types'; // ES6
import { GrCurrency } from "react-icons/gr";
import { Link } from 'react-router-dom';

const ServicesCard = ({service,id}) => {

    const {name,image,price,description} = service

    return (
        <div data-aos="slide-right" data-aos-duration="1000">
            <div className="card card-compact bg-base-100 shadow-xl zoom">
  <figure><img data-aos="flip-right" src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold">{name}</h2>

    <p>{description}</p>
    <div className='flex flex-col gap-3'>
        <span className='flex items-center mx-auto gap-2 font-bold'><GrCurrency></GrCurrency>Price: {price}</span>
        <Link to ={`/news/${id}`}><button data-aos="zoom-in" className="btn btn-primary mx-auto w-auto">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

ServicesCard.propTypes = {
    service : PropTypes.object,
    id : PropTypes.object
}


export default ServicesCard;