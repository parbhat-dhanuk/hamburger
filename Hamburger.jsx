import React, { useState } from 'react'

const Navbar = () => {

const [menu , setMenu]=useState();

const toggleMenu=()=>{
    
    setMenu (!menu)
}




  return (

    
  <nav className='bg-blue-500 p-4'>

 <div className="flex items-center justify-between">


    {/* {logo} */}

    <div className="text-white text-2xl font-bold ">LOGO</div>

{/* {hamburger icon} */}

<div className="md:hidden ">

    <button className='text-white' onClick={toggleMenu}>
        <svg 
        fill="none"
        stroke="CurrentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewbox="0 0 24 24"
        className='w-6 h-6'
        > 
        <path d="M4  6h16M4 12h16M4 18h16" ></path>
        
        </svg>

    </button>
</div>

      
    <ul className='hidden md:flex  space-x-4'>

    <li><a href="#" className='text-white'>Home</a></li>
    <li><a href="#" className='text-white'>About</a></li>
    <li><a href="#" className='text-white'>Service</a></li>
    <li><a href="#" className='text-white'>Contact</a></li>

    </ul>

 </div>

 {/* {mobile menu} */}

 {menu? (

<ul className='flex-col md:hidden'>

<li className='py-2'> <a href="#" className='text-white'>Home</a> </li>
<li className='py-2'> <a href="#" className='text-white'>About</a> </li>
<li className='py-2'> <a href="#" className='text-white'>Service</a> </li>
<li className='py-2'> <a href="#" className='text-white'>Contact</a> </li>

</ul>

 ):null}
   
  </nav>

  )
}

export default Navbar