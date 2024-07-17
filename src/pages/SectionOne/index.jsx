import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import Header from '../../components/Header';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css';
import './sectionone.css';
const SectionOne = () => {
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
      <div className="banner-container h-[100vh] ">
        <div className="banner gradient-background"></div>
      </div>
      <Header />
      <div className="absolute bottom-0 w-full">
        <div className="mb-20 container mx-auto">
          <h1
            className="text-white leading-tight hidden md:flex"
            style={{
              fontWeight: '550',
              fontSize: '46px',
              letterSpacing: '1.144px',
            }}
          >
            Get New Experience and
          </h1>
          <h1
            className="text-white leading-tight hidden md:flex"
            style={{
              fontWeight: '550',
              fontSize: '46px',
              letterSpacing: '2.144px',
            }}
          >
            Greatest Adventure
          </h1>
          <p className="text-xl text-white font-normal mt-2 hidden md:flex">
            Explore all corners of the world with us at a better price
          </p>
          <div className="" style={{ marginTop: '106px' }}>
            <div className="bg-white rounded p-5">
              <div className="grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                <div className="people">
                  <div className="cnt">
                    <h2 className="font-medium">People</h2>
                    <div className="mt-3">
                      <InputNumber
                        value={value}
                        onValueChange={e => setValue(e.value)}
                        showButtons
                        buttonLayout="horizontal"
                        style={{
                          width: '120px',
                          padding: '4px',
                          borderRadius: '6px',
                          border: '1px solid #dcdcdc',
                        }}
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-xs" style={{ color: '#808080' }}>
                    How Many People Including Kids
                  </p>
                </div>
                <div className="">
                  <div className="cnt">
                    <h2 className="font-medium">Date</h2>
                    <div className="mt-6">
                      <Calendar
                        id="buttondisplay"
                        value={date}
                        onChange={e => setDate(e.value)}
                        showIcon
                        dateFormat="dd/mm/yy"
                        placeholder="DD/MM/YYY"
                        style={{ borderBottom: '1px solid #dcdcdc' }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cnt">
                    <h2 className="font-medium">Location</h2>
                    <div className="px-3">
                      <Dropdown
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        optionLabel="name"
                        placeholder="Choose your destination"
                        className="w-full px-5 mt-2 custom-select font-normal"
                        style={{
                          borderBottom: '1px solid #dcdcdc',
                          color: '#dcdcdc',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    className="text-primary px-5 py-2 h-12 rounded"
                    style={{ backgroundColor: '#E8194F' }}
                    onClick={() => {
                      navigate('/explore');
                    }}
                  >
                    Explore Now
                  </button>
                  <button
                    className=" px-5 py-2 h-12 rounded color-black"
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #D5D5D5',
                    }}
                  >
                    <i class="fa-solid fa-clock-rotate-left mr-2"></i>History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
