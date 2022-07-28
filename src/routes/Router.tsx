import React from 'react';
import { Route, Routes } from 'react-router';

import Schedule from 'pages/Schedule';
import AddSchedule from 'pages/AddSchedule';

function Router() {
  return (
    <Routes>
      <Route path="" element={<Schedule />} />
      <Route path="add" element={<AddSchedule />} />
    </Routes>
  );
}

export default Router;
