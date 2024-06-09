import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";

import Layout from "./pages/Layout";
import NearestBusStops from "./pages/NearestBusStops";

function App() {
  useEffect(() => {
    document.title = "A Bus App";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NearestBusStops />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
