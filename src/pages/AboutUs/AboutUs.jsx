import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div>

            <h2 className="text-3xl text-center text-orange-400 mb-10">Meet our team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">


            <div className="hero min-h-screen bg-base-200 zoom">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/brGrVFB/people1.jpg" alt="" />
      <h1 className="text-5xl font-bold pt-6">Alfred Molina</h1>
      <h1 className="text-sm font-bold pt-6">Event Manager</h1>
      <p className="py-6">The visionary orchestrator of memorable experiences, directing every detail for flawless event execution</p>
      <span className="flex justify-center gap-5"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><FaInstagram></FaInstagram></span>
    </div>
  </div>
</div>



            <div className="hero min-h-screen bg-base-200 zoom">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/Thj8GZs/people3.webp" alt="" />
      <h1 className="text-5xl font-bold pt-6">Amy Winehouse</h1>
      <h1 className="text-sm font-bold pt-6">Event Coordinator</h1>
      <p className="py-6">The behind-the-scenes maestro, ensuring smooth logistics and flawless execution of events</p>
      <span className="flex justify-center gap-5"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><FaInstagram></FaInstagram></span>
    </div>
  </div>
</div>



            <div className="hero min-h-screen bg-base-200 zoom">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/HDsPj5h/people5.jpg" alt="" />
      <h1 className="text-5xl font-bold pt-6">Jack Daniels</h1>
      <h1 className="text-sm font-bold pt-6">Marketing Specialist</h1>
      <p className="py-6">The creative promoter, crafting strategies that captivate audiences and drive event attendance</p>
      <span className="flex justify-center gap-5"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><FaInstagram></FaInstagram></span>
    </div>
  </div>
</div>



            <div className="hero min-h-screen bg-base-200 zoom">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/MhSQnVM/people6.jpg" alt="" />
      <h1 className="text-5xl font-bold pt-6">Guy Ritchie</h1>
      <h1 className="text-sm font-bold pt-6">Venue Manager</h1>
      <p className="py-6">The architectural matchmaker, discovering ideal event settings and perfecting the ambiance</p>
      <span className="flex justify-center gap-5"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><FaInstagram></FaInstagram></span>
    </div>
  </div>
</div>



            <div className="hero min-h-screen bg-base-200 zoom">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/8x46r7f/people4.jpg" alt="" />
      <h1 className="text-5xl font-bold pt-6">Joshua Samson</h1>
      <h1 className="text-sm font-bold pt-6">Logistics Manager</h1>
      <p className="py-6">The precision organizer, orchestrating seamless transport, accommodation, and on-site operations</p>
      <span className="flex justify-center gap-5"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><FaInstagram></FaInstagram></span>
    </div>
  </div>
</div>



            <div className="hero min-h-screen bg-base-200 zoom">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/smDhgns/people2.webp" alt="" />
      <h1 className="text-5xl font-bold pt-6">Homer Simpson</h1>
      <h1 className="text-sm font-bold pt-6">Vendor Coordinator</h1>
      <p className="py-6">The vendor whisperer, fostering partnerships and ensuring every supplier aligns with the events vision</p>
      <span className="flex justify-center gap-5"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><FaInstagram></FaInstagram></span>
    </div>
  </div>
</div>


            </div>

        </div>
    );
};

export default AboutUs;