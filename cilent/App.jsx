/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import Project1 from './components/Project1.jsx';
import Project2 from './components/Project2.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/project1' element={<Project1 />} />
        <Route path='/project2' element={<Project2 />} />
      </Routes>
    </div>
  );
};

export default App;
