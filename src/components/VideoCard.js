import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    if (!info || !info.snippet) {
        return <div>No video information available</div>;
    }

    const { thumbnails, title, channelTitle } = info.snippet;

    const { viewCount } = info.statistics;

    if (!thumbnails || !title || !channelTitle) {
        return <div>Missing video information</div>;
    }

    

  return (
    <div className='p-2 m-4  w-96 rounded-lg flex flex-col'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
         <h1 className='font-bold'>{title}</h1>
         <h3>{channelTitle}</h3>
         <h3>{viewCount} views</h3>

    </div>
  )
}

export default VideoCard;
