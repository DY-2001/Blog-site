import BlogList from './BlogList'
import FavoriteList from './FavoriteList'
import useFetch from './useFetch'
import { useState } from 'react'

const Favorite = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    return(
        <div className="favorite">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <FavoriteList blogs={blogs} title="All Your Favorite Blogs!"/>}
        </div>
    );
}

export default Favorite;