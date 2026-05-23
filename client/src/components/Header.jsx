import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e)=>{
     e.preventDefault();
     setInput(inputRef.current.value)
  }

  const onClear = ()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='relative overflow-hidden py-16 sm:py-24 px-6 md:px-16 lg:px-24'>
      {/* Background Glowing Aura */}
      <div className='absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] -z-10' />

      <div className='text-center max-w-4xl mx-auto relative z-10'>
        {/* Glowing Announcement Badge */}
        <div className='inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 border border-primary/20 bg-primary/5 rounded-full text-xs font-semibold text-primary shadow-sm hover:border-primary/45 transition-colors duration-300'>
          <span>New: AI feature integrated</span>
          <img src={assets.star_icon} className='w-2.5 animate-pulse' alt="star" />
        </div>

        {/* Premium Typographic Gradient Title */}
        <h1 className='text-4xl sm:text-7xl font-extrabold tracking-tight sm:leading-[1.1] text-gray-800'>
          Your own <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500'>campus blog</span> <br /> platform.
        </h1>

        <p className='my-6 sm:my-8 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed font-light'>
          This is your exclusive space to share academic insights, campus life stories, event updates, and career tips. Write without filters, connect with peers, and let your voice resonate across the entire campus!
        </p>

        {/* Glassmorphic Glowing Search Container */}
        <form onSubmit={onSubmitHandler} className='flex items-center gap-2 max-w-lg mx-auto bg-white/70 backdrop-blur-md border border-gray-200/80 shadow-xl shadow-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 p-1.5 rounded-2xl'>
          <input 
            ref={inputRef} 
            type="text" 
            placeholder='Search for blogs, events, tutorials...' 
            required 
            className='w-full pl-3 text-sm sm:text-base text-gray-700 bg-transparent outline-none font-normal placeholder-gray-400'
          />
          <button 
            type="submit" 
            className='bg-primary text-white hover:bg-primary/95 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold cursor-pointer shadow-md shadow-primary/10 text-sm'
          >
            Search
          </button>
        </form>

        {/* Clear Search Trigger */}
        {input && (
          <div className='mt-5 text-center'>
            <button 
              onClick={onClear} 
              className='inline-flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 px-4 py-1.5 rounded-full text-xs font-medium text-gray-600 shadow-sm cursor-pointer hover:border-gray-300 active:scale-95 transition-all'
            >
              Clear Search results
            </button>
          </div>
        )}
      </div>

      <img src={assets.gradientBackground} alt="" className='absolute -top-50 left-0 right-0 -z-20 opacity-30 pointer-events-none'/>
    </div>
  )
}

export default Header
