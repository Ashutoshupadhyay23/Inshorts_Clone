import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
            Inshorts clone by -{" "}
            <a href="https://www.linkedin.com/in/ashutosh-upadhyay23" target='_blank'>
                Ashutosh Upadhyay
            </a>
        </span>
        <hr style={{ width: "90%" }} />
        <div className="iconContainer">
            <a href="https://www.instagram.com/ashutoshupadhya_/" target="__blank">
                <i className="fab fa-instagram-square fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-upadhyay23" target="__blank">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://ashutoshupadhyay23.github.io/Portfolio/" target="__blank">
                <i className="fas fa-link fa-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer