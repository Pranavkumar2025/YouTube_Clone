import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className='p-1 shadow-lg bg-slate-100 w-[180px]'>
      <div className='p-3 border-b-2 border-gray-400'>
        <ul >
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <div className='p-3 border-b-2 border-gray-400'>
        <h1 className='font-bold'>You</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Downloads</li>
          <li>Show More</li>
        </ul>
      </div>

      <div className='p-3 border-b-2 border-gray-400'>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li>Browse Channels</li>
        </ul>
      </div>

      <div className='p-3 border-b-2 border-gray-400'>
        <h1 className='font-bold'>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>learning</li>
          <li>Fashion</li>
        </ul>
      </div>
      <div className='p-3 border-b-2 border-gray-400'>
        <h1 className='font-bold'>More From YouTube</h1>
        <ul>
          <li>YouTube Premium</li>
          <li>YouTube Studio</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>
        </ul>
      </div>
      <div className='p-3 border-b-2 border-gray-400'>
        <ul >
          <li>Setting</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send feedBack</li>
        </ul>
      </div>
      <div className='p-3 border-b-2 border-gray-400'>
        <p></p>
      </div>
    </div>
  )
}

export default SideBar
