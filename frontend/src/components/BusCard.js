import React, { useState, useRef, useEffect } from "react";
import "./BusCard.css";

const BusCard = ({ busNum, arrivals }) => {
  const [localArrivals, setLocalArrivals] = useState(arrivals);
  const interval = useRef(null);

  // each call will deduct 1 minute from the arrival time
  // and bring in new bus arrival after first bus has left
  const mockBusSchedule = () => {
    setLocalArrivals((arrivals) => {
      const newArrivals = [...arrivals];
      newArrivals.forEach((num, index) => {
        newArrivals[index] = num - 1;
      });
      if (newArrivals[0] < 0) {
        newArrivals.shift();
        newArrivals[2] = 10;
      }
      return newArrivals;
    });
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      mockBusSchedule();
    }, 60000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <div className="bus-card card bg-light mb-3 mx-2">
        <div className="card-header text-center">{busNum}</div>
        <div className="card-body">
          <div className="card-text blink-out" key={localArrivals[0]}>
            <div className="bus-card-content-next text-center">
              {(localArrivals[0] ?? "-") === 0 ? "Arr" : localArrivals[0] + "m"}
            </div>
            <div className="bus-card-content-later d-flex justify-content-between w-100">
              <div>{localArrivals[1] ?? "-"}m</div>
              <div className="vr mx-1"></div>
              <div>{localArrivals[2] ?? "-"}m</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusCard;
