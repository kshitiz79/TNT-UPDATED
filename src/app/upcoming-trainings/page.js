import React from 'react';
import HeroBanner from '@/components/herobanner/HeroBanner';
import DataTable from '@/components/dataTable/DataTable';

export const metadata = {
    title: 'TNT Techies Guide - Upcoming Courses',
    description: 'All the upcoming classes which will commence in the future',
}

const page = () => {
    return (
        <>
            <HeroBanner customClass="common-hero flex items-end pb-5" title="Upcoming Classes"/> 
            <DataTable dataListType="upcoming-trainings"/>
        </>
    );
};

export default page;