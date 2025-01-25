import React, { useState } from 'react'
import Title from '../title/Title'
import All from './All'
import Frontend from './Frontend';

const Portfolio = () => {
  const[alldata,setAlldata]=useState(true);
  const[front,setFront]=useState(false);
  return (
<section id='portfolio' className="w-full h-auto flex flex-col lg:px-20 px-4">
  <div className="w-auto relative">
<Title title="  Project Portfolio."/>
{/* Underline */}
  </div>
<div className='flex mt-10 w-full items-center justify-center '>
<ul className='grid grid-cols-2 gap-8 border-4 px-10 rounded-full cursor-pointer'>
<li onClick={()=>setAlldata(true)& setFront(false)}
 className={`${alldata? " text-designColor rounded-full" :"border-transparent"
 } protfoliostyl`} >All</li>

<li 

onClick={()=>setFront(true) & setAlldata(false)} className={`${front? " text-designColor rounded-full" :"border-transparent"
} protfoliostyl`}>Front-end</li>
</ul>
</div>
{
  alldata && <All />
}
{
  front && <Frontend/>
}
</section>


  )
}

export default Portfolio
