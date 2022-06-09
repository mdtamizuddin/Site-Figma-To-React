import React from 'react'
import icon1 from '../images/icon/Vector.png'
import icon2 from '../images/icon/team-icon-1.png'
import icon3 from '../images/icon/team-icon-2.png'
const TeamMamberCard = () => {
    return (
        <div className='team-card'>
            <div className='team-image' style={{ backgroundImage: `url("https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000")` }}>

            </div>
            <div className='icons-member'>
                <img src={icon2} alt="" />
                <img src={icon1} alt="" />
                <img src={icon3} alt="" />
            </div>
            <h2>Miles Esther</h2>
            <h4>Lawyer</h4>
            
        </div>
    )
}

export default TeamMamberCard