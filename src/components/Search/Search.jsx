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
            <div className="relative flex content-center" >
                <form onSubmit={handleSubmit}>
                    <div className="absolute flex content-center">
                        <svg className="absolute text-slate-400 h-5 w-5 my-2 mx-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input className="placeholder:italic placeholder:text-slate-400 flex shrink-0 bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search..."
                        type="text"
                        name="search"
                        value={searchTerm}
                        onChange={handleInputChange} />
                </form>
            </div>
        </>
    )
};

export default Search; 
