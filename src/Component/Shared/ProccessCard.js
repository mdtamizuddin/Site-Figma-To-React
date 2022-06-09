import React from 'react'
import iconCDark from '../images/icon-c-dark.png'
const ProccessCard = (props) => {
  return (
    <div className='process-card'>
        <img src={iconCDark} alt="" />
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ProccessCard