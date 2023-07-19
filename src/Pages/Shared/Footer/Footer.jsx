import React from 'react';
import logo from "../../../../public/Images/logo.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gradient-to-r from-[#5b02e2] to-[#9d02c4] text-white">
  <div>
  <img className="w-14 mx-auto" src={logo} alt="" />
    <p className='font-bold text-xl font-primary uppercase'> Figlandia</p>
  </div> 
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
</footer>
    );
};

export default Footer;