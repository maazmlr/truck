import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Yellow from './Yellow'
import RightLeft from './RightLeft'
import UserReviewComponent from './UserReviewComponent'
import left from '../assets/trucker.jpg'
import bg from "../assets/homgbg.jpg"
import computer from "../assets/homec.jpg"
import box from "../assets/boxtruck.jpg"
import reefer from "../assets/reefer.jpg"
import step from "../assets/stepdeck.jpg"
import dry from "../assets/dry.jpg"
import flat from "../assets/falt.jpg"
import power from "../assets/power.jpg"
import hot from "../assets/hot.jpg"
import rev from "../assets/review.jpg"

const Home = () => {
  const RightHead="About Hope Trucking Solutions"

  const review = {
    name: 'Henry Smith',
    profilePicture: rev,
    text: `These folks are fantastic in dispatching my three trucks. Both my drivers and I are happy with them. I've seen a minimum 30% improvement in profit margins since I began working with them. I own a dry van and two reefers. Their communication is excellent.`,
    city:"Allen, Texas"
  };
  const review2 = {
    name: 'Roberto Martinez',
    profilePicture: rev,
    text: `Hope Trucking Solutions is fantastic, I hope. This business satisfies every need a truck driver could have for a dispatch service. They phone you with loads for the following day, haggle with the brokers to obtain excellent rates, and take care of obtaining updated rate confirmations for layovers and detention compensation. I'm happy they are employed by our organization!`,
    city:"Fresno, Georgia"
  };
  const review3 = {
    name: 'Jack Taylor',
    profilePicture: rev,
    text: `I am an owner-operator with a highly selective disposition. I always want the best loads. They've been my employer for more than a year, and they still provide the greatest dispatching service. My morning drops always leave me with lots ready to harvest. I would still be under a lot of stress trying to book my own loads if it weren't for them. I heartily endorse them!`,
    city:"Phoenix, Arizona"
  };
  const review4 = {
    name: 'George Williams',
    profilePicture: rev,
    text: `They are skilled at selecting the ideal loads for me. None of the truck dispatch services I've worked with have shown as much concern for my business as Hope Trcuking Solutions. For me, they significantly lessened headaches and tension. I'm content with these men. They are providing me with incredible lanes and rates. I wish I had discovered them sooner.`,
    city:"Riverside, California "
  };
  return (
    <div>
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="">
    <div className="">
      <h1 className="mb-5 text-8xl text-center font-bold animated-text underline">Hope Trucking Solutions</h1>
      <p className='text-4xl text-center mt-8 text-white font-mono'>Every Journey You Take Moves You Closer to Success</p>
      
    </div>
  </div>
</div>
<RightLeft body={"Hope Trucking Solutions specializes in providing independent truck dispatch service, operated by a group of skilled dispatchers, to assist those in need of high paying loads, especially Owner Operator and Small fleet owners to Maximize their revenues. We are committed to providing our customers with quality services and working closely with you to develop the best dispatching plan for your Trucks. We also provide dedicated dispatchers for best dispatching experience."} right={RightHead} left={left}/>
<Yellow text={"JOIN THE BEST  DISPATCH COMPANY"}/>
<div className="service-sec flex justify-evenly p-2 bg-black flex-wrap">
  <Card title={"Dry Van"} img={dry}/>
  <Card title={"Step Deck"} img={step}/>
  <Card title={"Reefer"} img={reefer}/>
  <Card title={"Flat Bed"} img={flat}/>
  <Card title={"Hot Shot"} img={hot}/>
  <Card title={"Power Only"} img={power}/>
  <Card title={"Straight/ Box Truck"} img={box}/>
</div>
<Yellow text={"Viable Communication"}/>
<RightLeft left={computer} right={"Quality Communication"} body={"Our experienced Truck Dispatcher are dedicated to transporting goods efficiently and safely. We train all of our employees to make sure that transfers are done seamlessly so that time is not lost in transition. In addition our dispatcher not only provides services daytime or evening time but we also provide third shift dispatch for our clients. Prior to permitting us to work with drivers, we cause our dispatcher to go through three-month preparing for their experience"}/>
<Yellow text={"What Our Clients Says"}/>
<div className='lg:flex p-8'>
<UserReviewComponent review={review}/>
<UserReviewComponent review={review2}/>
<UserReviewComponent review={review3}/>
<UserReviewComponent review={review4}/>
</div>
    </div>
  )
}

export default Home