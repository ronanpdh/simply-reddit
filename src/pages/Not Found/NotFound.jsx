import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../assets/404Image.webp'

function NotFound() {
    return(
        <>
            <div className="w-screen h-screen top-0 grid grid-cols-1 justify-items-center items-center ">
                <div className="h-24 mt-10">
                    <h1 className='font-mono text-2xl font-bold'>404 Page Not found</h1>
                </div>
                <div className="h-fit">
                    <img className="object-cover h-2/6 w-96" src={notFoundImg}></img>
                </div>
                <div className="mt-10 p-10">
                    <h2 className='font-mono text-xl font-medium text-center'>Looks like you've got lost, you can get home by clicking <Link to={'/'} className="font-bold underline decoration-sky-500 hover:text-sky-500">Here</Link></h2>
                </div>
            </div>
        </>
    )
}

export default NotFound; 