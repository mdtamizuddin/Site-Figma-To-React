import React from 'react'
import bookmark from '../images/icon/bookmark.png'
import more from '../images/icon/More.png'
export const BlogCard = (props) => {
    const user = "https://w0.peakpx.com/wallpaper/694/172/HD-wallpaper-lee-pace-bw-black-face-man-portrait-actor.jpg";
    const name = "Paula Ramsey"
  return (
    <div className='blog-card'>
        <div className='blog-image' style={{backgroundImage : `url(${props.image})`}}></div>
        <div className='content'>
            <h1>Laborum magna nulla</h1>
            <p>Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation deserunt...</p>
            <div className='blog-divider'></div>
           
            <div className='blog-user'>
                <div className='d-flex item-center'>
                <div style={{backgroundImage : `url(${user})`}} className='blog-user-image'></div>
                <div className='name-date'>
                    <h5 className='name'>{name}</h5>
                    <h5 className='date'>March 24, 2022</h5>
                </div>
                </div>
                <div className='blog-side-icon'>
                    <img src={bookmark} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
