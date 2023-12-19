import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-navbar px-20 h-[76px] text-white flex justify-between items-center'>
      <span className='text-3xl'>LOGO</span>
      <div className='flex gap-4'>
        <NavLink to={"/"} className="text-lg hover:underline cursor-pointer">Home</NavLink>
        <NavLink to={"/products/starred"} className="text-lg hover:underline cursor-pointer">Product Listing</NavLink>
      </div>
    </div>
  )
}

export default Navbar