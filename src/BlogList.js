import { useState } from "react";
import { Link } from "react-router-dom";
const BlogList = ({blogs, title}) => {
    const handle_click = (title, body, author, starred, id) => {
        starred = true;
        let new_blog = {title, body, author, starred}
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(new_blog)
        }).then((result) => {
            result.json().then((resp) => {
            })
        })
    }
    return (  
        <div className="BlogList">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by - {blog.author}</p>
                    </Link>
                    <button class="fav-button" onClick={() => {
                        handle_click(blog.title, blog.body, blog.author, blog.starred, blog.id)}
                    }>favorite</button>
                </div>
            ))}        
        </div>    
    );
}
 
export default BlogList;
