import React from 'react'
import { NavLink } from 'react-router-dom'
import  './Projects.css'
import web from './image/website-1.jpg'
const ProjectDetails = () => {
  return (
    <div  className='project-details'>
          <header className='animate__animated  animate__fadeIn  comp-header'  >
                <div className='container'>
                    <h3>Project Details</h3>
                    <h1>One of your best product become more stand out</h1>
                    <div className='mt-50'>
                    <NavLink className='nav-link' to='/projects'>PROJECTS</NavLink>
                        |
                        <NavLink className='nav-link' to='/project/details'>DETAILS</NavLink>
                    </div>
                </div>
            </header>
            <div className='container mt-50'>
                <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</p>
                <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. </p>
                <img className='img-fluid mt-50' src={web} alt="" />
                <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</p>
            </div>
            {/* section End  */}

    </div>
  )
}

export default ProjectDetails