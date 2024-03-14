import React from 'react'

const Card = ({img,title}) => {
  return (
    <div>
        <div className="card lg:w-80 bg-inherit shadow-xl mr-2">
  <figure><img src={img} alt="Shoes" className='  lg:h-52 w-full '/></figure>
  <div className="card-body ">
    <h2 className="card-title underline text-center justify-center text-2xl font-bold text-white">{title}</h2>
    
  </div>
</div>
    </div>
  )
}

export default Card