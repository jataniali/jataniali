import {useRef} from 'react'
import Title from '../title/Title'
import emailjs from '@emailjs/browser';
import { BiLocationPlus,BiMessageDetail,BiPhone } from 'react-icons/bi';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();   
    emailjs
    .sendForm('service_csthhph', 'template_9wgpvxb', form.current, {
      publicKey: 'NWsDmmdBjEZUcadGk',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  
  return (
<section id='contact' className="w-full h-auto flex flex-col lg:px-20 px-4">
<div className="w-auto relative">
<Title title="Contact"/>
<h2 className='mb-6'>Fresh Perspectives, Let’s Collaborate, or Just Want to Connect?</h2>
</div >
<div className=' grid lg:grid-cols-2 mt-4'>
<div className='lg:w-1/2 bg-gray-200 lg:px-6 px-2 shadow-lg rounded-lg'>

<div className=' flex gap-4  mt-4  py-2'>
<div className=' text-3xl text-blue-400 border-[1px] bg-blue-200 rounded-full p-2
hover:bg-blue-400 hover:text-white '>
<BiLocationPlus/>
</div>
<div >
<h2 className='text-base font-bold'>Location</h2>
<p className='text-gray-700'>Nairobi</p>
</div>
</div>
<div className=' flex gap-4  mt-6'>
<div className=' text-3xl text-blue-400 border-[1px] bg-blue-200 rounded-full p-2 
hover:bg-blue-400 hover:text-white'>
<BiMessageDetail/>
</div>
<div >
<h2 className='text-base font-bold'>Email:</h2>
<p className='text-gray-700'>Jatanijeyalize@gmail.com</p>
</div>
</div>
<div className=' flex gap-4  mt-8 '>
<div className=' text-3xl text-blue-400 border-[1px] bg-blue-200 rounded-full
 p-2 hover:bg-blue-400 hover:text-white'>
<BiPhone/>
</div>
<div >
<h2 className='text-base font-bold'>
Call:</h2>
<p className='text-gray-700'>+254757455196</p>
</div>
</div>
<div className='mt-6'>
<div class="w-full h-[600px] rounded-xl shadow-2xl overflow-hidden">
  <iframe 
    class="w-full h-full border-0" 
    frameborder="0" 
    scrolling="no" 
    marginheight="0" 
    marginwidth="0" 
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kerarapon+(Jatani%20ali)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
    <a href="https://www.gps.ie/">gps devices</a>
  </iframe>
</div>
</div>
</div>

<form class="space-y-4 mt-4" ref={form} onSubmit={sendEmail}>

  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
    <input
      type="text"
      id="name"
      name="name"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Enter your name"
      required
    />
  </div>

 
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
    <input
      type="email"
      id="email"
      name="email"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Enter your email"
      required
    />
  </div>

 
  <div>
    <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
    <input
      type="text"
      id="subject"
      name="subject"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Enter the subject"
      required
    />
  </div>


  <div>
    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Enter your message"
      required
    ></textarea>
  </div>


  <div>
    <button
      type="submit"
      className="w-full px-4 py-2 bg-indigo-600 text-white 
      rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Send Message
    </button>
  </div>
</form>
</div>
</section>
  )
}

export default Contact
