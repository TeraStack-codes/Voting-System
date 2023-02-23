import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
        <div className="container">
            <div className="about-overlay">
                <div className="about-bg"></div>
            </div>
            <div className="about-content">
                <h1 className="about-title">A<Link className="highlight" to="https://www.github.com/terastack-codes" target="_blank"> TirthNotFound </Link>Project</h1>
                <p className="about-description">
                    <h1 className="about-d-name">Start Date: </h1><h2 className='about-d-value'>14/02/2023</h2> <br />
                    <h1 className="about-d-name">End Date: </h1><h2 className='about-d-value'>Project Still Ongoing</h2> <br />
                    <h1 className="about-d-name">Code: </h1><h2 className='about-d-value'><Link to="https://github.com/TeraStack-codes/Voting-System" className="nodeco">Github</Link></h2>
                </p>
            </div>
        </div>
    </>
  )
}

export default About