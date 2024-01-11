import Marquee from "react-fast-marquee";

const ClientFeedback = () => {
    return (



        <>
        

            <h2 className="text-3xl text-center">Client feedbacks</h2>

            <Marquee speed={250}>

            <div className="grid grid-cols-6 my-10">


            <div className="flex flex-col item-center text-center mx-auto gap-2">

            <div>
                <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/rwmLqw8/profile1.jpg" alt="" />
        </div>
        <p>Jessica Chastein</p>
        <div className="rating gap-1 mx-auto">
  <input type="radio" name="rating-1" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-1" className="mask mask-heart bg-orange-400"/>
  <input type="radio" name="rating-1" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-1" className="mask mask-heart bg-lime-400"  checked />
  <input type="radio" name="rating-1" className="mask mask-heart bg-green-400" />
</div>
<span className="w-1/4 mx-auto">&quot;Our wedding was a dream come true, thanks to the exceptional team at Dreamcraft Events. They handled every detail with precision and made our day perfect&quot;</span>
            </div>



            <div className="flex flex-col item-center text-center mx-auto gap-2">

            <div>
                <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/TmYjr3Q/profile2.jpg" alt="" />
        </div>
        <p>Angie Yue</p>
        <div className="rating gap-1 mx-auto">
  <input type="radio" name="rating-2" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-2" className="mask mask-heart bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-2" className="mask mask-heart bg-lime-400"  />
  <input type="radio" name="rating-2" className="mask mask-heart bg-green-400" checked />
</div>
<span className="w-1/4 mx-auto">&quot;Dreamcraft Events delivered a professional and well-organized conference. Our attendees were impressed with the seamless experience.&quot;</span>
            </div>



            <div className="flex flex-col item-center text-center mx-auto gap-2">

            <div>
                <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/YNwqxs5/profile3.jpg" alt="" />
        </div>
        <p>Debora Ann Wolf</p>
        <div className="rating gap-1 mx-auto">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"/>
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400"  checked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
<span className="w-1/4 mx-auto">&quot;The Summer Music Festival organized by Dreamcraft Events was a blast! We enjoyed every moment and cant wait for next year.&quot;</span>
            </div>




            <div className="flex flex-col item-center text-center mx-auto gap-2">

            <div>
                <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/d2g0BZG/profile4.jpg" alt="" />
        </div>
        <p>Dan Harmon</p>
        <div className="rating gap-1 mx-auto">
  <input type="radio" name="rating-4" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-4" className="mask mask-heart bg-orange-400"/>
  <input type="radio" name="rating-4" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-4" className="mask mask-heart bg-lime-400"  checked />
  <input type="radio" name="rating-4" className="mask mask-heart bg-green-400" />
</div>
<span className="w-1/4 mx-auto">&quot;The product launch event was a huge success, and the attention to detail was outstanding. Thank you for a remarkable experience!&quot;</span>
            </div>




            <div className="flex flex-col item-center text-center mx-auto gap-2">

            <div>
                <img className="w-[250px] h-[250px] rounded-full mx-auto" src="https://i.ibb.co/dKfJWkk/profile5.jpg" alt="" />
        </div>
        <p>Rishi Sunak</p>
        <div className="rating gap-1 mx-auto">
  <input type="radio" name="rating-5" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-5" className="mask mask-heart bg-orange-400"/>
  <input type="radio" name="rating-5" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-5" className="mask mask-heart bg-lime-400"/>
  <input type="radio" name="rating-5" className="mask mask-heart bg-green-400"   checked  />
</div>
<span className="w-1/4 mx-auto">&quot;Dreamcraft Events helped us raise a significant amount for our charity. The evening was elegant, and guests were delighted with the ambiance.&quot;</span>
            </div>




            <div className="flex flex-col item-center text-center mx-auto gap-2">

            <div>
                <img className="w-[250px]  h-[250px] rounded-full mx-auto" src="https://i.ibb.co/W2H43Kj/profile6.jpg" alt="" />
        </div>
        <p>Mukesh Vawra</p>
        <div className="rating gap-1 mx-auto">
  <input type="radio" name="rating-6" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-6" className="mask mask-heart bg-orange-400"/>
  <input type="radio" name="rating-6" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-6" className="mask mask-heart bg-lime-400"  checked />
  <input type="radio" name="rating-6" className="mask mask-heart bg-green-400" />
</div>
<span className="w-1/4 mx-auto">&quot;The gala dinner organized by Dreamcraft Events was a night to remember. The decor, cuisine, and atmosphere were exceptional. We had a fantastic time!&quot;</span>
            </div>





            </div>
            </Marquee>


        </>

    );
};

export default ClientFeedback;