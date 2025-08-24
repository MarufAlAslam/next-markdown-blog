import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SingleBlog = ({ blog }) => {
    return (
        <div className='bg-gray-600 p-2 rounded-2xl'>
            <div className="markdown-body" style={{ padding: '32px', background: '#000', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <h1>{blog.title}</h1>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{
                    blog.content.trim()
                }</ReactMarkdown>
            </div>
        </div>
    )
}

export default SingleBlog