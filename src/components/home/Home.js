import React from 'react'
import codelifeImage from '../../assets/images/codelife.jpeg';
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
words: ['Programmer', 'Developer', 'Designer', 'Freelancer!'],
loop: true,
typeSpeed:35,
deleteSpeed:15,
delaySpeed:2500
})
  return (
<section
  id="home"
  className="w-full h-screen flex items-center text-white bg-gray-950 relative"
>
  {/* Background Image */}
  <div
    style={{ backgroundImage: `url(${codelifeImage})` }}
    className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-contain sm:bg-top"
  ></div>

  {/* Overlay for Text Readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 w-full flex flex-col items-center p-5 text-center gap-3">
    <h2 className="text-sm sm:text-lg font-normal">Welcome To My World!</h2>
    <h1 className="text-2xl sm:text-4xl font-bold text-white">
      Hi, I'm <span className="text-designColor capitalize">Jatani Ali</span>
    </h1>
    <h2 className="text-3xl sm:text-6xl font-bold text-white">
      I'm a{" "}
      <span className="border-b-cyan-400 border-b-[1px]">{text}</span>.
      <Cursor
        cursorBlinking="false"
        cursorStyle="|"
        cursorColor="#ff014f"
      />
    </h2>
  </div>
</section>


  )
}

export default Home
