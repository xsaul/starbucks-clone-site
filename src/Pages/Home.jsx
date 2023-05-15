import React from 'react'
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import Rewards from "../Components/Rewards"
import Footer from "../Components/Footer"

function Home() {
  return (
    <div>
      <Hero />
     <Banner title="Little choices, big changes" text="In celebration of earth week, we’re sharing simple planet-positive tips for your next Starbucks visit. Together we can help reduce waste and make an impact." button="Learn more" image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83612.jpg" direction="bg-[#d4e9e2] flex flex-row-reverse mt-[5.5rem]" />
     <Banner title="Uplifting anytime" text="Recharge with a lively Brown Sugar Oatmilk or Toasted Vanilla Oatmilk Shaken Espresso—140 calories or less in a grande." button="Order now" image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83269.jpg" direction="bg-[#f6bfd9] flex mt-[5.5rem]"/>
     <Banner title="Go for goodness" text="Choose our tasty Kale & Mushroom Egg Bites with cage-free eggs and Monterey Jack cheese." button="Order now" image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83619.jpg" direction="bg-[#fff4d4] flex flex-row-reverse mt-[5.5rem]"/>
     <Rewards />
     <Footer />
    </div>
  )
}

export default Home