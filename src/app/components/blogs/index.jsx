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
            <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col w-full">
                    {blogs.map((blog) => (
                        <SingleBlog key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs