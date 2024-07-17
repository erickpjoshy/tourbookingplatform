import React from 'react';

const SectionThree = () => {
  const locations = [
    { name: 'Delhi', image: '/delhi.png' },
    { name: 'London', image: '/london.png' },
    { name: 'Thailand', image: '/thailand.png' },
    { name: 'Dubai', image: '/dubai.png' },
    { name: 'Delhi', image: '/delhi.png' },
    { name: 'London', image: '/london.png' },
    { name: 'Thailand', image: '/thailand.png' },
  ];
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto p-2 pb-6 sm:pb-10">
        <h1
          className="mt-10 sm:mt-20 text-4xl font-medium relative"
          style={{ lineHeight: '46.8px', letterSpacing: '0.195px' }}
        >
          Our Locations
        </h1>
        <p className="text-xl mt-2 font-medium">
          Browse destinations for your next holiday plan.
        </p>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-7 mt-14">
          {locations.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex justify-center">
                  <img src={item.image} />
                </div>
                <p className="text-2xl text-center font-medium py-6">
                  {item.name}
                </p>
                <div style={{ borderBottom: '4px solid #D9D9D9' }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
