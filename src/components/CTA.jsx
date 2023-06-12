import React from 'react'
  import { location,phone,mail } from '../Assets'
  
  const CTA = () => {
    return (
      <section className='hidden bg-white px-14 cta-box mx-14 font-Montserrat md:block'>
            <div className="flex items-center justify-between w-full py-10 navbar">
                
                    <img src={location} alt="task-mate" className="w-[75px] h-[50px]"></img>

                <div>
                    <span className='text-lg font-bold'>Pay Us a Visit</span><br />
                    <span className='text-sm'>Pulincunnu, Alappuzha, Kerala, India</span>  
                </div>


                 <div>
                    <img src={phone} alt="task-mate" className="w-[75px] h-[50px]"></img>
                </div> 
                <div>
                    <span className='text-lg font-bold'>Give Us a Call</span><br />
                    <span className='text-sm'>+91 9656 8765 34</span>  
                </div>


                 <div>
                    <img src={mail} alt="task-mate" className="w-[75px] h-[50px]"></img>
                </div> 
                <div>
                    <span className='text-lg font-bold'>Send Us a Message</span><br />
                    <span className='text-sm'>info@taskmate.com</span>  
                </div>

        </div>
      </section>
    )
  }
  
  export default CTA
  