import React from "react";

const BusStopListItemHeader = ({ name, busStopNum, distance }) => {
  return (
    <>
      <div className="d-flex justify-content-between w-100 me-2">
        <span>
          <b>{name}</b> - {busStopNum}
        </span>
        <span>~{distance}km</span>
      </div>
    </>
  );
};

export default BusStopListItemHeader;
