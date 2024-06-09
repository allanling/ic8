import React, { useState, useEffect } from "react";
import BusCard from "./BusCard";
import axios from "../axios.js";

const BusStopListItem = ({ busStopNum }) => {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBuses = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/bus-stops/${busStopNum}`);
        const itemData = await response.data;
        setBuses(itemData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBuses();
  }, [busStopNum]);

  return (
    <>
      <h5>Bus Arrivals</h5> {isLoading}
      {!isLoading ? (
        <div className="d-flex flex-wrap">
          {buses.map((bus) => (
            <BusCard key={bus.busNum} busNum={bus.busNum} arrivals={bus.arrivals} />
          ))}
        </div>
      ) : (
        "Fetching bus..."
      )}
    </>
  );
};

export default BusStopListItem;
