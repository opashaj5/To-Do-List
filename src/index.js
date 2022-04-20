import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/tasks" element={<Index />} />
      </Route>
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);