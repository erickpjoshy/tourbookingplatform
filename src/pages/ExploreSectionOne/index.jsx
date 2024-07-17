import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import Header from '../../components/Header';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css';
import './exploresectionone.css';
import { Input } from 'antd';
const ExploreSectionOne = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(2);
  const [date, setDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { name: 'Bangalore', code: 'Bangalore' },
    { name: 'Thiruvananthapuram', code: 'Thiruvananthapuram' },
    { name: 'Cochin', code: 'Cochin' },
    { name: 'Wayanad', code: 'Wayanad' },
    { name: 'Thrissur', code: 'Thrissur' },
  ];
  const handleChange = event => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="relative">
      <div className="banner-container h-[85vh] ">
        <div className="banner explore-gradient-background"></div>
      </div>
      <Header />
      <div className="absolute -bottom-12 w-full">
        <div className="container mx-auto">
          <h1
            className="text-white leading-tight hidden md:flex"
            style={{
              fontWeight: '550',
              fontSize: '46px',
              letterSpacing: '2.144px',
            }}
          >
            Location
          </h1>
          <div className="" style={{ marginTop: '300px' }}>
            <div className="bg-white p-5 shadow-md">
              <div className="flex gap-4">
                <Input
                  className="rounded-none"
                  placeholder="Search activities or Destinations"
                />
                <button
                  className="px-2 sm:px-5 py-4 text-white text-xs sm:text-base font-normal w-40"
                  style={{ backgroundColor: '#E8194F' }}
                >
                  Search<i class="fa-solid fa-magnifying-glass ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSectionOne;
