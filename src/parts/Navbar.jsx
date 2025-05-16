import React from 'react'
import logo from  '../movie.png'
import {Link} from 'react-router-dom'
function Navbar({tomode}) {
  return (
    <>
   
    <div className="flex border-b border-pink-500 space-x-8 items-center pl-3 py-4">
        <img src={logo} className="w-[60px]"></img>
        <Link to="/" className='text-blue-400 text-3xl font-bold'>Home</Link>
        <Link to="/watchlist" className='text-blue-400 text-3xl font-bold'>Watchlist</Link>
      <div className='ml-auto mr-12'>
        <button className='border rounded-2xl h-8 w-15' onClick={tomode}>dark</button>
      </div>
    </div>
 
</>


  )
}

export default Navbar
