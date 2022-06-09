import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCard from '../Shared/ProjectCard'
import './Projects.css'
import web1 from './image/website-1.jpg'
const Projects = () => {
    
    return (
        <main className='projects'>
            <header className='animate__animated  animate__fadeIn  comp-header'  >
                <div className='container'>
                    <h1>Our Projects</h1>
                    <div className='mt-50'>
                        <NavLink className='nav-link' to='/'>HOME</NavLink>
                        |
                        <NavLink className='nav-link' to='/projects'>PROJECTS</NavLink>
                    </div>
                </div>
            </header>

            {/* section End  */}

            <section className='mt-100'>
                <h5 className='sub-heading text-center'>Our Projects</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>
                <div className='container mt-50' >

                    <div className='grid-2-col'>
                        <ProjectCard
                            image={"https://colorlib.com/wp/wp-content/uploads/sites/2/27_website_mockup.jpg"}
                        />

                        <ProjectCard
                            image={"https://colorlib.com/wp/wp-content/uploads/sites/2/27_website_mockup.jpg"}
                        />

                        <ProjectCard
                            image={"https://colorlib.com/wp/wp-content/uploads/sites/2/27_website_mockup.jpg"}
                        />

                        <ProjectCard
                            image={"https://colorlib.com/wp/wp-content/uploads/sites/2/27_website_mockup.jpg"}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Projects