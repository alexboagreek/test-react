import React from 'react';
import './footer.scss';
import {SocialIcon} from "../../commons/socialIcon/SocialIcon";

import facebook from './../../assets/socialIcon/bx_bxl-facebook.png';
import linkedIn from './../../assets/socialIcon/bx_bxl-linkedin.png';
import instagram from './../../assets/socialIcon/bx_bxl-instagram.png';
import github from "../../assets/socialIcon/github.png";

import logo from './../../assets/header-footer/favicon.png';

export const Footer = () => {

  const initialSocialIcons = [
    {urlIcon: facebook, urlSocial: "#"},
    {urlIcon: linkedIn, urlSocial: "https://www.linkedin.com/mwlite/profile/in/aleksandr-sourkov-434a86205"},
    {urlIcon: instagram, urlSocial: "#"},
    {urlIcon: github, urlSocial: "https://github.com/alexboagreek"},
  ];

  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <ul className="social_share d-flex justify-content-center">
              {
                initialSocialIcons.map(s => <SocialIcon urlIcon={s.urlIcon} urlSocial={s.urlSocial}/> )
              }
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="text">
              <p>
                Aleksandr Sourkov
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};