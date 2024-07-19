import { useState } from 'react';
import { Select } from 'antd';
import { NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
  const [openToggle, setOpenToggle] = useState(false);
  const onClick = () => {
    setOpenToggle(true);
  };
  const [selectedOption, setSelectedOption] = useState('');

  // Array of options
  const options = [
    { value: 'EN', label: 'EN' },
    { value: 'TR', label: 'TR' },
  ];

  // Handle change event
  const handleChange = event => {
    setSelectedOption(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const trigger = () => {
    setOpen(!open);
  };
  return (
    <div className="absolute top-0 w-full">
      <div className="my-4 container mx-auto relative">
        <div className="flex justify-between p-2">
          <div className="block sm:hidden">
            <i
              className="fa-solid fa-bars text-white text-2xl"
              onClick={trigger}
            ></i>
          </div>
          {open && (
            <div className="absolute top-0 w-[250px] bg-white rounded p-4 z-10">
              <div className="flex justify-end text-xl">
                <i className="fa-solid fa-xmark" onClick={trigger}></i>
              </div>
              <ul
                className="gap-2 md:gap-4 cursor-pointer flex-col  flex text-xl"
                style={{ color: 'rgb(232, 25, 79)' }}
              >
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>Pacakages</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>
          )}

          <div className="logo h-[80px] w-[180px]">
            <img src="/logo2.png" />
          </div>
          <div className="naviitems flex items-center">
            <ul className="gap-2 md:gap-6 cursor-pointer flex-row text-primary hidden sm:flex flex-wrap">
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>Pacakages</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
            <div className="button gap-2 md:gap-6 ml-6 flex">
              <div>
                <button
                  className="px-2 sm:px-5 py-2 text-white text-xs sm:text-base font-normal"
                  style={{ backgroundColor: '#E8194F' }}
                >
                  Contact Us
                </button>
              </div>
              <div>
                <select
                  className="text-white px-2 sm:px-5 py-2 custom-select relative h-full text-xs sm:text-base  font-normal"
                  style={{ backgroundColor: '#1E1E1E' }}
                  value={selectedOption}
                  onChange={handleChange}
                >
                  {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
