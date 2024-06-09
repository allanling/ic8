import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import BusStopList from "../components/BusStopList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

// hard coded user location
const userLocation = {
  lat: process.env.REACT_APP_USER_LAT,
  lng: process.env.REACT_APP_USER_LNG
};

const NearestBusStops = () => {
  const [busStopList, setBusStopList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNearestBusStop = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/bus-stops", {
        params: userLocation
      });
      const itemData = await response.data;
      setBusStopList(itemData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    setBusStopList([]);
    fetchNearestBusStop();
  };

  useEffect(() => {
    fetchNearestBusStop();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <h4>Nearest Bus Stops</h4>
        <button
          title="Get Nearest Bus Stop"
          className="btn btn-link"
          disabled={isLoading}
          onClick={handleRefresh}
        >
          <FontAwesomeIcon icon={faLocationCrosshairs} size="lg" />
        </button>
      </div>
      <BusStopList busStopList={busStopList} isLoading={isLoading} />
    </>
  );
};

export default NearestBusStops;
