import React from 'react'
import { NavLink } from 'react-router-dom'

const Price = () => {
    return (
        <div>
            <header className='animate__animated  animate__fadeIn  comp-header'  >
                <div className='container'>
                    <h1>Price</h1>
                    <div className='mt-50'>
                        <NavLink className='nav-link' to='/'>HOME</NavLink>
                        |
                        <NavLink className='nav-link' to='/price'>PRICE</NavLink>
                    </div>
                </div>
            </header>

            <section className='mt-100'>
                <h5 className='sub-heading text-center'>Our Price</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>
                <div className='conainer'>

                    <div className='price-container'>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Price