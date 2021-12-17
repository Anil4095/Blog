import React from 'react'
import BlogItem from './BlogItem/BlogItem'

const Bloglist = ({blogs}) => {
    console.log(blogs)
    return (
        <div className="blogList-wrap">
            {blogs.map((blog)=>
        
            <BlogItem blog={blog.id} key={blog.id}/>
            )}
        </div>
    )
}

export default Bloglist;
