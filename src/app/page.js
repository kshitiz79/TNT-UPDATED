"use client"; // This makes the component a client-side component

import HeroBanner from '@/components/herobanner/HeroBanner';
import Courses from '@/components/courses/Courses';
import descriptionImageUrl from '../../public/assets/description-img.jpg';
import Link from 'next/link';
import ImageDescriptionBlock from '@/components/imageDescriptionBlock/ImageDescriptionBlock';
import Testimonials from '@/components/testimonials/Testimonials';
import DataStripe from '@/components/dataStripe/DataStripe';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Home() {
  const pathname = usePathname(); // Get the current path
  console.log("Current path:", pathname); // For debugging

  const dataStripeInfo = [
    { name: "Courses", value: "15+", url: "assets/icn_settings.png" },
    { name: "Students", value: "200+", url: "assets/fa-solid_award.png" },
    { name: "Lecturers", value: "20+", url: "assets/carbon_tool.png" },
    { name: "Years", value: "5+", url: "assets/bx_bx-stats.png" },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <HeroBanner
        customClass="homepage-hero flex justify-center items-center relative"
        title="Develop your abilities and enhance your professional journey."
        isHomePage={pathname === '/'} // Only visible on homepage
      />

      {/* Data Stripe */}
      <DataStripe dataArray={dataStripeInfo} />

      {/* Courses Section */}
      <Courses title="Courses" isHomePage={pathname === '/'} />

      {/* Image Description Block */}
      <ImageDescriptionBlock
        imgUrl={descriptionImageUrl}
        title="Does Corporate Training hold significance?"
        subTitle="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
        descriptionOne="Corporate training holds paramount importance for fostering organizational success by providing employees with essential skills and knowledge to navigate dynamic industry landscapes."
        descriptionTwo="Corporate training holds paramount importance for fostering organizational success by providing employees with essential skills and knowledge to navigate dynamic industry landscapes."
      />

      {/* Signup Section */}
      {pathname === '/' && (
        <div className="bg-gray-800 text-white flex items-center pt-6 py-3 md:h-[100px] mt-6">
          <div className="container mx-auto flex justify-center items-center md:items-center md:flex-row flex-col">
            <div className="w-[80%] p-5 md:flex items-center justify-between md:relative md:bg-blue-950 bottom-[65px]">
              <div>
                <p className="font-bold">Signup and get the early bird offer?</p>
                <h2 className="text-white m-[0px]">Ready to Get Started!</h2>
              </div>
              <button>
                <Link
                  href="/courses"
                  type="button"
                  className="md:mt-0 p-4 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-3xl text-sm px-3 py-3 focus:outline-none"
                >
                  Register Now!
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Consulting Section */}
      {pathname === '/' && (
        <div className="bg-white w-full py-3">
          <div className="container lg:flex items-center py-3 justify-between m-auto">
            <div className="lg:mb-0 mb-3">
              <h3>Consulting Agency For Your Business</h3>
              <h4 className="text-gray-600 font-semibold">
                The quick fox jumps over the lazy dog
              </h4>
            </div>
            <button className="text-white bg-orange-500 rounded-xl p-3">
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
