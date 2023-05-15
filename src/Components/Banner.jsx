import React from 'react'

function Banner({image, title, text, button, direction, background}) {
  return (
    <section className={direction}>
      <div className='w-1/2'>
        <img src={image} alt={title} />
      </div>
      <div style={background} className='w-1/2 px-[3.2rem] flex flex-col justify-center align-center'>
        <h1 className='text-[#1e3932] text-3xl font-bold ml-[3rem] mt-[-1rem]'>{title}</h1>
        <p className='my-[1.8rem] text-xl text-[#006241] px-[3rem] leading-8'>{text}</p>
        <button className="hover:bg-slate-100 rounded-[10rem] py-[0.4rem] border-[1px] border-black px-4 w-1/4 ml-[13.5rem]">{button}</button>
      </div>
    </section>
  )
}

export default Banner