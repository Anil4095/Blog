import React from 'react'
import Bloglist from '../../component/Home/BlogList/Bloglist'
import Header from '../../component/Home/Header/Header'
import SearchBar from '../../component/Home/Search/Search'
import { blogData } from '../../config/Data'


const Home = () => {
    return (
        <div className="container">
            <Header/>
            <SearchBar/>
            <Bloglist blogs={blogData}/>
        </div>
    )
}

export default Home
