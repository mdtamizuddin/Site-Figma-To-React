import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Navbar.css'
import './Responsive.css'
import logo from '../images/logo.png'
import envelope from '../images/envelope.png'
import phone from '../images/phone-screen.png'
import { NavLink } from 'react-router-dom'
const navUrls = ["home","about", "service","teams", "projects", "price","blogs","contact"]
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const navHandler = () => {
        if (navbar) {
            setNavbar(false)
        }
        else {
            setNavbar(true)
        }
    }
    return (
        <>
            <div className='nav' >
                <div className="navbar-top ">
                    <div className="container top-navbar">
                        <div className="left-side">
                            <p>
                            <img src={phone} alt="" />
                                002 0106 5593290</p>
                            <p className='ms-lg-5 ms-sm-0 ms-md-0'>
                                <img src={envelope} alt="" />
                               exmaple@gmail.com</p>
                        </div>
                        <div className="right-side d-flex">
                            <div className='search-box mr-10'>
                            <input className='search-feild' placeholder='Search' type="text" />
                            <button>

                                <FontAwesomeIcon icon={faSearch}/>
                               
                            </button>
                            </div>
                            <i className="fa-brands fa-facebook" > </i>
                            <i className="fa-brands fa-google-plus" > </i>
                            <i className="fa-brands fa-twitter" > </i>
                            <i className="fa-brands fa-linkedin" > </i>

                            <button className='button-primary-sm'>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="navbar_top" className="navbar">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <FontAwesomeIcon onClick={navHandler} icon={faBars} />
                        </div>
                        <ul className={navbar ? "show" : "dont-show"}>
                            {
                                navUrls.map(url => <li key={url}> <NavLink to={url} className='nav-link'>{url}</NavLink></li>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar