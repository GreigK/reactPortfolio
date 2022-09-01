import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='about'>
        <h2>Hi, my name is Greig</h2>
        <div className='prompt'> 
            <p> 
                A software developer with a passion for learning and creating
            </p> 
        </div>
        </div>
    <div className='skills'></div>
        <h1> Skills</h1>
        <ul className='"list'>
            <li className='item'>
                <h2> Front-End</h2>
                <span> 
                    React, HTML, CSS
                </span>
            </li>
            <li className='item'>
                <h2> Back-End</h2>
                <span> 
                    MySQL
                </span>
            <li className='item'>
                <h2> Languages</h2>
                <span> 
                    Python, JavaScript
                </span>
            </li>
            </li>
        </ul>

    </div>
  )
}

export default Home