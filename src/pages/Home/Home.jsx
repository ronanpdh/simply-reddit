import React, { useEffect, useState } from 'react';
import PostLoading from '../../components/Post/PostLoading';
import {useSelector, useDispatch } from 'react-redux'; 
import { fetchData } from '../../features/home/homeSlice';
import CategorySelector from '../../components/CategorySelector/CategorySelector';

function Home() {

    return (
        <div>
            <CategorySelector />
        </div>
    )
}

export default Home;

