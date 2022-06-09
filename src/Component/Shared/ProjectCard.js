import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = (props) => {
    const navigate = useNavigate()
    const Details = () => {
        navigate("/project/details")
    }
    return (
        <div onClick={Details} className='project-card ' >
            <div className='image' style={{ backgroundImage: `url('${props.image})` }} ></div>
            <div className=' card-desc'>
                <p>Voluptate exercitation</p>
                <h3>Mechanics of mechanical robots in major states </h3>
            </div>
        </div>
    )
}

export default ProjectCard