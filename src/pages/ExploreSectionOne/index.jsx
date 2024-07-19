import React, { useState, useEffect } from 'react';
import axios from '../../utilities/customAxios.js';
import { Select } from 'antd';
import { Dropdown } from 'primereact/dropdown';
import Header from '../../components/Header';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css';
import './exploresectionone.css';
import { Input } from 'antd';
const ExploreSectionOne = ({
  location,
  setRefreshFilter,
  setSelectedActivity,
}) => {
  const [activities, setActivities] = useState([]);
  const getLocation = async () => {
    try {
      const response = await axios.get('tour-package-list');
      const transformedData = response.data
        .filter(item => item.location === location)
        .map(item => ({
          value: item.package_name,
          label: item.package_name,
        }));
      setActivities(transformedData);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  const handleChange = event => {
    console.log(event);
    setSelectedActivity(event);
  };
  const setFilter = () => {
    setRefreshFilter(true);
  };
  // console.log(selectedActivity);
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
            {location}
          </h1>
          <div className="" style={{ marginTop: '300px' }}>
            <div className="bg-white p-5 shadow-md">
              <div className="flex gap-4">
                {/* <Input
                  className="rounded-none"
                  placeholder="Search activities or Destinations"
                /> */}
                <Select
                  showSearch
                  onChange={handleChange}
                  placeholder="Search activities or Destinations"
                  filterOption={(input, option) =>
                    (option?.label ?? '')
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={activities}
                  className="rounded-none w-full font-normal h-[52px]"
                  style={{
                    color: '#000', // Change to a darker color to see if the placeholder appears
                  }}
                />
                <button
                  className="px-2 sm:px-5 py-4 text-white text-xs sm:text-base font-normal w-40"
                  style={{ backgroundColor: '#E8194F' }}
                  onClick={setFilter}
                >
                  Search<i className="fa-solid fa-magnifying-glass ml-2"></i>
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
