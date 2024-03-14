import React from 'react'

const AboutCard = ({url,text,heading}) => {
  return (
    <div className='text-center lg:w-[32%] m-1'>
        <img src={url} alt="" className='rounded-full h-52 border-4 block mx-auto  border-black my-4 ' />
        <h2 className='my-4 text-black text-4xl font-semibold lg:text-xl uppercase	'>{heading}</h2>
        <p className='mb-4 text-2xl lg:text-sm'>{text}</p>


    </div>
  )
}

export default AboutCard