import { useState } from "react";
import { Link } from "react-router-dom";

const FavoriteList = ({blogs, title}) => {
    const [filteredBlogs, setFilteredBlogs] = useState(blogs.filter(blog => blog.starred === true));

    const handle_click = (title, body, author, starred, id, filteredBlogs) => {
        let star = false;
        let new_blog = {title, body, author, star}
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(new_blog)
        }).then((result) => {
            return result.json()
        })
        .then((data)=>{
            setFilteredBlogs(filteredBlogs.filter(blog => blog.id !== data.id));
        });
    }

    // const filtered_blogs = blogs.filter(blog => blog.starred === true)
    return(
        <div className="FavoriteList">
            <h2>{title}</h2>
            {filteredBlogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by - {blog.author}</p>
                    </Link>
                    <button class="fav-button" onClick={() => {
                        handle_click(blog.title, blog.body, blog.author, blog.starred, blog.id, filteredBlogs)}
                        }>Unfavorite</button>
                </div>
            ))}
        </div>
    );
}

export default FavoriteList;