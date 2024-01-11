import { useLoaderData, useParams } from "react-router-dom";
import SideNav from "../Home/SideNav";
import { useState } from "react";
import { useEffect } from "react";

const ServiceDetail = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const [details,setDetails] = useState({})

    useEffect(()=>{
        if(data.length && id){
            const item = data.find(item=>item.id ==id )
            setDetails(item.inside.details)
   
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    // console.log(details.imageGallery)

    console.log("This is : ",details)

    const {serviceName,description,imageGallery,pricing,keyFeatures,availability,benefits,bookingInformation,faq,relatedServices,contactInformation,callToAction} = details
    


    // return (
    //     <div className="grid grid-cols-4 gap-10 my-20">
    //         <div className="flex flex-col gap-5 col-span-3">


    //         <div className="p-4 bg-gray-100">
    //         <h1 className="text-3xl font-bold">{details.serviceName}</h1>
    //         <p className="text-gray-600">{details.description}</p>
    //         <h2 className="text-2xl font-bold mt-4">Image Gallery</h2>
    //         <div className="grid grid-cols-3 gap-4 mt-2">
    //         {/* {details.imageGallery.map((img,ind)=><img key={ind} src={img}></img>)} */}
    //       </div>
    //         </div>


    //         </div>

            // <div>
            //     <SideNav></SideNav>
            // </div>

    //     </div>
    // );

    return (

                <div className="flex flex-col lg:grid grid-cols-4 gap-10 my-20">
            <div className="flex flex-col gap-5 col-span-3">

        <div className="p-4">
          <h1 className="text-3xl font-bold">{serviceName}</h1>
          <p className="text-gray-600">{description}</p>
    
          <div className="grid grid-cols-3 gap-4 mt-2">
            {imageGallery?.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} className="w-full h-full" />
            ))}
          </div>
    
          <h2 className="text-2xl font-bold mt-4">Pricing</h2>
          <ul className="list-disc list-inside mt-2">
            <div className="flex flex-col lg:grid grid-cols-2">
            {pricing?.packages.map((pac, index) => (
              <div key={index} className="mb-2 grid grid-cols-2">
               <div className="card bg-primary text-primary-content w-96">
  <div className="card-body text-center">
    <h2 className="font-bold">{pac.name}</h2>
    <p>{pac.description}</p>
    <button className="btn text-green-600">Price: {pac.price}</button>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
              </div>
            ))}
            </div>
    
          </ul>
          <p className="text-gray-600 mt-2">{pricing?.additionalFees}</p>
    
          <h2 className="text-2xl font-bold mt-4">Key Features</h2>
          <ul className="list-disc list-inside mt-2">
            {keyFeatures?.map((feature, index) => (
              <li key={index} className="mb-2">
                <span className="text-green-600"></span> {feature}
              </li>
            ))}
          </ul>

    
          <h2 className="text-2xl font-bold mt-4">Availability</h2>
          <p className="text-gray-600">{availability}</p>
    
          <h2 className="text-2xl font-bold mt-4">Benefits</h2>
          <p className="text-gray-600">{benefits}</p>
    
          <h2 className="text-2xl font-bold mt-4">Booking Information</h2>
            <p className="text-gray-600">Contact: {bookingInformation?.contactName}</p> 
         <p className="text-gray-600">Email: {bookingInformation?.email}</p>
          <p className="text-gray-600">Phone: {bookingInformation?.phone}</p>

    
          <h2 className="text-2xl font-bold mt-4">Related Services</h2>
          <ul className="list-inside mt-2">
            {relatedServices?.map((relatedService, index) => (
              <li key={index} className="mb-2">
                <span className="text-green-600">•</span> {relatedService}
              </li>
            ))}
          </ul>
    
          <h2 className="text-2xl font-bold mt-4">Contact Information</h2>
          <p className="text-gray-600">Company Name: {contactInformation?.companyName}</p>
          <p className="text-gray-600">Address: {contactInformation?.address}</p>
          <p className="text-gray-600">Email: {contactInformation?.email}</p>
          <p className="text-gray-600">Phone: {contactInformation?.phone}</p>
    
          <h2 className="text-2xl font-bold mt-4">Call to Action</h2>
          <p className="text-gray-600">{callToAction}</p>
          <h2 className="text-2xl font-bold mt-4">FAQ</h2>
          <ul className="list-inside mt-2">
            {faq?.map((faq, index) => (
              <div key={index} className="mb-2">
              <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  {faq.question}
  </div>
  <div className="collapse-content"> 
    <p>{faq.answer}</p>
  </div>
</div>
              </div>
            ))}
          </ul>
        </div>

                    </div>

                    <div>
                <SideNav></SideNav>
            </div>

        </div>
      );
};

export default ServiceDetail;