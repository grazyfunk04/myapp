import React from 'react'
import './fourth.css'

const Fourth = () => {
  return (
    <div className="container">
    <h1>Current Subscription Plan</h1>
    <div className="plan-details">
        <div className="plan-name">Basic</div>
        <div className="plan-price">₹200/mo</div>
    </div>
    <div className="plan-features">
        <h2>Plan Features:</h2>
        <ul>
        <li>Video Quality: Good</li>
        <li>Resolution: 480p</li>
        <li>Devices you can use to watch</li>
        <ol>
            <li>Phone</li>
            <li>Tablet</li>
            <li>Computer</li>
            <li>TV</li>
        </ol>
        </ul>
    </div>
    </div>
  )
}

export default Fourth