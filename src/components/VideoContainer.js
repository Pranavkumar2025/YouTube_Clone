import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    // console.log(jsonData);
    setVideos(jsonData.items);
  }
  
  return ( 
    <div className='flex flex-wrap m-2 ml-12'>
      {videos.map((val)=>(
        <Link to={"/watch?v="+val.id}><VideoCard info = {val} key={val.id}/></Link>
        
       
      ))}
      
    </div>
  )
}

export default VideoContainer
