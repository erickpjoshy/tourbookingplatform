import { Input } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from '../../utilities/customAxios.js';
import ReactPaginate from 'react-paginate';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './exploresectiontwo.css';
const ExploreSectionTwo = ({ activities }) => {
  const initialCategories = [
    { name: 'Promo Deals', checked: false },
    { name: 'One Day Trip', checked: false },
    { name: 'Top Vacation', checked: false },
    { name: 'Things To do', checked: false },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCategoryChange = index => {
    const newCategories = [...categories];
    newCategories[index].checked = !newCategories[index].checked;
    setCategories(newCategories);
  };
  const handleMinPriceChange = e => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = e => {
    setMaxPrice(e.target.value);
  };

  const resetFilters = () => {
    setCategories(initialCategories);
    setMinPrice('');
    setMaxPrice('');
    setSelectedDate('');
  };
  // const filteredActivities = activities.filter(activity => {
  //   const selectedCategories = categories
  //     .filter(category => category.checked)
  //     .map(category => category.name);
  //   return (
  //     selectedCategories.length === 0 ||
  //     selectedCategories.includes(activity.category)
  //   );
  // });

  const filteredActivities = activities.filter(activity => {
    const selectedCategories = categories
      .filter(category => category.checked)
      .map(category => category.name);
    const isCategoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(activity.category);
    const isMinPriceMatch = minPrice === '' || activity.price >= minPrice;
    const isMaxPriceMatch = maxPrice === '' || activity.price <= maxPrice;
    return isCategoryMatch && isMinPriceMatch && isMaxPriceMatch;
  });
  const [pageNumber, setPageNumber] = useState(0);
  const activityPerPage = 6;
  const pagesVisited = pageNumber * activityPerPage;

  const dispalyActivity =
    Array.isArray(filteredActivities) && activities.length !== 0 ? (
      filteredActivities
        .slice(pagesVisited, pagesVisited + activityPerPage)
        .map((item, i) => {
          return (
            <div className="p-2" key={i}>
              <img src={item.image} className="object-contain w-full" />
              <div className="border  p-2">
                <div className="flex justify-between mt-2 items-center">
                  <h2 className="text-xs text-red-500 bg-red-100 rounded-xl px-4 py-1 font-semibold">
                    {item.category}
                  </h2>
                  <h2 className="text-xs">
                    {item.from_date} - {item.to_date}
                  </h2>
                </div>
                <div className="mt-2">
                  <h1 className="font-semibold">{item.package_name}</h1>
                </div>
                <div className="mt-2">
                  <h1 className="font-semibold text-2xl">
                    $ {item.price}
                    <span className="text-sm font-normal ml-1">
                      Starting From
                    </span>
                  </h1>
                </div>
                <div className="py-3 border-b">
                  <p className="font-light text-xs">{item.location}</p>
                </div>
                <div className="py-3">
                  <p
                    className="font-semibold text-sm text-center cursor-pointer"
                    onClick={() => {
                      showModal(item.price, item.id);
                    }}
                  >
                    Enquire Now
                  </p>
                </div>
              </div>
            </div>
          );
        })
    ) : (
      <p>No activities available</p>
    );
  const pageCount = Math.ceil(activities.length / activityPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // ---------modal-data--------------
  const [modalData, setModalData] = useState({
    package_id: '',
    name: '',
    phone: '',
    date: '',
    people: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageprice, setpackageprice] = useState(0);
  const showModal = (price, id) => {
    setModalData(prevModalData => ({
      ...prevModalData,
      package_id: id,
    }));
    setpackageprice(price);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const changeModalDatas = (e, key) => {
    setModalData({ ...modalData, [key]: e.target.value });
  };
  const postModalData = async () => {
    const response = await axios.post('tour-booking', modalData);
    setIsModalOpen(false);
  };
  console.log(modalData);
  // ---------end modal-data-----------
  return (
    <div className="container mx-auto">
      <div className="mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div className="border">
            <div style={{ borderBottom: '1px solid #E1E1E1' }}>
              <div className="flex mx-4 my-8 justify-between items-center">
                <h1 className="text-2xl">Filters</h1>
                <button
                  style={{ border: '2px solid #E1E1E1', color: '#E1E1E1' }}
                  className="px-2 sm:px-5 py-2 text-2xl sm:text-base font-normal w-30"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
            </div>
            <div style={{ borderBottom: '1px solid #E1E1E1' }}>
              <div className="my-10">
                <h1 className="ml-4 font-semibold">Category</h1>
                <div className="ml-4 mt-4 flex gap-4 flex-col">
                  {categories.map((item, i) => {
                    return (
                      <div className="flex" key={i}>
                        <input
                          type="checkbox"
                          checked={item.checked}
                          className="border-blue-400 border"
                          onChange={() => handleCategoryChange(i)}
                        />
                        <h1 className="ml-4" style={{ color: '#11142D' }}>
                          {item.name}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div style={{ borderBottom: '1px solid #E1E1E1' }}>
              <div className="my-10">
                <h1 className="mx-4 font-semibold">Price Range</h1>
                <div className="mx-4 mt-4 flex">
                  <button
                    className="p-2 w-14 text-center"
                    style={{ backgroundColor: '#E1E1E1' }}
                  >
                    Rp
                  </button>
                  <Input
                    className="rounded-none"
                    placeholder="Minimum price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                  />
                </div>
                <div className="mx-4 mt-4 flex">
                  <button
                    className="p-2 w-14 text-center"
                    style={{ backgroundColor: '#E1E1E1' }}
                  >
                    Rp
                  </button>
                  <Input
                    className="rounded-none"
                    placeholder="Maximum price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                  />
                </div>
              </div>
            </div>
            <div style={{ borderBottom: '1px solid #E1E1E1' }}>
              <div className="my-10">
                <h1 className="mx-4 font-semibold">Date</h1>
                <div className="mx-4 mt-4 flex">
                  {/* <button
                    className="p-2 w-14 text-center"
                    style={{ backgroundColor: '#E1E1E1' }}
                  >
                    Rp
                  </button> */}
                  <Input
                    className="rounded-none"
                    placeholder="Maximum price"
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {dispalyActivity}
              <div className="absolute bottom-0 w-full">
                <div className="flex justify-end">
                  <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        className="text-white"
      >
        <div className="grid grid-cols-2 gap-4 p-6">
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-black text-base font-semibold">Name</label>
              <Input
                className="mt-2 p-2"
                placeholder="Enter Your Name"
                onChange={e => {
                  changeModalDatas(e, 'name');
                }}
              />
            </div>
            <div>
              <label className="text-black text-base font-semibold">
                Phone Number
              </label>
              <Input
                className="mt-2 p-2"
                type="number"
                placeholder="Contact Number"
                onChange={e => {
                  changeModalDatas(e, 'phone');
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-black text-base font-semibold">Date</label>
              <Input
                className="mt-2 p-2"
                type="date"
                onChange={e => {
                  changeModalDatas(e, 'date');
                }}
              />
            </div>
            <div>
              <label className="text-black text-base font-semibold">
                People
              </label>
              <Input
                className="mt-2 p-2"
                placeholder="people"
                type="number"
                onChange={e => {
                  changeModalDatas(e, 'people');
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end text-black px-6">
          <span className="text-lg mr-44">Price</span>
          <span className="text-2xl">{packageprice}</span>
        </div>
        <div className="flex justify-end p-6">
          <button
            className="px-2 sm:px-5 py-4 text-white text-xs sm:text-base font-normal rounded"
            style={{ backgroundColor: '#E8194F' }}
            onClick={postModalData}
          >
            Booking now
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ExploreSectionTwo;
