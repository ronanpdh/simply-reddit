import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import CategorySelector from '../../components/CategorySelector/CategorySelector';

function Home() {

    return (
        <div>
            <div className="w-screen top-0">
                <header className="w-full top-0">
                    <Nav />
                </header>
                <CategorySelector />
            </div>
        </div>
    )
}

export default Home;

