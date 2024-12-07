import React from 'react';
import "./TabSection.scss";
import { Tabs } from 'flowbite-react';
import { tabTheme } from './TabTheme';
import CourseInfoCard from '../courseInfoCard/CourseInfoCard';
import CourseImageCard from '../courseImageCard/CourseImageCard';
import SyllabusAccordion from '../syllabusAccordion/SyllabusAccordion';
import ProjectCards from '../projectCards/ProjectCards';

const TabSections = ({courseContent, programHighlights, programImages,projectDetails,upcomingClasses}) => {
    // console.log("Syllabus", courseContent, programHighlights, programImages,projectDetails,upcomingClasses)
    const tabTitles = [
        "Program Highlights",
        "Course Curriculum",
        "Projects",
        "Schedule"
    ]
    return (
        <div className='container mx-auto py-5 tab-section'>
            <Tabs aria-label="Tabs with underline" style="underline" theme={tabTheme}>
                {programHighlights && <Tabs.Item active title={tabTitles[0]}>
                    <CourseInfoCard programHighLights={programHighlights && programHighlights}/>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
                        {programImages && programImages.map((item, index)=>(
                            <CourseImageCard
                                key={index}
                                imgUrl={item.imgUrl}
                                heading={item.heading}
                                subHeading={item.subHeading}
                                cssClass={item.cssClass}
                            />
                        ))}
                    </div>
                </Tabs.Item>}
                {courseContent && <Tabs.Item title={tabTitles[1]}>
                    <SyllabusAccordion itemArray={courseContent && courseContent}/>
                </Tabs.Item>}
                {projectDetails && <Tabs.Item title={tabTitles[2]}>
                    {projectDetails && <div className=''>
                        <h3>{projectDetails.title}</h3>
                        <p>{projectDetails.description}</p>
                        <ProjectCards projectCardList={projectDetails.projectInfoList}/>
                    </div>}
                </Tabs.Item>}
                {upcomingClasses && <Tabs.Item title={tabTitles[3]}>
                    {upcomingClasses && upcomingClasses.map((item, index)=>(
                        <CourseInfoCard key={index} programHighLights={item.programHighlights && item.programHighlights}/>
                    ))}
                </Tabs.Item>}
            </Tabs>
        </div>
        
    );
};
export default TabSections;