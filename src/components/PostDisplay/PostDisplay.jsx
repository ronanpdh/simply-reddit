import React from 'react';
import Post from '../PostCards/Post';
import PostLoading from '../PostCards/PostLoading';

function PostDisplay({ posts, loading, error }) {
    // console.log(posts);

    const skeletonCount = 24;
    if (loading === true && posts.length === 0) {
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
        <div>
            <div className="masonry sm:masonry-sm md:masonry-md auto-rows-max mt-8 gap-4 px-6">
                {posts.map((item) => (
                    <Post key={item.data.id} subReddit={item.data.subreddit_name_prefixed} title={item.data.title} username={item.data.author} time={item.data.time} comments={item.data.num_comments} image={item.data.url} video={item.data.is_video} videoData={item.data.media} votes={item.data.ups} link={item.data.url} />
                ))}
            </div>
        </div>
    )
}

export default PostDisplay; 