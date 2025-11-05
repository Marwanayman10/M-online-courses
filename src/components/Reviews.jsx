import React from 'react'
import SectionHeader from './SectionHeader'
import { ratingData } from './Data'
import Review from './Review';
import "./Reviews.css"

function Reviews() {
return (
    <section id='reviews'>
    <div className="container">
        <SectionHeader title={"Each and every client is important"} description={"Discover what our students are saying in the Reviews section! Real feedback from learning who have experienced and benefited from our courses."}/>

    <div className="ratings">
        {ratingData.map(rating =>{
            const {id , description , img , stars , name ,job } = rating;
            return <Review key={id} description={description} img={img} stars={stars} name={name} job={job}/>
        })}
    </div>
    </div>
    </section>
)
}

export default Reviews
