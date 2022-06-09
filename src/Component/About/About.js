import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import './About.css'
import ProccessCard from '../Shared/ProccessCard'

import company1 from '../images/icon/company-1.png'
import company2 from '../images/icon/company-2.png'
import company3 from '../images/icon/company-3.png'
import company4 from '../images/icon/company-4.png'
import company5 from '../images/icon/company-5.png'
import ServiceCard from '../Shared/ServiceCard'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimationOnScroll } from 'react-animation-on-scroll'

const About = () => {
    const [data, setData] = useState([])
        const  Url ='/Data/proccess.json' ;
    useEffect(() => {
        fetch(Url)
            .then(res => res.json())
            .then(pro => setData(pro))
    }, [Url]);

    const [Partner, setPartner] = useState(4);
    const [slideTime, setSlideTime] = useState(7000)
    const windowWidth = window.screen.width;
    useEffect(() => {
        if (windowWidth < 600) {

            setPartner(1)
            setSlideTime(3000)
        }
    }, [windowWidth]);
    return (
        <main className='about'>

            <header className='animate__animated  animate__fadeIn  comp-header' >
                <div className='container'>
                    <h1>About Us</h1>
                    <div className='mt-50'>
                        <NavLink className='nav-link' to='/'>HOME</NavLink>
                        |
                        <NavLink className='nav-link' to='/about'>ABOUT</NavLink>
                    </div>
                </div>
            </header>

            {/* header end  */}
            {/* header end  */}

            <section className='about-process mt-150  animate__animated  animate__fadeInLeft'>
                <h5 className='sub-heading text-center '>Our Process</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>
                <div className='container mt-50'>
                    <div className='grid-2-col '>
                        {
                            data.map((process) => {
                                return (
                                    <ProccessCard
                                        key={process.id}
                                        title={process.title}
                                        description={process.description}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <section className='home-service-3'>
                    <div className="container">
                        <h5 className='sub-heading text-center'>Our Services</h5>
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
            </AnimationOnScroll>


            <AnimationOnScroll animateIn="animate__fadeInUp">
            <section className='mt-150'>

                <h5 className='sub-heading text-center '>Our Partner</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>
                <div>
                    <div className="container  mt-50">
                        <div className='our-partner'>
                            <Swiper
                                slidesPerView={Partner}
                                spaceBetween={0}
                                slidesPerGroup={Partner}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                autoplay={{
                                    delay: slideTime,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={company1} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={company2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={company3} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={company4} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={company5} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={company1} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={company2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={company3} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            </AnimationOnScroll>
        </main>
    )
}

export default About