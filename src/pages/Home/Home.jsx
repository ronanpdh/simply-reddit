import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import CategorySelector from '../../components/CategorySelector/CategorySelector';

function Home() {

    return (
        <div className="dark:bg-slate-900 bg-slate-100">
            <div className="w-screen top-0 overscroll-none">
                <header className="w-full top-0">
                    <Nav />
                </header>
                <CategorySelector />
            </div>
        </div>
    )
}

export default Home;

