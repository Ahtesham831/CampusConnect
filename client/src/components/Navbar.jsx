import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const {navigate, token} = useAppContext()

  return (
    <div className='sticky top-0 z-50 px-6 sm:px-16 xl:px-32 py-4 backdrop-blur-md bg-white/75 border-b border-gray-100/80 shadow-sm transition-all duration-300'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-40 cursor-pointer hover:opacity-90 transition-opacity' />
        <button 
          onClick={()=>navigate('/admin')}  
          className='flex items-center gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-primary hover:bg-primary/95 text-white px-7 sm:px-9 py-2 sm:py-2.5 hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-primary/10 font-medium'
        >
          {token ? 'Dashboard' : 'Admin Area'}
          <img src={assets.arrow} className='w-2.5 sm:w-3' alt="arrow" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
