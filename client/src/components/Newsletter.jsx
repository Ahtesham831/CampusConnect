import React from 'react'

const Newsletter = () => {
  return (
    <div className='max-w-5xl mx-auto my-32 px-6'>
      <div className='relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-950 to-gray-950 text-white rounded-[2.5rem] p-8 sm:p-16 text-center shadow-2xl shadow-primary/5'>
        {/* Glow Aura Overlay */}
        <div className='absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none' />
        <div className='absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none' />

        <div className='relative z-10'>
          <h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300'>
            Never Miss a Story
          </h2>
          <p className='text-xs sm:text-base text-gray-400 font-light max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed'>
            Subscribe to our weekly digest to stay updated with campus stories, student life hacks, upcoming events, and academic guides.
          </p>

          <form className='flex items-center gap-2 max-w-lg mx-auto bg-white/5 border border-white/10 hover:border-white/20 transition-colors p-1.5 rounded-2xl backdrop-blur-md shadow-inner'>
            <input 
              className='w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none pl-4 font-normal' 
              type="email" 
              placeholder='Enter your email address' 
              required
            />
            <button 
              type='submit' 
              className='bg-gradient-to-r from-primary to-emerald-600 hover:opacity-95 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl cursor-pointer text-xs sm:text-sm shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
