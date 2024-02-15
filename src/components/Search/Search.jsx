import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchData, setSearchTerm } from '../../features/search/searchSlice';
import { useNavigate } from 'react-router-dom';

function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const searchTerm = useSelector((state) => state.search.searchTerm)

    // Handle search input submit. checl the seach term isn't empty. dispatch the search term and call api in searchSlice then navigate to search results page
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return; 
        dispatch(fetchSearchData(searchTerm));
        navigate('/search-results')
    }

    // Handle search input change and set search term in searchSlice state
    const handleInputChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Search for anything..." 
                    type="text" 
                    name="search" 
                    value={searchTerm}
                    onChange={handleInputChange}/>
            </form>
        </>
    )
};

export default Search; 
