import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchData } from '../../features/search/searchSlice';

function Search() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.search.loading);
    const error = useSelector((state) => state.search.error);

    const handleSubmit = (searchInput) => {
        dispatch(searchInput);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            </form>
        </>
    )
};

export default Search; 
