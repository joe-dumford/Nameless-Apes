import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import "./resources/fonts/fontWeb/css/fontello.css"


import PageOne from "./Pages/PageOne"
import PodcastPage from "./Pages/Podcast/PodcastPage"
import VideosPage from './Pages/Videos/VideosPage';
import MerchPage from './Pages/Merch/MerchPage';

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<PageOne />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/merch" element={<MerchPage />} />
          </Routes>
        </Router>
    );
  }
}

export default App;
