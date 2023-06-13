import styles from "../style";
import { logo } from "../Assets";
import { footerLinks, socialMedia } from "../constants";
// import DownloadButton from "./DownloadButton";git init

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col font-Montserrat`}>
    <div className={`md:flex-row flex-col md:mb-8 w-full flex justify-center md:items-start `}>
      
      <div className="relative flex flex-col items-center flex-1  p-[6px] gradient-border-right ">
        
        <div>
            <img src={logo} alt="tm_logo" className="object-contain h-auto w-[150px] md:hidden mt-10"  />
          
        </div>
        <div className="p-2 md:hidden ">
          <h3 className="text-xl font-bold">TASK MATE</h3>
        </div>
            <div className="text-sm font-normal text-center md:hidden">
          <p>
            Building No 2255 <br />

            Pulincunnu P O, 688504 <br />

            Alappuzha Distict, Kerala <br />

            India
          </p>
        </div>
                 

<img src={logo} alt="task_logo" className="w-[200px] h-auto object-contain hidden md:block"  />
      </div>
     
     <div className="mx-8 " >
  <div className="flex flex-row flex-wrap items-center justify-center gap-20 mx-8 text-center md:text-left md:justify-start gradient-border-right">
    <div className="flex flex-col md:flex-row ">
  
      <ul className="pr-10 text-sm font-semibold">
        {footerLinks.slice(0, 4).map((link) => (
          <li key={link.id} className="py-2">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col pr-10 md:flex-row gradient-border-right">

      <ul className="text-sm font-semibold">
        {footerLinks.slice(4, 8).map((link) => (
          <li key={link.id} className="py-2">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
          </div>
         
  </div>
</div>

      
      



      <div className="flex-[1] w-full flex flex-col md:justify-evenly md:ml-10 md:items-start ">
        <h1 className="hidden my-3 text-sm font-semibold md:text-left font-Montserrat md:item-center md:block">Keep Connected With Task Mate</h1>
        <h1 className="my-3 text-[12px] font-bold md:text-left font-Montserrat item-center md:hidden text-center">STAY CONNECTED WITH US</h1>

        <div className="flex flex-row flex-wrap items-center justify-center gap-5 my-3 text-center md:text-left md:justify-start">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="md:w-[21px] md:h-[21px] object-contain cursor-pointer w-[30px] h-[30px]"
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
        <div className="w-full my-3">
           <button type="button" className={`hidden md:block rounded-full py-4 px-14 font-Montserrat font-medium text-[12px]   text-white bg-button-gradient outline-none ${styles}`}>
    Download Now
  </button>

        </div>
        
      </div>
     
    </div>

    <div className="w-full flex items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] justify-center ">
      <p className="font-Montserrat text-center md:text-xs text-[10px] leading-[27px] text-darkGray font-medium px-2">
        2023 © <span className="font-bold text-tmgreen">TASK MATE </span> LANDING PAGE BY &nbsp;
        <span className="font-bold text-tmgreen">PRASANTH V C</span>&nbsp; <br className="md:hidden" />

         ALL RIGHTS RESERVED. 
      </p>
    </div>

    
    
  </section>
  
);

export default Footer;
