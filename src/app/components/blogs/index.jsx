'use client'
import React from 'react'
import 'github-markdown-css/github-markdown.css';
import SingleBlog from '../single-blog';

const Blogs = () => {
    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs');
            const data = await response.json();
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    console.log(blogs);

    return (
        <div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5">
                {blogs.map((blog) => (
                    <SingleBlog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default Blogs