import React from 'react';
import { getCourse} from '@/data/api/Api';


import CourseMainPage from '@/components/courses/CourseMainPage';

export async function generateMetadata({ params, searchParams }){
    // read route params
    const id = params.id
   
    // fetch data
    const product = await getCourse(id);
   
    return {
      title: product && product.title,
      description: product && product?.training.name
    //   openGraph: {
    //     images: ['/some-specific-page-image.jpg', ...previousImages],
    //   },
    }
  }

const TrainingItem = ({params}) => {
    const id = params.courseId;
    console.log("iddddd",id)
    
    return (
        <CourseMainPage id={id}/>
    );
};

export default TrainingItem;
