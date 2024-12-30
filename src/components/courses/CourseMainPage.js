"use client";

import React, { useState, useEffect } from "react";
import LoadingIcon from "/public/assets/spinner.gif";
import { getCourse } from "@/data/api/Api";
import ImageDescriptionBlock from "@/components/imageDescriptionBlock/ImageDescriptionBlock";
import Testimonials from "@/components/testimonials/Testimonials";
import HeroBanner from "@/components/herobanner/HeroBanner";
import TrainerCardLink from "@/components/trainerCardLink/TrainerCardLink";
import TabSections from "@/components/tabSections/TabSections";
import CourseDisplayBanner from "@/components/courseDisplayBanner/CourseDisplayBanner";
import Image from "next/image";
import CoursesForm from "./CourcesForm";

const CourseMainPage = ({ id }) => {
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Course Details
  const getCourseDetails = async () => {
    try {
      const courseInfo = await getCourse(id);
      console.log("Course Info:", courseInfo); // Log API response
      setTraining(courseInfo);
    } catch (error) {
      console.error("Failed to load course data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourseDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Image src={LoadingIcon} alt="Loading..." width={100} height={100} />
      </div>
    );
  }

  if (!training) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Failed to load course data. Please try again later.</p>
      </div>
    );
  }

  // Description Block Data
  const descriptionImageBlockOneData = {
    imgUrl: training?.thumbnailImage || "/assets/default-placeholder.png",
    title: training?.mainTitle || "Default Title",
    description: training?.description || "<p>No description available</p>",
  };

  console.log("descriptionImageBlockOneData:", descriptionImageBlockOneData);

  return (
    <div className="course-item-page">
      {/* Hero Banner */}
      <HeroBanner
        heroUrl={training?.heroImage}
        customClass="common-hero flex items-end pb-5 flex justify-center items-center"
        title={training?.training?.name || "Course Name"}
      />

      {/* Description Block */}
      <ImageDescriptionBlock
        imgUrl={descriptionImageBlockOneData.imgUrl}
        description={descriptionImageBlockOneData.description}
        isCourse={true}
        cssClass="my-3"
        title={descriptionImageBlockOneData.title}
      />

      {/* Course Display Banner */}
      {/* <CourseDisplayBanner bannerText={training?.mainBannerText || "Default Banner Text"} /> */}

      {/* Tab Sections */}
      <TabSections
        courseContent={training?.syllabus || []}
        programHighlights={training?.programHighlights || []}
        programImages={training?.programImages || []}
        projectDetails={training?.projectDetails || []}
        upcomingClasses={training?.upcomingClasses || []}
      />

      {/* Trainer Info */}
      {/* <TrainerCardLink trainerInfo={training?.trainerDetails || {}} /> */}

      <div className="flex items-center justify-center">
        <CoursesForm />
      </div>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default CourseMainPage;
