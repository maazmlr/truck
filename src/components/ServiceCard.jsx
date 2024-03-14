import React from 'react'

const ServiceCard = ({head ,img ,text}) => {
  return (
    <div className='w-[20rem]  mx-1 mb-4 border-4 border-black'>
        <img src={img} alt="" className='h-52 w-[100%]'/>
        <p className='my-4 text-center  d text-3xl font-semibold'>{head}</p>
        <p className='m-2 w-[95%] '>{text}</p>

    </div>
  )
}

export default ServiceCard