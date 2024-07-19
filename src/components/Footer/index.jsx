import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#1E1E1E' }} className="mt-16">
      <div className="container mx-auto p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          <div>
            <div className="logo h-[80px] w-[180px]">
              <img src="/logo2.png" />
            </div>
            <div className="flex flex-col gap-4 ml-4">
              <p className="text-white text-md">
                <i className="fa-solid fa-location-dot mr-2"></i>221 B Santa
                Monica, uae Dubai
              </p>
              <p className="text-white text-md">
                <i className="fa-solid fa-phone mr-2"></i>(+1) 923 2341 22
              </p>
              <p className="text-white text-md">
                <i className="fa-regular fa-envelope mr-2"></i>
                contact@Travel.com
              </p>
            </div>
            <div className="mt-20">
              <p className="text-white">@2024 Travel All rights resrved</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="about flex flex-col gap-4 text-white">
              <h2 className="font-semibold">About</h2>
              <p>How to Book</p>
              <p>Help Center</p>
              <p>Contact us</p>
              <p>Careers</p>
              <p>About us</p>
              <p>Blog</p>
            </div>
            <div className="about flex flex-col gap-4 text-white">
              <h2 className="font-semibold">Services</h2>
              <p>Flight</p>
              <p>Hotels</p>
              <p>Train</p>
              <p>Bus</p>
              <p>Car Rental</p>
              <p>Guide</p>
            </div>
            <div className="about flex flex-col gap-4 text-white">
              <h2 className="font-semibold">Support</h2>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Code of Conduct</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
