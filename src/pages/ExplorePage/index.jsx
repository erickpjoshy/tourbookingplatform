import React, { useEffect, useState, useCallback } from 'react';
import ExploreSectionOne from '../ExploreSectionOne';
import ExploreSectionTwo from '../ExploreSectionTwo';
import Footer from '../../components/Footer';
import axios from '../../utilities/customAxios.js';
import { useParams } from 'react-router-dom';
const ExplorePage = () => {
  const { id } = useParams();

  const [refreshFilter, setRefreshFilter] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState('');
  // console.log(selectedActivity);
  // const handleRefreshFilter = useCallback(() => {
  //   setRefreshFilter(prev => !prev);
  // }, []);

  // console.log(refreshFilter);
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  useEffect(() => {
    const getLocationByLocation = async () => {
      try {
        const response = await axios.get('tour-package-list');
        const transformedData = response.data.filter(
          item => item.location === id
        );
        setActivities(transformedData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    getLocationByLocation();
  }, [id]);

  useEffect(() => {
    if (refreshFilter && selectedActivity) {
      const filtered = activities.filter(
        activity => activity.package_name === selectedActivity
      );
      setFilteredActivities(filtered);
      // setRefreshFilter(false);
    } else {
      setFilteredActivities(activities);
    }
  }, [refreshFilter, selectedActivity, activities]);

  return (
    <div>
      <ExploreSectionOne
        location={id}
        setRefreshFilter={setRefreshFilter}
        setSelectedActivity={setSelectedActivity}
      />
      <ExploreSectionTwo activities={filteredActivities} />
      <Footer />
    </div>
  );
};

export default ExplorePage;
