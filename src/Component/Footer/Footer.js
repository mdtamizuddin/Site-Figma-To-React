import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import vector from '../images/icon/Vector-1.png'
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid-4-column'>
                    <div className='box'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, incididunt ut labore.</p>
                        <button className='btn-1'>Join Us</button>
                    </div>
                    <div className='box-2'>
                        <h2>Contact Us</h2>
                        <p>4517 Washington Ave.<br /> Manchester, Kentucky 39495
                            deanna.curtis@example.com<br />
                            (671) 555-0110
                        </p>
                        <h2>Openinf Hours</h2>
                        <p>Mon - Sat 8:00 - 17:30, <br />
                            Sunday - CLOSED
                        </p>
                    </div>
                    <div className='box-3'>
                        <h2>Userfull Links</h2>
                        <Link to='/About'> <i className="fa-solid fa-angle-right"></i>
                            About
                        </Link>
                        <Link to='/team'> <i className="fa-solid fa-angle-right"></i>
                            Our Team
                        </Link>
                        <Link to='/pricing'> <i className="fa-solid fa-angle-right"></i>
                            Pricing Plans
                        </Link>
                        <Link to='/blog'> <i className="fa-solid fa-angle-right"></i>
                            Blog
                        </Link>
                        <Link to='/404'> <i className="fa-solid fa-angle-right"></i>
                            404 Page
                        </Link>
                    </div>
                    <div className='bo-4'>
                        <h2>Our Project</h2>
                        <img src={vector} alt="" />
                    </div>
                </div>
            </footer>
            <div className='copyright'>
                <p>Copyright © 2022. All right reserved</p>
                
            </div>
        </>
    )
}

export default Footer