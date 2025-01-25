import React from 'react'
import Title from '../title/Title'
import {BiBriefcase,BiCalendar,BiSolidBinoculars,BiBrightness}  from 'react-icons/bi'

const Services = () => {
  return (
<section id='services' className="w-full h-auto flex flex-col lg:px-20 px-4">
<div className="w-auto relative">
<Title title="Services"/>
<h2 className='text-sm text-black font-medium mb-2'>
I specialize in software development and provide comprehensive ICT support, 
solving any computer-related challenges you may face.
</h2>
<div className='mt-8 grid lg:grid-cols-3 gap-4'>
<div className='flex gap-6 '>
<div className='text-white text-6xl border 
hover:border-blue-400 rounded-full p-2 bg-blue-400 hover:bg-white hover:text-blue-400'>
<BiBriefcase/>
</div>
<div className='flex flex-col '>
<h3 className='text-sm text-black font-medium mb-4 capitalize hover:text-blue-400'>
ICT support
</h3>
<p className='text-sm text-black font-normal mb-2'>
Installations, Upgrade of Softwares, Troubleshooting etc
</p>
</div>
</div>
<div className='flex gap-6 '>
<div className='text-white text-6xl border 
hover:border-blue-400 rounded-full p-2 bg-blue-400 hover:bg-white hover:text-blue-400'>
<BiSolidBinoculars/>
</div>
<div className='flex flex-col '>
<h3 className='text-sm text-black font-medium mb-4 capitalize hover:text-blue-400'>
Web Applications.
</h3>
<p className='text-sm text-black font-normal mb-2'>
Design of web applications & Mantainance
</p>
</div>
</div>
<div className='flex gap-6 '>
<div className='text-white text-6xl border 
hover:border-blue-400 rounded-full p-2 bg-blue-400 hover:bg-white hover:text-blue-400'>
<BiBrightness/>
</div>
<div className='flex flex-col '>
<h3 className='text-sm text-black font-medium mb-4 capitalize hover:text-blue-400'>
Web Development
</h3>
<p className='text-sm text-black font-normal mb-2 '>
Design Websites
</p>
</div>
</div>
<div className='flex gap-6 mt-5'>
<div className='text-white text-6xl border 
hover:border-blue-400 rounded-full p-2 bg-blue-400 hover:bg-white hover:text-blue-400'>
<BiCalendar/>
</div>
<div className='flex flex-col '>
<h3 className='text-sm text-black font-medium mt-4 capitalize hover:text-blue-400'>
Deisgn
</h3>
<p className='text-sm text-black font-normal mb-2'>
Digital Cards, Logo Posters
</p>
</div>
</div>
</div>
</div>
</section>
  )
}

export default Services
