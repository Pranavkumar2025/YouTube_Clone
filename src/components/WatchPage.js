import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import {  useSearchParams } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constant";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    SingleVideoData();
  }, []);

  const [Videos, SetVideos] = useState([]);
  const SingleVideoData = async ()=>{
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    SetVideos(jsonData);
  } 
  console.log(Videos)
  return (
    <div className="p-4 px-20">
      <iframe
        className="rounded-xl"
        width="950"
        height="520"
        src={"https://www.youtube.com/embed/"+searchParams.get('v')}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>           
      </div>
    </div>
  );
};

export default WatchPage;
