import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Blog = () => {

  const {id} = useParams()

  const {axios} = useAppContext()

  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async ()=>{
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchComments = async () =>{
    try {
      const { data } = await axios.post('/api/blog/comments', {blogId: id})
      if (data.success){
        setComments(data.comments)
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const addComment = async (e)=>{
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blog/add-comment', {blog: id, name, content});
      if (data.success){
        toast.success(data.message)
        setName('')
        setContent('')
      }else{
         toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchBlogData()
    fetchComments()
  },[])

  return data ? (
    <div className='relative min-h-screen bg-white'>
      {/* Background Aura Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[130px] -z-10 pointer-events-none' />

      <Navbar/>

      {/* Hero Publisher Details */}
      <div className='text-center mt-16 sm:mt-24 px-6 relative z-10'>
        <p className='text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-4'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-3xl sm:text-6xl font-extrabold tracking-tight text-gray-800 max-w-4xl mx-auto leading-tight sm:leading-[1.15]'>
          {data.title}
        </h1>
        <h2 className='my-5 text-sm sm:text-base text-gray-500 font-light max-w-2xl mx-auto leading-relaxed'>
          {data.subTitle}
        </h2>
        <span className='inline-flex items-center gap-1.5 py-1 px-4 border border-primary/20 bg-primary/5 rounded-full text-xs font-semibold text-primary shadow-sm'>
          Written by Michael Brown
        </span>
      </div>

      {/* Article Content Area */}
      <div className='px-6 max-w-4xl mx-auto my-12 sm:my-16'>
        {/* Banner Graphic */}
        <div className='overflow-hidden rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100 max-h-[500px] mb-12 sm:mb-16'>
          <img src={data.image} alt={data.title} className='w-full h-full object-cover' />
        </div>

        {/* Blog Rich-Text Layout */}
        <article className='rich-text max-w-3xl mx-auto prose prose-teal leading-relaxed text-gray-700' dangerouslySetInnerHTML={{__html: data.description}} />

        <div className='border-t border-gray-100 my-16' />

        {/* Comments Section */}
        <div className='max-w-3xl mx-auto mb-16'>
          <h3 className='text-lg font-bold text-gray-800 mb-6 flex items-center gap-2'>
            <span>Comments</span>
            <span className='bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-semibold'>{comments.length}</span>
          </h3>

          {comments.length > 0 ? (
            <div className='flex flex-col gap-5'>
              {comments.map((item, index)=>(
                <div 
                  key={index} 
                  className='relative bg-gray-50/70 border border-gray-200/50 hover:border-primary/20 transition-all duration-300 p-6 rounded-2xl max-w-2xl shadow-sm'
                >
                  <div className='flex items-center gap-2.5 mb-3'>
                    <div className='p-1 bg-white border border-gray-200 rounded-full'>
                      <img src={assets.user_icon} alt="user" className='w-5 h-5'/>
                    </div>
                    <p className='font-bold text-sm text-gray-800'>{item.name}</p>
                  </div>
                  <p className='text-sm text-gray-600 ml-8 font-light leading-relaxed'>{item.content}</p>
                  <span className='absolute right-5 bottom-4 text-[10px] text-gray-400 font-medium uppercase tracking-wider'>
                    {Moment(item.createdAt).fromNow()}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className='p-8 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl text-center max-w-2xl'>
              <p className='text-sm text-gray-400 font-light'>Be the first to share your thoughts on this article!</p>
            </div>
          )}
        </div>

        {/* Add Comment section */}
        <div className='max-w-3xl mx-auto bg-gray-50/50 border border-gray-100 p-6 sm:p-8 rounded-3xl mb-16'>
          <h3 className='text-base sm:text-lg font-bold text-gray-800 mb-6'>Join the Conversation</h3>
          <form onSubmit={addComment} className='flex flex-col gap-4 max-w-xl'>
            <input 
              onChange={(e)=> setName(e.target.value)} 
              value={name} 
              type="text" 
              placeholder='Your name' 
              required 
              className='w-full px-4 py-3 bg-white border border-gray-200/80 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl outline-none transition-all text-sm text-gray-700 font-normal placeholder-gray-400'
            />
            <textarea 
              onChange={(e)=> setContent(e.target.value)} 
              value={content} 
              placeholder='Write your comment here...' 
              required 
              className='w-full px-4 py-3 bg-white border border-gray-200/80 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl outline-none transition-all text-sm text-gray-700 font-normal placeholder-gray-400 h-36 resize-none'
            />
            <button 
              type="submit" 
              className='self-start bg-primary hover:bg-primary/95 text-white font-semibold rounded-xl px-8 py-3 text-sm shadow-md shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer'
            >
              Submit Comment
            </button>
          </form>
        </div>

        {/* Interactive Social Sharing */}
        <div className='max-w-3xl mx-auto mb-16'>
          <h4 className='font-bold text-xs uppercase tracking-wider text-gray-400 mb-4'>Share this Story</h4>
          <div className='flex items-center gap-3'>
            <div className='cursor-pointer hover:-translate-y-1 hover:brightness-95 transition-all duration-200'>
              <img src={assets.facebook_icon} className='w-11 h-11' alt="Facebook" />
            </div>
            <div className='cursor-pointer hover:-translate-y-1 hover:brightness-95 transition-all duration-200'>
              <img src={assets.twitter_icon} className='w-11 h-11' alt="Twitter" />
            </div>
            <div className='cursor-pointer hover:-translate-y-1 hover:brightness-95 transition-all duration-200'>
              <img src={assets.googleplus_icon} className='w-11 h-11' alt="Google Plus" />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  ) : <Loader/>
}

export default Blog
