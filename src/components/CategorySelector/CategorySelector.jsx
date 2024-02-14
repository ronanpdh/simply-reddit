import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostByCategory, setSelectedCategory } from '../../features/category/categorySlice';
import PostDisplay from '../Post Display/PostDisplay';
import useFetchData from '../Data/useFetchData';

function CategorySelector() {
    // Set category slice / redux variables
    const dispatch= useDispatch();
    const { selectedCategory, posts } = useSelector((state) => state.category);
    const loading = useSelector((state) => state.category.loading); 
    const error = useSelector((state) => state.category.hasError); 

    // Set categories for menu - change to use API once core functionality is sorted. 
    const categories = ['all', 'popular', 'best', 'controversial', 'rising', 'gaming', 'sports', 'business'] 

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
            <div className="container flex justify-center">
                <div className="grid grid-flow-col-dense auto-cols-max grid-rows-1 rounded-lg gap-6 mt-4">
                    {categories.map((category) => 
                        <button key={category.id} onClick={() => handleCategoryChange(category)}>{category}</button>
                    )}
                </div>
            </div>
            <PostDisplay posts={posts} loading={loading} error={error}/>
        </>
    )
};

export default CategorySelector; 