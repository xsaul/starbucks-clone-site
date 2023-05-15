import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Footer from '../Components/Footer'
import Drink from "../Components/Drink"
import Food from "../Components/Food"

function Menu() {
  return (
    <main>
      <Tabs>
    <TabList className="flex bg-slate-200 py-3 px-[5rem] w-full gap-x-[1rem]">   
      <Tab className="cursor-pointer hover:text-[#1e3932]">Drinks</Tab>
       <Tab className="cursor-pointer hover:text-[#1e3932]">Food</Tab>
    </TabList>
    <TabPanel className="flex">
      <div>
      <div id='hot' className='py-[3rem] px-[5rem]'>
        <h1 className='mt-[-1rem] font-bold text-2xl border-b-[2px] border-b-slate-400 w-[8rem]'>Hot Drinks</h1>
        <div>
        <h2 className='my-[1.5rem] font-bold'>Hot Chocolates</h2>
        <div className='flex'>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_tight_288" drinkName="Hot Chocolate"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/6b385ad21e7245788eb2d2754ab6f823.jpg?impolicy=1by1_tight_288" drinkName="Hot Chocolate White"/>
        </div>
        </div>


        <div>
        <h2 className='my-[1.5rem] font-bold'>Juice</h2>
        <div className='flex'>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/39bab62a29214270b6b30eb838e2c5a6.jpg?impolicy=1by1_tight_288" drinkName="Caramel Apple Spice"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/a9e551eb323e4f0a93cf91b165916950.jpg?impolicy=1by1_tight_288" drinkName="Steamed Apple Juice"/>
        </div>
        </div>

        <div>
        <h2 className='my-[1.5rem] font-bold'>Americano</h2>
        <div className='flex'>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288" drinkName="Caffè Americano"/>
        </div>
        </div>

        <div>
        <h2 className='my-[1.5rem] font-bold'>Cappuccinos & Espresso Shots</h2>
        <div className='flex'>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_tight_288" drinkName="Cappuccinos"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_tight_288" drinkName="Espresso"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_tight_288" drinkName="Espresso con Panna"/>
        </div>
        </div>


      </div>

      <div id='cold' className='py-[3rem] px-[5rem]'>
        <h1 className='mt-[-1rem] font-bold text-2xl border-b-[2px] border-b-slate-400 w-[8rem]'>Cold Drinks</h1>
        <div>
        <h2 className='my-[1.5rem] font-bold'>Starbucks Refreshers™</h2>
        <div className='flex'>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/358b62402a844a3e9567d70a9790032f.jpg?impolicy=1by1_tight_288" drinkName="Dragon Drink"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/5474a99cd4854a909613ae6e094dbfc9.jpg?impolicy=1by1_tight_288" drinkName="Mango Dragonfruit Lemonade"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/7ef4d20aa4ed4587ac02b0e694edceef.jpg?impolicy=1by1_tight_288" drinkName="Paradise Drink"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/3a62ac7842934f4991ddca2b9bb4c029.jpg?impolicy=1by1_tight_288" drinkName="Strawberry Açaí Starbucks Refreshers®"/>
        </div>
        </div>


        <div>
        <h2 className='my-[1.5rem] font-bold'>Sparkling Water</h2>
        <div className='flex'>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/f0ce895c1080458eab6d026890f26de3.jpg?impolicy=1by1_tight_288" drinkName="Galvanina Sparkling Water"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/fc7cf27aec2f4487a743af97d9057cfd.jpg?impolicy=1by1_tight_288" drinkName="Galvanina Sparkling Water - Lime"/>
          <Drink drinkImage="https://globalassets.starbucks.com/assets/16aadeddc3cf4f87a9a2cb0730b1b997.jpg?impolicy=1by1_tight_288" drinkName="Spindrift® Grapefruit Sparkling Water"/>
        </div>
        </div>
        </div>

      </div>
    </TabPanel>

    <TabPanel className="flex">
      <div>
      <div id='hot' className='py-[3rem] px-[5rem]'>
        <h1 className='mt-[-1rem] font-bold text-2xl border-b-[2px] border-b-slate-400 w-[11rem]'>Breakfast</h1>
        <div>
        <h2 className='my-[1.5rem] font-bold'>Breakfast Sandwiches & Wraps</h2>
        <div className='flex'>
          <Food foodImage="https://globalassets.starbucks.com/assets/27bd607e92354742bc8cf46b23f4ce39.jpg?impolicy=1by1_tight_288" foodName="Bacon, Sausage & Egg Wrap"/>
          <Food foodImage="https://globalassets.starbucks.com/assets/76909e4b00b5430faef132b2fa93e40b.jpg?impolicy=1by1_tight_288" foodName="Bacon Gouda & Egg Sandwich"/>
          <Food foodImage="https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_tight_288" foodName="Double-Smoked Bacon Cheedar & Egg Sandwich"/>
          <Food foodImage="https://globalassets.starbucks.com/assets/e4583a7fdc89458983fdacb248debb10.jpg?impolicy=1by1_tight_288" foodName="Spinach, Feta & Egg White Wrap"/>
        </div>
        </div>


        <div>
        <h2 className='my-[1.5rem] font-bold'>Warm Sandwiches</h2>
        <div className='flex'>
          <Food foodImage="https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_tight_288" foodName="Crispy Grilled Cheese on Sourdough"/>
          <Food foodImage="https://globalassets.starbucks.com/assets/39c8d371efed45f18ba0d21f59c6229a.jpg?impolicy=1by1_tight_288" foodName="Ham & Swiss on Baguette"/>
          <Food foodImage="https://globalassets.starbucks.com/assets/29a78190283c40f0a7978baa7f637e05.jpg?impolicy=1by1_tight_288" foodName="Turkey, Provolone & Pesto on Ciabatta"/>
        </div>
        </div>
      </div>

      <div id='cold' className='py-[3rem] px-[5rem]'>
        <h1 className='mt-[-1rem] font-bold text-2xl border-b-[2px] border-b-slate-400 w-[8rem]'>Bakery</h1>
        <div>
        <h2 className='my-[1.5rem] font-bold'>Cookies, Brownies & Bars</h2>
        <div className='flex'>
        <Food foodImage="https://globalassets.starbucks.com/assets/9bdc63ce47a647d88550e5cc5c357cd6.jpg?impolicy=1by1_tight_288" foodName="Lime-Frosted Coconut Bar"/>
        <Food foodImage="https://globalassets.starbucks.com/assets/c2e47d51ab104439a7bc2f76e0903285.jpg?impolicy=1by1_tight_288" foodName="Bullseye Cookie"/>
        <Food foodImage="https://globalassets.starbucks.com/assets/f827715797044a78bb79b86728a079cf.jpg?impolicy=1by1_tight_288" foodName="Double Chocolate Brownie"/>
        <Food foodImage="https://globalassets.starbucks.com/assets/7274a0da5453434aaa63b133edd3ce5c.jpg?impolicy=1by1_tight_288" foodName="Double Chocolate Chip Cookie"/>
        </div>
        </div>


        <div>
        <h2 className='my-[1.5rem] font-bold'>Croissants</h2>
        <div className='flex'>
        <Food foodImage="https://globalassets.starbucks.com/assets/4ad44b1732ba425d9d095f3fa0a09771.jpg?impolicy=1by1_tight_288" foodName="Ham & Swiss Croissant"/>
        <Food foodImage="https://globalassets.starbucks.com/assets/e39e1d6044634535a027301d982c5842.jpg?impolicy=1by1_tight_288" foodName="Butter Croissant"/>
        <Food foodImage="https://globalassets.starbucks.com/assets/11a5dc6219434a4cbf81b195c14a393e.jpg?impolicy=1by1_tight_288" foodName="Chocolate Croissant"/>
        </div>
        </div>
        <div>
        <h2 className='my-[1.5rem] font-bold'>Muffins & Scones</h2>
        <div className='flex'>
        <Food foodImage="https://globalassets.starbucks.com/assets/be269a8f32c14f0cb58b81a50d1d100e.jpg?impolicy=1by1_tight_288" foodName="Blueberry Scone"/>
        <Food foodImage="https://globalassets.starbucks.com/assets/16c051a3e36d4ee0ba4007396fe9f479.jpg?impolicy=1by1_tight_288" foodName="Petite Vanilla Bean Scone"/>
        <Food foodImage="https://globalassets.starbucks.com/assets/7d4665b4af2541e387336966c6e3f1fb.jpg?impolicy=1by1_tight_288" foodName="Blueberry Muffin"/>
        </div>
        </div>
        </div>

      </div>
    </TabPanel>
    </Tabs>
    <Footer />
    </main>
  )
}

export default Menu