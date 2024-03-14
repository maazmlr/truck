import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RightLeft from './RightLeft'
import ServiceCard from './ServiceCard'
import service from "../assets/service.jpg"
import box from "../assets/boxtruck.jpg"
import reefer from "../assets/reefer.jpg"
import step from "../assets/stepdeck.jpg"
import dry from "../assets/dry.jpg"
import flat from "../assets/falt.jpg"
import power from "../assets/power.jpg"
import hot from "../assets/hot.jpg"
import bg from "../assets/serviceBg.jpg"
const Service = () => {
  return (
    <div>
        <div className="hero min-h-[70vh]" style={{backgroundImage: `url(${bg})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold animated-text">Services</h1>
  
    </div>
  </div>
</div>
            <RightLeft body={"Hope trucking Solutions specializes in providing support to trucking companies to find the best cost of transport. Our truck dispatchers will assist and guide you in the easiest way possible, which is best for you and your drivers. Our truck dispatchers will mediate at the highest rates and work with you to provide you with load options. West haul Dispatching Services has experienced truck dispatchers who will bring you together directly with Shippers, haulers and brokers. You can easily work with the best haulers, brokers and shippers who will pay you directly. You won’t leave your truck standing for a day because our truck dispatchers will keep you on the job. Our truck dispatchers will look at multiple load boards and catch you the best load with maximum rate per mile. our dispatcher will work closely with you and your driver to offer your praffered lane."} left={service}/>
            <div className="cards flex flex-wrap justify-center px-4">
                <ServiceCard head={"Dry Van"} text={"Dry vans ensure great help to clients across the US by keeping the client’s goods entirely safe during their journey. To oblige your clients to the best, there is a dire need for a user-friendly and honest dry van dispatch service. do not look further but count on West haul Dispatching Services as we have maintained strong relationships with drivers."} img={dry}/>
                <ServiceCard head={"Step Deck"} text={"Undoubtedly, moving oversized and overweight cargo is a herculean task, we better understand the logistics and the required industry standards to keep your business running smoothly. We can help you research and evaluate potential loads, negotiate prices and rates, and produce and complete all documentation required by industry regulations and practices."} img={step}/>
                <ServiceCard head={"Reefer"} text={"You and your reefer truck are already providing an excellent service to your customers. But, to continue offering this level of service, you need a dispatcher you can No doubt, you are offering an excellent service to your valued clients along with your reefer truck. However, a trusted and reliable dispatcher is always needed to maintain the same level of service. The dispatcher must be responsible, and expert and should have a positive attitude towards your business to keep it running meaningfully."} img={reefer}/>
                <ServiceCard head={"Flat Bed"} text={"Being a heavy-duty vehicle, the flatbed truck is significantly contributing to the national economy as compared to other vehicles. We feel the pride to assist our valued clients and ensure to provide them with up-to-the-mark dispatch services that are fair enough to oblige your end-user clients."} img={flat}/>
                <ServiceCard head={"Hot Shot"} text={"Being a heavy-duty vehicle, the flatbed truck is significantly contributing to the national economy as compared to other vehicles. We feel the pride to assist our valued clients and ensure to provide them with up-to-the-mark dispatch services that are fair enough to oblige your end-user clients."} img={hot}/>
                <ServiceCard head={"Power Only"} text={"We provide owners and truck fleets with power-only dispatch services. The team at West haul Dispatching Services is committed to providing independent owners and truck fleets with power-only loads as well whenever you need to transport equipment on a flatbed truck, dry van, refrigerated truck, shipping container or tank trailer. We ensure to get our client the best possible power-only transportation solution for any transportation purpose."} img={power}/>
                <ServiceCard head={"Straight / Box Truck"} text={"We offer reliable Boxtruck delivery service to businesses in industries such as manufacturing, automotive, landscaping, construction, steel, agriculture and HVAC. You can rely on our dedicated staff to provide you with the best transportation solutions for your business."} img={box}/>
            </div>
    </div>
  )
}

export default Service