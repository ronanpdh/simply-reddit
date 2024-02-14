import React, {useState, useEffect} from 'react'

import placeholder from '../../assets/ph.jpg'

function Post(props) {

  
    // Check if url is an image 
    const isImageUrl = (url) => {
        if (!url) return false

        const imgExtension = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.webp)$/i;
        return imgExtension.test(url)
    }

    
    const isImage = isImageUrl(props.image); 
    // Check status of is_video boolean from api data
    const isVideo = props.video;
    console.log(props.videoData)

    return (
        <div className="bg-gray-300 p-2 m-4 w-fit h-fit mx-auto rounded-lg shadow-md overflow-hidden">
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="bg-white px-2 py-6 grid-rows-2 items-start">
                   <a href={`https://www.reddit.com/${props.subReddit}`} target="_blank" rel="noreferrer"><h4>{props.subReddit}</h4></a>
                    <h2 className="text-lg">{props.title}</h2>
                    <div className="col-auto flex items-center justify-end">
                        <p className="text sm:text-sm">{props.time}</p>
                    </div>
                </div>
                <div className="bg-gray-200 px-0 py-0">
                    {isImage && (
                        <img className="object-cover object-center max-fit" src={props.image} alt="Post"></img> 
                    )}
                    {isVideo && (
                        <video controls className="object-cover object-center max-fit">
                            <source src={props.videoData.reddit_video.fallback_url} type="video/mp4" />
                        </video>
                    )}
                    
                </div>
                <div className="bg-white px-4 py-2 grid grid-rows-1 grid-flow-col grid-cols-3 gap-1 items-center justify-evenly">
                    <div className="col-auto flex items-center text-sm">
                        <p>{props.votes}</p>
                    </div>
                    <div className=" flex items-center justify-center text-sm">
                        <p>{props.username}</p>
                    </div>
                    <div className="col-auto flex justify-end text-sm">
                        <p>{props.comments}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Post; 

