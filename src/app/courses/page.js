import React from 'react';
import HeroBanner from '@/components/herobanner/HeroBanner';
import Courses from '@/components/courses/Courses';

export const metadata = {
    title: 'TNT Techies Guide - All Courses',
    description: 'Shows all the courses available in the institute.',
}

const CoursesPage = () => {
    return (
        <>
            <HeroBanner customClass="common-hero flex items-end pb-5" title="Courses"/>
            <Courses isHomePage={false}/>
        </>
            
    );
};

export default CoursesPage;