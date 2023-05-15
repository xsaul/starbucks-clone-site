import React from 'react'

function Hero() {
  return (
    <section className='flex'>
      <div className='w-1/2'>
      <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83498.jpg" alt="starbucks-rewards" />
      </div>
      <div className='bg-[#d4e9e2] w-1/2 px-[3.2rem] flex flex-col justify-center align-center'>
        <h1 className='text-[#1e3932] text-3xl font-bold mt-[-1rem]'>Spring in your step, Rewards in your cup</h1>
        <p className='my-[1.8rem] text-xl text-[#006241] px-[1rem]'>Shake up your usual and start earning Rewards —join today!*</p>
        <button className="hover:bg-slate-100 rounded-[10rem] py-[0.4rem] border-[1px] border-black px-4 w-1/4 ml-[13.5rem]">Join now</button>
      </div>
    </section>
  )
}

export default Hero