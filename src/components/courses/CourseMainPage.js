"use client"
import React,{useState, useEffect} from 'react';
import LoadingIcon from '/public/assets/spinner.gif';
import { getCourse} from '@/data/api/Api';
import ImageDescriptionBlock from '@/components/imageDescriptionBlock/ImageDescriptionBlock';

import Testimonials from '@/components/testimonials/Testimonials';
import HeroBanner from '@/components/herobanner/HeroBanner';

import TrainerCardLink from '@/components/trainerCardLink/TrainerCardLink';
import TabSections from '@/components/tabSections/TabSections';
import CourseDisplayBanner from '@/components/courseDisplayBanner/CourseDisplayBanner';

const CourseMainPage = ({id}) => {
    const [training, setTraining] = useState();
    const getCourseDetails = async() =>{
        const courseInfo = await getCourse(id);
        setTraining(courseInfo)
    }

    useEffect(()=>{
        getCourseDetails()
    },[id])

    const descriptionImageBlockOneData = {
        imgUrl :training?.thumbnailImage,
        description: training?.description,
        title: training?.mainTitle,
    }

    return (
        training ? 
        <div className='course-item-page'>
            <HeroBanner heroUrl={training && training.heroImage} customClass="common-hero flex items-end pb-5" title={training && training.training.name}/>
            <ImageDescriptionBlock imgUrl={descriptionImageBlockOneData.imgUrl} description={descriptionImageBlockOneData.description} isCourse={true} cssClass="my-3" title={descriptionImageBlockOneData.title}/>
            <CourseDisplayBanner bannerText={training && training.mainBannerText}/>
            <TabSections 
                courseContent = {training && training.syllabus} 
                programHighlights={training && training.programHighlights}
                programImages = {training && training.programImages}
                projectDetails = {training && training.projectDetails}
                upcomingClasses = {training && training.upcomingClasses}
            />

            <TrainerCardLink trainerInfo={training && training.trainerDetails}/>
            <Testimonials/>
        </div>
        :<div className='course-loader-wrapper'><img src={LoadingIcon.src} alt="spinner"/></div>
    );
};

export default CourseMainPage;