import React, { useEffect, useState } from 'react';
import './Home.css';
import './Responsive.css'
import iconU from '../images/icon-c.png'
import Union from '../images/Union.png'
import ServiceCard from '../Shared/ServiceCard';
import { Swiper, SwiperSlide } from "swiper/react";
import TestCard from '../Shared/TestCard'
import { Autoplay, Pagination, Navigation } from "swiper";
import TeamMamberCard from '../Shared/TeamMamberCard';
import company1 from '../images/icon/company-1.png'
import company2 from '../images/icon/company-2.png'
import company3 from '../images/icon/company-3.png'
import company4 from '../images/icon/company-4.png'
import company5 from '../images/icon/company-5.png'
import image1 from '../images/blog-image/image-1.jpg'
import image2 from '../images/blog-image/image-2.jpg'
import image3 from '../images/blog-image/image-2.webp'
import image4 from '../images/blog-image/image-3.jpg'
import image5 from '../images/blog-image/image-4.jpeg'
import image6 from '../images/blog-image/image-5.jpg'
import image7 from '../images/blog-image/image-6.jpg'
import { BlogCard } from '../Shared/BlogCard';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Home = () => {
    const [item, setItem] = useState(3);
    const [Partner, setPartner] = useState(4);
    const [slideTime, setSlideTime] = useState(7000)
    const windowWidth = window.screen.width;
    useEffect(() => {
        
        if (windowWidth < 600) {
            setItem(1)
            setPartner(1)
            setSlideTime(3000)
        }

    }, [windowWidth]);
    console.log(item)
    return (
        <main className='home-page'>
            <header className='animate__animated  animate__fadeIn'>
                <div className='container '>
                    <h1>Lorem Cupidatat</h1>
                    <h1>Duis Exercitation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptas ducimus perspiciatis rem molestias commodi quisquam, quaerat sint quidem nam autem. Accusamus debitis dicta aperiam saepe consectetur asperiores alias aliquid.</p>

                    <div className='button-group'>
                        <button className='btn-1'>Button L</button>
                        <button className='btn-2'>Button R</button>
                    </div>
                </div>
            </header>

            {/* header End Here  */}
            {/* header End Here  */}


            {/* Home Service start Here  */}
            {/* Home Service start Here  */}
            <AnimationOnScroll animateIn="animate__fadeInUp">
            <section className='home-service container'>
                <div className="service-card">
                    <img src={iconU} alt="" />
                    <h2>Miles Esther</h2>
                    <p>Voluptate exercitation incididunt aliquip deserunt</p>
                </div>
                <div className="service-card">
                    <img src={iconU} alt="" />
                    <h2>Miles Esther</h2>
                    <p>Voluptate exercitation incididunt aliquip deserunt</p>
                </div>
                <div className="service-card">
                    <img src={iconU} alt="" />
                    <h2>Miles Esther</h2>
                    <p>Voluptate exercitation incididunt aliquip deserunt</p>
                </div>
            </section>
            </AnimationOnScroll>
            {/* Home Service End Here  */}
            {/* Home Service End Here  */}

            {/* Home About Start Here  */}
            {/* Home About Start Here  */}
            <section className='home-about container'>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <img  src={Union} alt="" />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    
                <div className="content ">
                    <h5 className='sub-heading'>About us</h5>
                    <h1>Laboris commodo magna duis dolor</h1>
                    <p>
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
                    </p>
                    <button className='btn-1'>Button L</button>

                </div>

                </AnimationOnScroll>
               
            </section>
            {/* Home About End Here  */}
            {/* Home About End Here  */}

            {/* Home About Start Here  */}
            {/* Home About Start Here  */}
            <AnimationOnScroll animateIn="animate__fadeInUp">
            <section className='home-service-2 container'>
                <div className="service-card">
                    <img src={iconU} alt="" />
                    <h1>250 +</h1>
                    <p>Voluptate exercitation incididunt aliquip deserunt</p>
                </div>
                <div className="service-card">
                    <img src={iconU} alt="" />
                    <h1>50</h1>
                    <p>Voluptate exercitation incididunt aliquip deserunt</p>
                </div>
                <div className="service-card">
                    <img src={iconU} alt="" />
                    <h1>4,500 +</h1>
                    <p>Voluptate exercitation incididunt aliquip deserunt</p>
                </div>
                <div className="service-card">
                    <img src={iconU} alt="" />
                    <h1>4,500 +</h1>
                    <p>Voluptate exercitation incididunt aliquip deserunt</p>
                </div>
            </section>

            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
            <section className='home-service-3'>
                <div className="container">
                    <h5 className='sub-heading text-center'>About us</h5>
                    <h1 className='heading'>Laboris magna duis</h1>
                    <div className="container-sm">
                        <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
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
                    </AnimationOnScroll>
                </div>
            </section>
            </AnimationOnScroll>


            <AnimationOnScroll animateIn="animate__fadeInUp">
    
            <section className='mt-100'>
                <Testimonial />
            </section>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp">
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
                    </div>
                    <div className='mx-auto'>
                        <Link to={'/teams'} className='btn-1 mt-50'>See All</Link>
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

            <AnimationOnScroll animateIn="animate__fadeInUp">
            <section className='mt-150 our-blog'>
                <h5 className='sub-heading text-center '>Our Blog</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>

                <div className='mt-100'>
                    <Swiper
                        slidesPerView={item}
                        spaceBetween={0}
                        slidesPerGroup={item}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: slideTime,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <BlogCard
                                image={image1}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                image={image2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                image={image3}
                            />
                        </SwiperSlide>
                        <SwiperSlide><BlogCard
                            image={image4}
                        /> </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                image={image5}
                            />
                        </SwiperSlide>
                        <SwiperSlide><BlogCard image={image6} /> </SwiperSlide>
                        <SwiperSlide><BlogCard image={image7} /> </SwiperSlide>
                        <SwiperSlide><BlogCard image={image3} /> </SwiperSlide>
                        <SwiperSlide><BlogCard image={image1} /> </SwiperSlide>

                    </Swiper>
                </div>
                <div className='mx-auto'>
                        <Link to={'/blogs'} className='btn-1 mt-50'>See All</Link>
                    </div>
            </section>
            </AnimationOnScroll>
        </main>
    )
}

export default Home




// Testimonial Component 
// Testimonial Component 
// Testimonial Component 
const Testimonial = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/Data/testimonial.json')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])
    const [item, setItem] = useState(2);
    const windowWidth = window.screen.width;
    useEffect(() => {
        if (windowWidth < 600) {
            setItem(1)
        }
    }, [windowWidth]);
    return (
        <div>
            <div className="container">
                <h5 className='sub-heading text-center'>Testimonial</h5>
                <h1 className='heading'>Laboris magna duis</h1>
                <div className="container-sm">
                    <p className='text-center'> Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                </div>
            </div>

            <div className='testimonial container'>
                <Swiper

                    slidesPerView={item}
                    spaceBetween={0}
                    slidesPerGroup={item}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        data.map((test) => {

                            return (
                                <SwiperSlide key={test.id}>
                                    <div>
                                        <TestCard

                                            image={test.image}
                                            name={test.name}
                                            star={test.star}
                                            description={test.description}
                                            job={test.job}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })

                    }
                </Swiper>
            </div>
        </div>
    )
}
