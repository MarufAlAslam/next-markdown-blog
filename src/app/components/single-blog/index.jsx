import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SingleBlog = ({ blog }) => {
    return (
        <article className="relative group bg-white/95 shadow-xl rounded-3xl md:p-10 p-5 mb-4 border-l-8 border-green-900/80 hover:border-green-700/90 cursor-pointer transition-all duration-300 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 text-green-700 rounded-full p-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 tracking-tight leading-tight drop-shadow-sm">
                        {blog.title}
                    </h2>
                    {blog.uploadDate && (
                        <span className="text-xs text-gray-500 mt-1">
                            Uploaded: {new Date(blog.uploadDate).toLocaleDateString()} {new Date(blog.uploadDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    )}
                </div>
            </div>
            <div className="markdown-body prose prose-green max-w-none prose-img:rounded-lg prose-table:rounded-lg prose-table:overflow-hidden prose-table:border prose-table:border-gray-200 text-lg prose-headings:mt-0 prose-headings:mb-2 prose-p:my-2 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:bg-gray-100 prose-code:text-pink-600 prose-pre:bg-gray-100 prose-pre:text-gray-800">
                <style>{`.markdown-body pre, .markdown-body code { background: #f3f4f6 !important; color: #1e293b !important; }`}</style>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content.trim()}</ReactMarkdown>
            </div>
        </article>
    )
}

export default SingleBlog