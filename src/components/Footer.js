import React from 'react'
import './Style.css'
// import logo from './assets/footer_logo.png'

export default function Footer() {
    return (
        <div class='footer'>
            <div class="footer-details">
                <div class='social-links'>
                    <a>instagram</a>
                    <a>linkedIn</a>
                    <a>github</a>
                </div>
                <div class='footer-text'>
                    <div>
                        Made with ❤️ by Manish Kumar
                    </div>
                    <div class="copyright-line">
                        <p>© Copyright Reserved, 2020</p>
                    </div>
                </div>
            </div>
            <div class="footer-image">
                <img height="100%" src='/assets/footer_logo.png' alt='ss' ></img>
            </div>
        </div>
    )
}

// export default Footer