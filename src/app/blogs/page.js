import React from 'react';
import HeroBanner from '@/components/herobanner/HeroBanner';
import BlogContent from '@/components/blogContent/BlogContent';

export const metadata = {
    title: 'TNT Techies Guide - Blogs',
    description: 'Read through TNT Techies Guide blogs and enhance your knowledge',
}

const page = () => {
    return (
        <>
            <HeroBanner customClass="common-hero flex items-end pb-5" title="Blogs"/>
            <div className='container mx-auto'>
                <BlogContent/>
            </div>
            
        </>
    );
};

export default page;