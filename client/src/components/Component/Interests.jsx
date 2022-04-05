import React from 'react'
import "./Interest.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const area_of_interests = [
    'Anime',
    'Food',
    'Shopping',
    'BGMI',
    'Sports',
    'KPop',
    'Coding',
    'Memes',
    'Music',
    'Dance',
    'Pet Lover'
]

function Interests() {
  return (
    <div className="interest-container">
        <h1>Area of Interests</h1>
        <Carousel showArrows={false} className="carousel">
            <div className="interest-body">
                <h1 className="category">Category</h1>
                {
                    area_of_interests.map(
                        interest => 
                        <div 
                            className="bubbles"
                            key={interest}
                        >
                            <p className="bubble-text">{interest}</p>
                        </div>
                    )
                }
            </div>

            <div className="interest-body">
                <h1>Category</h1>
                {
                    area_of_interests.map(
                        interest => 
                        <div 
                            className="bubbles"
                            key={interest}
                        >
                            <p className="bubble-text">{interest}</p>
                        </div>
                    )
                }
            </div>

            <div className="interest-body">
                <h1>Category</h1>
                {
                    area_of_interests.map(
                        interest => 
                        <div 
                            className="bubbles"
                            key={interest}
                        >
                            <p className="bubble-text">{interest}</p>
                        </div>
                    )
                }
            </div>

            <div className="interest-body">
                <h1>Category</h1>
                {
                    area_of_interests.map(
                        interest => 
                        <div 
                            className="bubbles"
                            key={interest}
                        >
                            <p className="bubble-text">{interest}</p>
                        </div>
                    )
                }
            </div>
        </Carousel>
    </div>
  )
}

export default Interests