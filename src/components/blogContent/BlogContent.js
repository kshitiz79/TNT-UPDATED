"use client"
import { getMediumData } from '@/data/api/Api';
import React, {useState, useEffect} from 'react';
import HTMLReactParser from 'html-react-parser';
import "./BlogContent.scss"

const BlogContent = () => {
    const [mediumBlogs, setMediumBlogs] = useState([])
    const [blogFeed, setBlogFeed] = useState();

    const retrieveMediumBlogs = async () =>{
        const {feed, blogs} = await getMediumData();
        setMediumBlogs(blogs)
    }

    useEffect(()=>{
        retrieveMediumBlogs()
    },[])

    return (
        <>
            <h3 className='mt-5 text-black'>Read through our Medium Blogs!</h3>
            <div className='blog-content-wrapper grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5'>
                {mediumBlogs && mediumBlogs.length > 0 ?
                    mediumBlogs && mediumBlogs.map((item, index) => (
                        <BlogCard key={index} item={item} />
                    ))
                    :
                    <div className='container mx-auto py-5'>
                        <div className="bg-teal-100 border-l-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <p className="font-bold">Thanks for the Enthiusiasm</p>
                            <p>Currently there are no blogs available!</p>
                        </div>
                    </div>
                }
            </div>
        </>
        
    );
};

export default BlogContent;

const BlogCard = ({item}) => {
    console.log("item in card", item)
    return (
        <div className='blog-card shadow-lg flex flex-col items-start justify-between'>
            <div className='placeholder-text'>Title:</div>
            <h6>{HTMLReactParser(item.title)}</h6>
            <div className='placeholder-text mt-3'>Author:</div>
            <p className='author'>{(item.author)}</p>
            
            {item.categories && item.categories.length > 0 && <div className='category-wrp'>
            <div className='placeholder-text mt-3'>Categories:</div>
                { item.categories.map((item,index)=>(
                    <span key={index} className='category-item'>{item}</span>
                ))}
            </div>}
            <a href={item.link} className='btn btn-primary mt-3'>Read More</a>
        </div>
    )
}