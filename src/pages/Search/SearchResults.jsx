import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Post from '../../components/Post/Post';
import PostLoading from '../../components/Post/PostLoading';
import { useSelector } from 'react-redux';

function SearchResults() {

    const results = useSelector((state) => state.search.results);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const loading = useSelector((state)=> state.search.loading);
    const error = useSelector((state)=> state.search.hasError);

    const skeletonCount = 24;
    if (loading === true && results.length === 0) {
        return (
            <div className="masonry sm:masonry-sm md:masonry-md auto-rows-max mt-8 gap-4 px-4">
                {Array.from({ length: skeletonCount }, (_, index) => (
                    <PostLoading key={index} />
                ))}
            </div>
        );
    }

    if (loading === false && error === true) {
        return (
            <div>
                <h2>Oooops!</h2>
                <h3>Somethings gone wrong try and refresh the page</h3>
            </div>
        )
    }

    return (
        <div className="w-screen top-0">
            <header className="w-full top-0">
                <Nav />
            </header>
            <h2>{searchTerm} Search Results</h2>
            <div className="masonry sm:masonry-sm md:masonry-md auto-rows-max mt-8 gap-4 px-6">
                {results.map((item) => (
                    <Post key={item.id} subReddit={item.data.subreddit_name_prefixed} title={item.data.title} username={item.data.author} time={item.data.time} comments={item.data.num_comments} image={item.data.url} video={item.data.is_video} videoData={item.data.media} votes={item.data.ups} link={item.data.url} />
                ))}
            </div>
        </div>
    )
}

export default SearchResults;

