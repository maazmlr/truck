import React, { useState } from "react";
import Yellow from "./Yellow";
import AboutCard from "./AboutCard";
import Info from "./Info";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import box from "../assets/boxtruck.jpg"
import reefer from "../assets/reefer.jpg"
import step from "../assets/stepdeck.jpg"
import dry from "../assets/dry.jpg"
import flat from "../assets/falt.jpg"
import power from "../assets/power.jpg"
import hot from "../assets/hot.jpg"
import bg from "../assets/about.jpg"
import mission from "../assets/mission.jpg"

const About = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit =async (event) => {
    event.preventDefault();

    // Log form values
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);


    const res=await axios.post("https://chat-sable-six-25.vercel.app/",{
      fullName:firstName,
      subject:subject,
      email:email,
      message:message
    })
    console.log(res)

    // Reset form inputs after submission (optional)
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  return (
    <div>
      <div
        className="hero min-h-[70vh] "
        style={{
          backgroundImage:
            `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold animated-text">About us</h1>
          </div>
        </div>
      </div>
      <div className="about min-h-[40vh]  lg:flex flex-row py-8 px-16 ">
        <div className="text basis-1/2 animated-text  border-solid border-2 rounded-xl mb-4 lg:m-0 border-black text-center px-4 py-20 text-xl">
          <h1 className="pb-8 text-3xl  text-black font-extrabold">Mission Statement</h1>
          <p className="lg:text-sm text-2xl ">
          At hope trucking solutions ,our mission is to deliver reliable and efficient freight management services that help our clients achieve their business goals.  We leverage technology, expertise, and innovation to optimize fleet performance, streamline logistics operations, and provide exceptional customer service. We are committed to building long-term partnerships with our clients based on trust, transparency, and mutual success.
          </p>
        </div>
        <div className="img basis-1/2 animated-text ml-2 mt-20">
          <img
            src={mission}
            className="rounded-lg min-h-[40vh]"
            alt=""
          />
        </div>
      </div>
      <Yellow text={"Our Truck Dispatchers Specialize"}/>
      <div className="cards flex flex-wrap justify-between px-20">
        <AboutCard url={dry} text={"Dry vans provide invaluable assistance to clients throughout the US, safeguarding their goods securely throughout transit. Meeting the needs of your clients effectively demands a user-friendly and trustworthy dry van dispatch service. Look no further than West Haul Dispatching Services, renowned for maintaining robust relationships with drivers."} heading={"Dry Van"}/>
        <AboutCard url={flat} text={"Managing oversized and overweight cargo undoubtedly presents significant challenges. We possess a deep understanding of logistics and adhere to industry standards to ensure the seamless operation of your business. Our services include researching and assessing potential loads, negotiating prices and rates, and handling all necessary documentation according to industry regulations and practices. Trust us to streamline your cargo operations effectively."} heading={"FLATBED / STEP DECK"}/>
        <AboutCard url={reefer} text={"You're already delivering exceptional service to your customers with your reefer truck. However, to sustain this standard, you require a dependable dispatcher. Ensuring the continuity of top-notch service demands a responsible, knowledgeable dispatcher with a positive outlook towards your business, ensuring its meaningful operation."} heading={"Reefer"}/>
        <AboutCard url={hot} text={"As a formidable heavy-duty vehicle, the flatbed truck plays a crucial role in bolstering the national economy, surpassing other vehicles in its impact. We take immense pride in supporting our esteemed clients, committed to delivering top-notch dispatch services that not only meet but exceed expectations, ensuring fairness and satisfaction for end-user clients."} heading={"Hotshot"}/>
        <AboutCard url={power} text={"Our team at West Haul Dispatching Services offers dedicated power-only dispatch services to both individual owners and truck fleets. Whether you require transportation for equipment on a flatbed truck, dry van, refrigerated truck, shipping container, or tank trailer, we're here to assist. Our commitment is to secure the optimal power-only transportation solution tailored to your specific needs, ensuring reliable and efficient service for any transportation requirement."} heading={"Power Only"}/>
        <AboutCard url={box} text={"We provide dependable Boxtruck delivery services catering to businesses across various industries including manufacturing, automotive, landscaping, construction, steel, agriculture, and HVAC. Count on our dedicated team to deliver tailored transportation solutions that meet the unique needs of your business"} heading={"Straight / Box Truck"}/>
      </div>
     
      <Yellow text={"Connect with us"}/>

      <div className="form bg-gray-300">
        
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="px-28 lg:flex  justify-between">
            <div className="address basis-[45%] mr-10">
            <Info text={"Phone"} isPhone={true} des={"+1 202 988 2180"}/>
            <Info text={"Mail"} des={"hopetruckingsolutions@gmail.com "}/>
            </div>
            <div className="form-details lg:flex flex-wrap justify-between basis-[65%] min-h-[80vh]">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered border-2 border-black w-full bg-inherit"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input  border-2 border-black w-full bg-inherit"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input  border-2 border-black w-full  bg-inherit"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Subject</span>
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input  border-2 border-black w-full  bg-inherit"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              <span className="label-text">Message</span>
              <textarea
                required
                placeholder=" "
                className="textarea mt-2 bg-inherit  border-2 border-black textarea-bordered textarea-lg w-full max-w-screen-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="px-8 py-4  inline-block mx-auto my-4  bg-[#e9b23f] font-bold rounded-lg text-black" >Send message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
