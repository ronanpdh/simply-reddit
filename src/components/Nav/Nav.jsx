import React from "react";

import logo from '../../assets/reddit.webp'
import Search from "../Search/Search";

function Nav() {

    return (
        <div className="inline-flex items-center justify-between bg-red-500	w-full p-8 top-0">
            <img className="size-16" src={logo} alt="reddit logo"></img>
            <h1 className="font-sans font-bold text-2xl text-white ">Simply Reddit</h1>
            <div className="inline-flex w-1/6">
                <Search />
            </div>
        </div>
    )
}

export default Nav; 