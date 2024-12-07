"use client"
import './testimonials.scss'
import React, {useState, useEffect} from 'react';
import { getTestimonials } from '@/data/api/Api';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import { leftArrow, rightArrow } from '../common/Icons';
import LoadingIcon from '/public/assets/spinner.gif';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    const [loaded, setLoaded] = useState(false)


    const retrieveTestimonials = async () =>{
        const arr = await getTestimonials();
        setTestimonials(arr)
        // console.log("Courses array", arr)
    }

    useEffect(()=>{
        retrieveTestimonials()
    },[])

    useEffect(()=>{
      setTimeout(()=>{
        if(testimonials && testimonials.length > 0 )setLoaded(true)
        else setLoaded(false)
      },3000)
    },[testimonials])

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        fade:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            }
          },
      ]
      };
    return (loaded ? 
        <div className='testimonial-wrapper bg-slate-300'>
            <div className='container mx-auto py-6'>
                <h2 >Client Testimonials</h2>
                <Slider {...settings}>
                    {testimonials && testimonials.map((item, index) => (
                        <TestimonialCard key={index} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
        :<div className='course-loader-wrapper'><img src={LoadingIcon.src} alt="spinner"/></div>
    );
};

export default Testimonials;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`left-arrow ${className}`}
        onClick={onClick}
      >{rightArrow}</div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >{leftArrow}</div>
    );
  }