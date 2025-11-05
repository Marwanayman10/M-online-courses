import React from 'react'
import SectionHeader from './SectionHeader'
import "./Courses.css"
import { coursesData } from './Data'
import Course from './Course'

function Courses() {
  return (
    <section id='courses'>
        <div className="container">
            <SectionHeader title="Make Online education acessible" description="Education is the most powerful tool to unlock potential, ingite curiosity, and shape a brighter future. At our platform, we believe in making learning accessible, engaging, and transformative, empowering students to achieve their dreams and build the skills they need for success in an ever-changing world."/>
            <div className="courses-container">
              {coursesData.map((course) =>{
                const {department,description ,title ,img ,sales , price, id ,discount , duration , lessons, rating } = course;
                
                return <Course 
                  key={id}
                  department={department} 
                  description={description}
                  title={title} 
                  img={img}
                  sales={sales} 
                  price={price} 
                  discount={discount} 
                  duration={duration}
                  lessons={lessons} 
                  rating={rating}/>
              })}
            </div>
        </div>
      
    </section>
  )
}

export default Courses
