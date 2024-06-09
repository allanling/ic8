import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import BusStopListItemHeader from "./BusStopListItemHeader";
import BusStopListItem from "./BusStopListItem";

const BusStopList = ({ busStopList }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelect = (e) => {
    setActiveTab(e);
  };

  const listItems = busStopList.map((busStop) => (
    <Accordion.Item key={busStop.busStopNum} eventKey={busStop.busStopNum}>
      <Accordion.Header>
        <BusStopListItemHeader
          name={busStop.name}
          busStopNum={busStop.busStopNum}
          distance={busStop.distance}
        />
      </Accordion.Header>
      <Accordion.Body>
        {activeTab === busStop.busStopNum && <BusStopListItem busStopNum={busStop.busStopNum} />}
      </Accordion.Body>
    </Accordion.Item>
  ));

  if (listItems.length > 0) {
    return (
      <>
        <Accordion defaultActiveKey="0" onSelect={handleSelect}>
          {listItems}
        </Accordion>
      </>
    );
  }

  return (
    <>
      <div className="placeholder-glow min-vh-25">
        <span className="placeholder placeholder-lg col-12"></span>
      </div>
    </>
  );
};

export default BusStopList;
