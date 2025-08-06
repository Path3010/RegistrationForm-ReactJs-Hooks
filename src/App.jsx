import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import RegisterFormClass from './RegisterFormClass';

function App() {
  const [currentForm, setCurrentForm] = useState('functional');

  return (
    <div>
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <button 
          onClick={() => setCurrentForm('functional')}
          style={{ 
            marginRight: '10px', 
            padding: '8px 16px',
            backgroundColor: currentForm === 'functional' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Functional Component
        </button>
        <button 
          onClick={() => setCurrentForm('class')}
          style={{ 
            padding: '8px 16px',
            backgroundColor: currentForm === 'class' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Class Component
        </button>
      </nav>
      
      <div style={{ padding: '20px' }}>
        {currentForm === 'functional' ? <RegisterForm /> : <RegisterFormClass />}
      </div>
    </div>
  );
}

export default App