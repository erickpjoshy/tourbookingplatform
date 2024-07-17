import { Input } from 'antd';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './exploresectiontwo.css';
const ExploreSectionTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const categories = [
    { name: 'Promo Deals', checked: true },
    { name: 'One Day Trip', checked: false },
    { name: 'Top Vacation', checked: true },
    { name: 'Things To do', checked: false },
  ];

  const activities = [
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'new Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'new Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'new Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
    {
      name: 'new Fast Boat Ticket - Gilimanuk and Nusa Penida',
      image: './cardimage.png',
      price: 40,
      location: 'Gianyar, Bali',
      tag: 'Promo Deals',
      date: '12 Nov 2024',
    },
  ];
  const [pageNumber, setPageNumber] = useState(0);
  const activityPerPage = 6;
  const pagesVisited = pageNumber * activityPerPage;
  const dispalyActivity = activities
    .slice(pagesVisited, pagesVisited + activityPerPage)
    .map((item, i) => {
      return (
        <div className="p-2">
          <img src={item.image} className="object-contain w-full" />
          <div className="border  p-2">
            <div className="flex justify-between mt-2 items-center">
              <h2 className="text-xs text-red-500 bg-red-100 rounded-xl px-4 py-1 font-semibold">
                {item.tag}
              </h2>
              <h2 className="text-xs">{item.date}</h2>
            </div>
            <div className="mt-2">
              <h1 className="font-semibold">{item.name}</h1>
            </div>
            <div className="mt-2">
              <h1 className="font-semibold text-2xl">
                $ {item.price}{' '}
                <span className="text-sm font-normal ml-1">Starting From</span>
              </h1>
            </div>
            <div className="py-3 border-b">
              <p className="font-light text-xs">{item.location}</p>
            </div>
            <div className="py-3">
              <p
                className="font-semibold text-sm text-center cursor-pointer"
                onClick={showModal}
              >
                Enquire Now
              </p>
            </div>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(activities.length / activityPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
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
                          type="checkBox"
                          checked={item.checked}
                          className="border-blue-400 border"
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
                  <butoon
                    className="p-2 w-14 text-center"
                    style={{ backgroundColor: '#E1E1E1' }}
                  >
                    Rp
                  </butoon>
                  <Input className="rounded-none" placeholder="Minumam price" />
                </div>
                <div className="mx-4 mt-4 flex">
                  <butoon
                    className="p-2 w-14 text-center"
                    style={{ backgroundColor: '#E1E1E1' }}
                  >
                    Rp
                  </butoon>
                  <Input className="rounded-none" placeholder="Maximum price" />
                </div>
              </div>
            </div>
            <div style={{ borderBottom: '1px solid #E1E1E1' }}>
              <div className="my-10">
                <h1 className="mx-4 font-semibold">Date</h1>
                <div className="mx-4 mt-4 flex">
                  {/* <butoon
                    className="p-2 w-14 text-center"
                    style={{ backgroundColor: '#E1E1E1' }}
                  >
                    Rp
                  </butoon> */}
                  <Input
                    className="rounded-none"
                    placeholder="Maximum price"
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {dispalyActivity}
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
              <Input className="mt-2 p-2" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="text-black text-base font-semibold">
                Phone Number
              </label>
              <Input
                className="mt-2 p-2"
                type="number"
                placeholder="Contact Number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-black text-base font-semibold">Date</label>
              <Input className="mt-2 p-2" type="date" />
            </div>
            <div>
              <label className="text-black text-base font-semibold">
                People
              </label>
              <Input className="mt-2 p-2" placeholder="1 Adult" />
            </div>
          </div>
        </div>
        <div className="flex justify-end text-black px-6">
          <span className="text-lg mr-44">Price</span>
          <span className="text-2xl">$12</span>
        </div>
        <div className="flex justify-end p-6">
          <button
            className="px-2 sm:px-5 py-4 text-white text-xs sm:text-base font-normal rounded"
            style={{ backgroundColor: '#E8194F' }}
          >
            Booking now
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ExploreSectionTwo;
