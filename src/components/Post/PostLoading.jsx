import React, { useState, useEffect } from 'react'

import placeholder from '../../assets/ph.jpg'

function PostLoading() {


    // Check if url is an image 
    // const isImageUrl = (url) => {
    //     if (!url) return false

    //     const imgExtension = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.webp)$/i;
    //     return imgExtension.test(url)
    // }

    // const isImage = isImageUrl(image); 

    return (
        <div className="bg-gray-900 p-2 m-4 w-90 h-96 mx-auto rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-900 px-2 py-6 grid-rows-2 items-start animate-pulse">
                <div className="h-4 my-2 bg-slate-700 rounded"></div>
                <div className="h-4 my-1 bg-slate-700 rounded"></div>
                <div className="col-auto flex items-center justify-end">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                </div>
            </div>
            <div className="bg-slate-700 px-0 py-0">
                <div className="object-cover object-center max-fit bg-slate-700 h-56 w-64"></div>
            </div>
            <div className="animate-pulse bg-slate-700 px-4 py-2 grid grid-rows-1 grid-flow-col grid-cols-3 gap-1 items-center justify-evenly">
                <div className="col-auto flex items-center text-sm bg-slate-700 rounded">

                </div>
                <div className=" flex items-center justify-center text-sm bg-slate-700 rounded">

                </div>
                <div className="col-auto flex justify-end text-sm bg-slate-700 rounded">

                </div>
            </div>
        </div>
    );
}

export default PostLoading;

