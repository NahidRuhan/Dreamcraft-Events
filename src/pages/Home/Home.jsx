import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ClientFeedback from "./ClientFeedback";
import SideNav from "./SideNav";
import ServicesCard from "./ServicesCard";

const Home = () => {
    const services = useLoaderData();
    console.log(services)

    return (
        <div>
                <div className="hidden lg:block"><Banner></Banner></div>
            <div className="flex flex-col md:grid grid-cols-4 gap-10 my-20">
                <div className="flex flex-col gap-5 col-span-3">
                {
                    services.map((service) =><ServicesCard key={service.id} id={service.id} service={service.inside}></ServicesCard>)
                }
                <div className="md:hidden"><Banner></Banner></div>
                </div>
                <SideNav></SideNav>
            </div>
            <ClientFeedback></ClientFeedback>
        </div>
    );
};

export default Home;