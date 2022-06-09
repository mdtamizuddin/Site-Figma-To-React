import React from 'react'
import { NavLink  } from 'react-router-dom'
import './Teams.css'
import  TeamMamberCard from  '../Shared/TeamMamberCard';

const Teams = () => {
  return (
    <main>
       <header className='animate__animated  animate__fadeIn  comp-header'  >
                <div className='container'>
                    <h1>Our Teams</h1>
                    <div className='mt-50'>
                        <NavLink className='nav-link' to='/'>HOME</NavLink>
                        |
                        <NavLink className='nav-link' to='/teams'>TEAMS</NavLink>
                    </div>
                </div>
            </header>
            <section className='mt-150'>
                <h5 className='sub-heading text-center '>Our Teams</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>

                <div className='container mt-80'>
                    <div className='team-member-container'>
                        <TeamMamberCard />
                        <TeamMamberCard />
                        <TeamMamberCard />
                        <TeamMamberCard />
                        <TeamMamberCard />
                        <TeamMamberCard />
                        <TeamMamberCard />
                        <TeamMamberCard />
                        <TeamMamberCard />
                    </div>
             
                </div>
            </section>
    </main>
  )
}

export default Teams