import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blogs />}/>
            <Route path="blog/:id" element={<SingleBlog/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
