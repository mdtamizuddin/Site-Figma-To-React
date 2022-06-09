import React from 'react'
import './Style.css'
import ReactStars from "react-rating-stars-component";

const TestCard = (props) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className='test-card'>
            <div className='test-card-image' style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className='test-card-desc'>
                <div>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#FFB401"
                        color="#FFB401"
                    />
                </div>
                <p>{props.description}</p>
                <h2>{props.name}</h2>
                <h4>{props.job}</h4>
            </div>
        </div>
    )
}

export default TestCard