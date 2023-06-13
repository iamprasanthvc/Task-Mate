import { mobilehero,google,apple, iphone } from "../Assets";

const MainCTA = () => {
  return (
    
    // Medium Screens
    
    <main id="" className="font-Montserrat">
      <section>
        
        {/* Medium Screens */}
        

        <div className="flex flex-col items-center justify-center bg-[#2ECC71] md:block hidden">
      <section id="home" className="flex flex-col-reverse items-center pb-0 mx-40 mb-0 md:flex-row">
       <div className="flex flex-col items-start justify-center md:items-center md:w-1/2 ">
  <h1 className="text-3xl font-bold text-center text-darkGray">
    <span className="font-semibold text-center text-white">Download The App <br />to get started</span>
  </h1>
  <p className={` max-w-[470px] mt-5 text-sm text-white text-center`}>
    Join the category of over 1 million people who are <br />
    using Task Mate to improve their lifestyle.
  </p>
  <div className="flex items-center my-8">
    <img src={apple} alt="apple_icons" className="mr-4" />
    <img src={google} alt="google_icons" />
  </div>
  <div className="">
    <button type="button" className={`rounded-full my-2 py-4 px-12   font-bold text-[12px] text-[#0077C9] bg-white outline-none `}>
      DOWNLOAD NOW
    </button>
  </div>
</div>

        <div className="w-1/2 py-16">
          <img src={mobilehero} alt="mobile_hero_icon" className="w-[60%] h-auto" />
        </div>
      </section>

      </div>   
      </section>






      <section>
 
        {/* Small Screens */}



        <div className="flex flex-col items-center justify-center md:hidden">
          <div className="w-full px-8 ">
            <div className="w-full h-full bg-transparent ">
              <div className="relative">
                <img src={iphone} alt="iphone_icon" />
                <p className=" absolute inline-block items-center px-2 pt-[90px] pb-12 text-2xl font-semibold justify-center
                 top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2">
                  Time is Precious Choose Accordingly <br /> Use <span className="text-tmgreen">Task Mate</span></p>
              </div>
           
          </div>
         </div>
          <div className="items-center justify-center bg-white px-15">
            <div className="flex flex-row">
  <div className="flex-1 py-4 pl-8 my-2">
    <h3 className="font-medium text-[12px] leading-4 text-tmgreen">Join the category of over 1 million people who are using Task Mate to improve their lifestyle.</h3>
  
     <button type="button" className={` rounded-full py-2 px-6 font-Montserrat font-medium text-[10px] text-white bg-button-gradient outline-none my-2`}>
    Download Now
  </button>
 </div>
  <div className="flex-1 px-4 py-4 my-2">
    <h4 className="mb-2 text-sm font-semibold text-left">Download The App <br /> To get started.</h4>
    <div className="flex flex-row ">
      <img src={apple} alt="apple_icon" className="w-[60px] mr-2" />
      <img src={google} alt="google_icon" className="w-[60px] " />
    </div>
  </div>
</div>

            
          </div>

               
        </div>
        
        
      </section>
      
       
      
    </main>
  );
};

export default MainCTA;
