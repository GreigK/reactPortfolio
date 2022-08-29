import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div>
    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    </div>
    <p>
        <a href='https://github.com/GreigK'> &copy; GitHub </a>   <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="greig-kerr-87b47324a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/greig-kerr-87b47324a?trk=profile-badge">Greig Kerr</a></div>
        <a href='https://www.linkedin.com/in/greig-kerr-87b47324a/' img src="https://img.icons8.com/cute-clipart/64/1A1A1A/linkedin.png"/>
    </p>
    </div>
  )
}

export default Footer