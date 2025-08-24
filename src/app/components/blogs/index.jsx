'use client'
import React from 'react'
import 'github-markdown-css/github-markdown.css';
import SingleBlog from '../single-blog';


import { useState, useEffect } from 'react';

const PAGE_SIZE = 5;

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("newest");
    const [page, setPage] = useState(1);
    const [filtered, setFiltered] = useState([]);


    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const response = await fetch('/api/blogs');
            const data = await response.json();
            setBlogs(data);
            setLoading(false);
        };
        fetchBlogs();
    }, []);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    useEffect(() => {
        let result = blogs;
        // Search
        if (search.trim()) {
            result = result.filter(blog =>
                blog.title.toLowerCase().includes(search.toLowerCase()) ||
                (blog.content && blog.content.toLowerCase().includes(search.toLowerCase()))
            );
        }
        // Sort
        if (sort === "newest") {
            result = [...result].sort((a, b) => (b.date || b.id) - (a.date || a.id));
        } else if (sort === "oldest") {
            result = [...result].sort((a, b) => (a.date || a.id) - (b.date || b.id));
        } else if (sort === "title") {
            result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        }
        setFiltered(result);
        setPage(1); // Reset to first page on filter/sort change
    }, [blogs, search, sort]);

    // Pagination
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const pagedBlogs = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl mb-6 items-center justify-between">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border border-green-600 placeholder:text-green-600 text-green-600 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <div className="relative w-full md:w-auto">
                    <select
                        value={sort}
                        onChange={e => setSort(e.target.value)}
                        className="border border-green-600 text-green-600 appearance-none rounded-lg px-4 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="title">Title (A-Z)</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-green-600">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            {loading ? (
                <div className="flex flex-col items-center justify-center py-24">
                    <svg className="animate-spin h-12 w-12 text-green-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <span className="text-green-700 text-lg font-semibold">Loading blogs...</span>
                </div>
            ) : (
                <>
                    <div className="flex flex-col w-full">
                        {pagedBlogs.length === 0 && (
                            <div className="text-center text-gray-500 py-12">No blogs found.</div>
                        )}
                        {pagedBlogs.map((blog) => (
                            <SingleBlog key={blog.id} blog={blog} />
                        ))}
                    </div>
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex gap-3 mt-8">
                            <button
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                                className="px-3 h-10 w-20 py-1 rounded border-green-600 text-white bg-green-600 cursor-pointer disabled:opacity-50"
                            >
                                Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i + 1)}
                                    className={`w-10 h-10 rounded-full cursor-pointer ${page === i + 1 ? 'bg-green-600 text-white border border-green-600' : 'bg-green-50 border border-green-600 text-green-600'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages}
                                className="px-3 py-1 h-10 w-20 border-green-600 rounded text-white bg-green-600 cursor-pointer disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Blogs