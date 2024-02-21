import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostByCategory, setSelectedCategory } from '../../features/category/categorySlice';
import PostDisplay from '../PostDisplay/PostDisplay';
import useFetchData from '../Data/useFetchData';

function CategorySelector() {
    // Set category slice / redux variables
    const dispatch= useDispatch();
    const { selectedCategory, posts } = useSelector((state) => state.category);
    const loading = useSelector((state) => state.category.loading); 
    const error = useSelector((state) => state.category.hasError); 

    // Set categories for menu - change to use API once core functionality is sorted. 
    const categories = ['all', 'popular', 'best', 'controversial', 'rising', 'gaming', 'sports', 'business', 'crypto', 'television', 'art', 'fashion', 'law', 'history', 'hobbies', 'military', 'movies', 'music', 'place', 'politics', 'programming', 'science', 'technology'] 

    // useEffect to dispatch initial API call
    useEffect(() => {
        dispatch(fetchPostByCategory(selectedCategory));
    }, [selectedCategory, dispatch]);

    // handle Category change and dispatch catgeory to API call
    const handleCategoryChange = (category) => {
        dispatch(setSelectedCategory(category)); 
    }


    return(
        <>
            <div className="w-full flex justify-center">
                <div className="w-full grid grid-flow-col auto-cols-max grid-rows-1 rounded-lg gap-6 mt-6 py-4 px-6 overflow-x-auto justify-items-center">
                    {categories.map((category, index) => 
                        <button className='transition ease-in-out delay-150 py-2 px-4 mb-2 hover:-translate-y-1 hover:scale-110 bg-sky-200 hover:bg-sky-300 active:bg-sky-500 focus:ring focus:ring-violet-300 dark:bg-slate-300 rounded-lg' 
                            key={index} 
                            onClick={() => handleCategoryChange(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    )}
                </div>
            </div>
            <PostDisplay posts={posts} loading={loading} error={error}/>
        </>
    )
};

export default CategorySelector; 