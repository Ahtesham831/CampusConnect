import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'

const BlogCard = ({blog}) => {
  const {title, description, category, image, _id} = blog;
  const navigate = useNavigate()

  return (
    <div 
      onClick={()=> navigate(`/blog/${_id}`)} 
      className='group flex flex-col h-full bg-white border border-gray-100 hover:border-primary/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'
    >
      {/* Zoomable Image Wrap */}
      <div className='overflow-hidden aspect-video relative'>
        <img 
          src={image} 
          alt={title} 
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
        />
        {/* Category Floating Pill overlay */}
        <div className='absolute top-3 left-3 backdrop-blur-md bg-white/80 border border-gray-200/50 px-3 py-1 rounded-full shadow-sm'>
          <span className='text-[10px] font-bold uppercase tracking-wider text-primary'>{category}</span>
        </div>
      </div>

      {/* Card Details */}
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug'>
          {title}
        </h3>
        <p 
          className='mt-2.5 text-xs text-gray-500/90 font-light leading-relaxed line-clamp-3' 
          dangerouslySetInnerHTML={{"__html": description.replace(/<[^>]*>/g, '').slice(0, 110) + '...'}}
        />

        {/* Read More Action */}
        <div className='mt-auto pt-5 flex items-center gap-1.5 text-[11px] font-bold text-primary uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200'>
          <span>Read Article</span>
          <img src={assets.arrow} className='w-2.5 translate-y-[0.5px]' alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
