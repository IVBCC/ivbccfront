import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span><FaPhoneAlt className="icon" /> <span className="text">318 7166545</span></span>
        <span>
          <FaMapMarkerAlt className="icon" />
          <span className="text address">Cll. 18 #11 - 114 V/par, Cesar</span>
        </span>
      </div>
      <div className="topbar-right">        
        <a href="https://www.facebook.com/p/Iglesia-Valle-De-Bendici%C3%B3n-Cruzada-Cristiana-100064649477817/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/iglesiavalledebendicion?igsh=ZTBrOHAzanM1NjFr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.youtube.com/@iglesiavalledebendicioncru4554" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </div>
  );
};

export default TopHeader;