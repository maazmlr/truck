import React from 'react'

const RightLeft = ({body,right,left}) => {
  return (
<div className="about-sec lg:flex px-12 text-center lg:px-32 py-4">
<div className="left animated-text  lg:w-[60%] mr-12">
{
  right?
<p className=' text-4xl font-bold   mt-4'>
  {right}
</p>
:null
}
<p className='text-xl '>
  {body}
</p>

</div>
<div className="right lg:w-[50%] ">
  <img src={left} alt="" className='h-[100%] animated-text' />
</div>
</div>  )
}

export default RightLeft