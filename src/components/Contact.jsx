import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";
import bg from "../assets/contact.jpg"
import Yellow from "./Yellow";
const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
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
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            `url(${bg})`,
            opacity:1
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold  animated-text">Contact us</h1>
          </div>
        </div>
      </div>
      <div className="form-sec text-center mt-12">
        
        <Yellow text={"Connect with us"}/>

      </div>
      <form onSubmit={handleSubmit} className="mt-12">
          <div className="px-28 lg:flex items-center justify-between">
            <div className="address basis-[45%]">
            <Info text={"Phone"} isPhone={true} des={"+1 202 988 2180"}/>
            <Info text={"Mail"} des={"hopetruckingsolutions@gmail.com "}/>
            </div>
            <div className="form-details  basis-[50%] min-h-[80vh]">
              <label className="form-control max-w-screen-lg">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input

                  type="text"
                  placeholder="First Name"
                  className="input input-bordered border-2 border-black max-w-screen-lg  bg-inherit rounded-none"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control max-w-screen-lg">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input  border-2 rounded-none border-black max-w-screen-lg bg-inherit"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control max-w-screen-lg">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input  border-2 rounded-none border-black max-w-screen-lg bg-inherit"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="form-control  max-w-screen-lg">
                <div className="label">
                  <span className="label-text">Subject</span>
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input  border-2 rounded-none border-black  max-w-screen-lg  bg-inherit"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              <span className="label-text">Message</span>
              <textarea
                required
                placeholder=" "
                className="mt-2 textarea bg-inherit rounded-none border-2 border-black textarea-bordered textarea-lg w-full max-w-screen-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="px-8 py-4 my-4 mt-12 rounded-lg bg-[#e9b23f] font-bold text-black">Send message</button>
            </div>
          </div>
        </form>
    </div>
  );
};

export default Contact;
