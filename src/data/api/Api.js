var baseUrl = "http://localhost:3000/"
var baseUrl = "https://illustrious-sable-f8d98c.netlify.app/db.json"
import db from "../db/db.json" assert { type: 'json' };
const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jetti.dinesh"

export async function getCourses() {
    // const response = await fetch(baseUrl+"trainings");
    // const courses = await response.json();
    // console.log("courses",courses)
    // return courses;
    return db.trainings;
}
export async function getServices() {
    // const response = await fetch(baseUrl+"trainings");
    // const courses = await response.json();
    // console.log("courses",courses)
    // return courses;
    return db.services;
}
export async function getService(id) {
    // const response = await fetch(baseUrl+"trainings");
    // const courses = await response.json();
    console.log("courses id",id)
    // return courses;

    var selectedService = db.services.filter((item)=>item.id == id)
    console.log("selectedService",selectedService)
    return selectedService;
}
export async function getTrendingCourses() {
    // const response = await fetch(baseUrl+"trainings");
    // const courses = await response.json();
    // const trendingCourses = courses.filter((course)=> course.training.isTrending === true)
    // console.log("courses",courses)
    // return trendingCourses;
    var trendingCourses = db.trainings.filter((item)=>item.training.isTrending === true || item.training.isTrending.toLowerCase() == "true")
    return trendingCourses;
}

export async function getCourse(id) {
    // const response = await fetch(baseUrl+"trainings/"+id);
    // const course = await response.json();
    // console.log("courses",course)
    // return course;
    var selectedCourse = db.trainings.filter((item)=>item.id === id)
    // console.log("selected course",selectedCourse)
    return selectedCourse[0];
}

export async function getUpcomingTrainings() {
    // console.log("this is the db",db)
    var classes = db.classes;
    // const response = await fetch(db);
    // const trainings = await response.json();
    // console.log("courses",trainings)
    return classes;
}

export async function getTestimonials() {
    // const response = await fetch(baseUrl+"testimonials");
    // const testimonials = await response.json();
    // console.log("testimonials",testimonials)
    // return testimonials;
    return db.testimonials;
}

export async function getMediumData(){
    const response = await fetch(mediumURL);
    const blogs = await response.json();
    console.log(blogs)
    return {feed: blogs.feed, blogs: blogs.items};
}