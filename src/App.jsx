import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import RegisterFormClass from './RegisterFormClass';

function App() {
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/functional" replace />} />
          <Route path="/functional" element={<RegisterForm />} />
          <Route path="/class" element={<RegisterFormClass />} />
        </Routes>
      </div>
    </div>
  );
}

export default App