import React from 'react';
import background from '../../assets/images/footer.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer 
        style={{'backgroundImage' : `url(${background})`,'backgroundPosition':'center','backgroundSize':'cover', 'height' : '100%'}}  className="p-10 bg-white text-black-content">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <footer className="footer footer-center p-8 bg-transparent text-base-content">
                    <div>
                        <p>Copyright &copy; {year} - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;