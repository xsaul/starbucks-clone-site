import {BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import {ImLocation} from "react-icons/im"
import Home from "../Pages/Home"
import Menu from "../Pages/Menu"
import GiftCards from "../Pages/GiftCards"


function Navbar() {
  return (
    <nav className="bg-white text-black">
      <Router>
      <div className="flex items-center p-4 justify-between drop-shadow-2xl">
        <div className="flex items-center">
        <NavLink to="/starbucks-clone-site/">
        <img className="w-[50px] h-[50px]" src="https://imgs.search.brave.com/73KrtT3sMmHGQRh1BuAOzgYfa6g36kncY0N7JPbwmiQ/rs:fit:471:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/cEJUZG1TNDI1WE1Z/SjZrSkgtZlZBSGFI/ZCZwaWQ9QXBp" alt="starbucks-logo" />
        </NavLink>
        <NavLink className="font-bold mx-6 hover:text-[#1e3932]" to="/Menu">MENU</NavLink>
        <NavLink className="font-bold hover:text-[#1e3932]" to="/GiftCards">GIFT CARDS</NavLink>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-1">  
          <ImLocation className="text-xl" />
          <a className="font-bold hover:text-[#1e3932] mr-[2.5rem]" href="#">Find a store</a>
          </div>
          <button className="hover:bg-slate-100 rounded-[10rem] py-[0.4rem] border-[1px] border-black px-4">Sign in</button>
          <button className="hover:bg-slate-700 rounded-[10rem] py-[0.4rem] px-4 text-white bg-black mr-[1.5rem]">Join now</button>
          </div>
        </div>
        <Routes>
          <Route path='/starbucks-clone-site/' element={<Home />}/>
          <Route path='/Menu' element={<Menu />}/>
          <Route path='/GiftCards' element={<GiftCards />}/>
        </Routes>
       </Router>
        
    </nav>
  )
}

export default Navbar