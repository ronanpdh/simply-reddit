import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../assets/reddit.webp';
import Search from "../Search/Search";

function Nav() {

    return (
        <div className="flex flex-col items-center justify-between bg-red-500 dark:bg-slate-800 w-full p-8 top-0 sm:flex-row">
            <h1 className="font-sans font-bold text-2xl text-white italic">Simply Reddit</h1>
            <Link to={'/'} className="hidden md:flex"><img className="size-16 sm:invisible md:visible " src={logo} alt="reddit logo"></img></Link>
            <div className="inline-flex mt-4 ">
                <Search />
            </div>
        </div>
    )
}

export default Nav; 