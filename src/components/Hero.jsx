import styles from "../style";
import { arrow, mobilehero, heroo } from "../Assets";
import CTA from "./CTA";

const Hero = () => {
  return (
    <div>
    <section id="home" className={`flex md:flex-row flex-col-reverse md:py-8 md:pb-0 mb-0 py-2`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px3 sm:pl-16 px-4 `}>

         {/* percentage offer */}
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-green">20%</span> Discount For{" "}
            <span className="text-green">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row items-center justify-between w-full sm:pt-3">
          <h1 className="flex-1 font-Montserrat font-bold ss:text-[72px] md:text-[52px] text-darkGray ss:leading-[100.8px] md:leading-[75px] text-[32px] md:text-left text-center">
            <span className="font-bold hero-text-gradient">Success</span>{" "}
            <span className="font-semibold text-black">is not Easy.</span>{" "}
            
          </h1>

        </div>

        <h1 className="font-Montserrat font-semibold ss:text-[68px] md:text-[52px] text-darkGray ss:leading-[100.8px] md:leading-[75px] w-full text-[32px] md:text-left text-center">
          So don't be {" "}
          <span className="font-bold text-green hero-text-gradient2">Lazy.</span>{" "}
        
        </h1>
        <p className={`${styles.paragraph2} max-w-[470px] mt-5 hidden md:block md:text-sm`}>
          Simplify your schedule with Task Mate. <br/>
          Set reminders, earn rewards, stay organized. <br/>
          Never miss a task again. <br />
          </p>
           <div className="flex items-center">
  <button type="button" className={`hidden md:block rounded-full my-10 py-3 px-6 font-Montserrat font-medium text-[12px] text-white bg-button-gradient outline-none `}>
    Login / Sign Up For Use
  </button>
  <img src={arrow} alt="arrow_icons" className="w-[40px] h-[100%] md:block hidden ml-10" />
</div>
          
        </div>
       

     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
  <img src={heroo} alt="hero_icon" className="w-[100%] h-[100%] relative z-[5] md:block hidden" />
  <img src={mobilehero} alt="mobile_hero_icon" className="block md:hidden w-[75%] h-[100%] relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      

 
    </section>
     <CTA />
      </div>
  );
};

export default Hero;
