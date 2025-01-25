import React from 'react'
const Title = ({ title, desc }) => {
  return (
    <section className="py-12">
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-4xl text-blue-900 font-bold capitalize relative">
        {title}
        <span className="absolute left-0 bottom-[-6px] w-16 h-[2px] bg-blue-400"></span>
      </h2>
      {desc && <h3 className="text-2xl font-bold text-black mt-2">{desc}</h3>}
    </div>
  </section>
  );
};


  

export default Title
