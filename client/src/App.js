import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import ViewLogin from './views/auth/Login';
import Dash from './views/app';
import './App.css';

import OrginTracker from './views/app/orgintracker';
import DNSLookup from './views/app/dnslookup';
import EmailTracker from './views/app/emailtracker';
import PortScan from './views/app/portscan';
import Info from './views/app/facedetect/info';
import Setting from './views/app/setting';
import FaceDetect from './views/app/facedetect';
import CriminalRecords from './views/app/criminalrecords';
import CriminalAdd from './views/app/criminalrecords/add';
import Dashboard from './views/app/Dashboard';
import EmailOSLINT from './views/app/emailoslint';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='app' />} />
        <Route path='app' element={<Dashboard />} />
        <Route path='login' element={<ViewLogin />} />
        <Route path='orgintracker' element={<OrginTracker />} />
        <Route path='dnslookup' element={<DNSLookup />} />
        <Route path='emailtracker' element={<EmailTracker />} />
        <Route path='facedetect' element={<FaceDetect />} />
        <Route path='portscan' element={<PortScan />} />
        <Route path='cctv/:id' element={<Info />} />
        <Route path='setting' element={<Setting />} />
        <Route path='/records' element={<CriminalRecords />} />
        <Route path='/records/add' element={<CriminalAdd />} />
        <Route path='/osint' element={<EmailOSLINT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
