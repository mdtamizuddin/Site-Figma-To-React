import React from 'react'
import { NavLink } from 'react-router-dom'
import './Contact.css'
import map from './image/map.png'
import person from './image/person.png'
import email from './image/email.png'
const Contact = () => {
    const SubmitContact = (e) => {
        e.preventDefault()
    }

    return (
        <div className='contact '>
            <header className='animate__animated  animate__fadeIn  comp-header'  >
                <div className='container'>
                    <h1>Contact Us</h1>
                    <div className='mt-50'>
                        <NavLink className='nav-link' to='/'>HOME</NavLink>
                        |
                        <NavLink className='nav-link' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </header>
            <section className='mt-100'>
                <h5 className='sub-heading text-center'>Conatct us</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>

                <div className='container mt-50 '>
                    <img className='img-fluid ' src={map} alt="" />
                </div>

                <div className='container'>
                    <form onSubmit={SubmitContact}>
                        <div className='form-group'>

                            <div className='input-group'>
                                <input type="text" name='name' placeholder='Your Name' />
                                <img src={person} alt="" />
                            </div>

                            <div className='input-group'>
                                <input type="email" name='name' placeholder='Your Email' />
                                <img src={email} alt="" />
                            </div>
                        </div>

                        {/* form group End Here  */}

                        <textarea className='message-Form' placeholder='Message'></textarea>

                        <div className='mx-auto '>
                            <button type='submit' className='btn-1'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>

        </div>

    )
}

export default Contact

