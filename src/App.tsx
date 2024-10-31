import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Info from './pages/Info';
import News from './pages/News';
import Applicants from './pages/Applicants';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Activities from './pages/Activities';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Schedule from './pages/Schedule';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="news" element={<News />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="activities" element={<Activities />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </Router>
  );
}