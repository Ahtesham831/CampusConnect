import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
    const [menu, setMenu] = useState("All")
    const {blogs, input} = useAppContext()

    const filteredBlogs = ()=>{
      if(input === ''){
        return blogs
      }
      return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }

    const displayedBlogs = filteredBlogs().filter((blog)=> menu === "All" ? true : blog.category === menu)

  return (
    <div className='max-w-7xl mx-auto px-6 sm:px-16 xl:px-8'>
      {/* Category Pills Glassmorphic Filter */}
      <div className='flex justify-center mb-12 mt-4'>
        <div className='inline-flex flex-wrap justify-center gap-1.5 p-1.5 bg-gray-100/70 backdrop-blur-md border border-gray-200/50 rounded-2xl sm:rounded-full shadow-sm'>
          {blogCategories.map((item)=> (
            <div key={item} className='relative'>
              <button 
                onClick={()=> setMenu(item)}
                className={`relative px-5 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                  menu === item ? 'text-white font-semibold' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {item}
                {menu === item && (
                  <motion.div 
                    layoutId='activeTab' 
                    transition={{type: 'spring', stiffness: 350, damping: 25}}
                    className='absolute inset-0 bg-gradient-to-r from-primary to-emerald-600 rounded-full -z-10 shadow-md shadow-primary/20'
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Grid List of Blogs */}
      {displayedBlogs.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-10 mb-28'>
          {displayedBlogs.map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}
        </div>
      ) : (
        <div className='text-center py-20 bg-gray-50/50 border border-dashed border-gray-200 rounded-3xl mb-28 max-w-2xl mx-auto px-6'>
          <p className='text-gray-400 text-sm sm:text-base font-light'>No articles found matching your query or category.</p>
        </div>
      )}
    </div>
  )
}

export default BlogList
