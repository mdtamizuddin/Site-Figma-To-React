import React from 'react'
import { NavLink } from 'react-router-dom'
import ServiceCard from '../Shared/ServiceCard'

const Service = () => {
  return (
    <div>
        <header className='animate__animated  animate__fadeIn  comp-header'  >
                <div className='container'>
                    <h1>Services</h1>
                    <div className='mt-50'>
                        <NavLink className='nav-link' to='/'>HOME</NavLink>
                        |
                        <NavLink className='nav-link' to='/service'>SERVICE</NavLink>
                    </div>
                </div>
            </header>


          <section className='home-service-3'>
                <div className="container">
                    <h5 className='sub-heading text-center'>Service</h5>
                    <h1 className='heading'>Laboris magna duis</h1>
                    <div className="container-sm">
                        <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                    </div>
                  
                    <div className="grid-4-column mt-50">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
        
                </div>
            </section>
    </div>
  )
}

export default Service