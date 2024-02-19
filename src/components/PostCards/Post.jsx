import React, { useState, useEffect } from 'react'

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

    return (
        <div className="bg-slate-300 dark:bg-slate-300  p-2 m-4 w-fit h-fit mx-auto rounded-lg shadow-md overflow-hidden">
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="bg-white dark:bg-slate-800 dark:text-white px-2 py-6 grid-rows-2 items-start">
                    <a href={`https://www.reddit.com/${props.subReddit}`} target="_blank" rel="noreferrer"><h4>{props.subReddit}</h4></a>
                    <h2 className="text-lg mt-4">{props.title}</h2>
                    <div className="col-auto flex items-center justify-end">
                        <p className="text sm:text-sm dark:text-white">{props.time}</p>
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
                <div className="bg-white dark:bg-slate-900 px-4 py-2 grid grid-rows-1 grid-flow-col grid-cols-3 gap-1 items-center justify-evenly">
                    <div className="col-auto flex items-center text-sm">
                        <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 18.0001H9.33004C6.02005 18.0001 4.66005 15.6501 6.32005 12.7801L7.66004 10.4701L9.00005 8.16007C10.66 5.29007 13.37 5.29007 15.03 8.16007L16.37 10.4701L17.71 12.7801C19.37 15.6501 18.01 18.0001 14.7 18.0001H12Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="dark:text-white">{props.votes}</p>
                        <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.0001 6H14.6701C17.9801 6 19.3401 8.35 17.6801 11.22L16.3401 13.53L15.0001 15.84C13.3401 18.71 10.6301 18.71 8.97005 15.84L7.63005 13.53L6.29005 11.22C4.66005 8.35 6.01005 6 9.33005 6H12.0001Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className=" flex items-center justify-center text-sm text-center">
                        <p className="dark:text-white">{props.username}</p>
                    </div>
                    <div className="col-auto flex justify-end text-sm">
                        <svg className="dark:fill-white mx-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 8H17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 13H13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="dark:text-white">{props.comments}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Post;

