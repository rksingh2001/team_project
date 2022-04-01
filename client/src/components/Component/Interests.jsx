import React from 'react'
import "./Interest.scss"
import TinderCard from 'react-tinder-card'

const area_of_interests = [
    'Anime',
    'Web Series',
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
        <div className="interest-body">
        {
            area_of_interests.map(
                interest => 
                <TinderCard 
                    className="bubbles"
                    key={interest}
                >
                    <p className="bubble-text">{interest}</p>
                </TinderCard>
            )
        }
        </div>
    </div>
  )
}

export default Interests