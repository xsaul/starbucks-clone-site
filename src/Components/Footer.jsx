import { BsSpotify, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <section className='px-[3rem]'>
      <div className='flex gap-x-5 my-[2.3rem] ml-[0.7rem]'>
        <a className='text-3xl hover:text-[#1e3932]' href="#">
        <BsSpotify />
        </a>
        <a className='text-3xl hover:text-[#1e3932]' href="#">
        <BsFacebook />
        </a>
        <a className='text-3xl hover:text-[#1e3932]' href="#">
        <BsTwitter />
        </a>
        <a className='text-3xl hover:text-[#1e3932]' href="#">
        <BsInstagram />
        </a>
      </div>
      <div className='flex gap-x-[1rem]'>
        <a className='border-r-2 border-slate-700 px-3 hover:text-[#1e3932]' href="#">Privacy Notice</a>
        <a className='border-r-2 border-slate-700 px-3 hover:text-[#1e3932]' href="#">Terms of Use</a>
        <a className='border-r-2 border-slate-700 px-3 hover:text-[#1e3932]' href="#">Do Not Share My Personal Information</a>
        <a className='border-r-2 border-slate-700 px-3 hover:text-[#1e3932]' href="#">CA Supply Chain Act</a>
        <a className='hover:text-[#1e3932]' href="#">Cookie Preferences</a>
      </div>
      <p className='text-slate-500 my-[1.6rem] ml-[0.7rem]'>© 2023 Starbucks Coffee Company. All rights reserved.</p>
    </section>
  )
}

export default Footer