import React from 'react'
//import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip/LabelData.js'
import './blogItemstyle.css'

const BlogItem = ({id,cover,category,title,description,authorAvatar,authorName,createdAt}) => {
    console.log(id)
    
    
    return (
        <div>
            <h1>{id}</h1>
        <h1>hello</h1>
        <div className="blogItem-wrap">
            <img src={cover} alt="cover"/>
            <Chip label={category}/>
            <h3>{title}</h3>
            <p className="blogItem-des">{description}</p>

            <footer>
                <div className="blogItem-author">
                    <img src={authorAvatar} alt="avtar"/>
                  <div>
                        <h6>{authorName}</h6>
                         <p>{createdAt}</p>
                         </div>
                        </div>
                   
            
            </footer>
         </div>
        </div>
    )
}

export default BlogItem
