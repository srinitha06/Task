import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import SignUp from './Signup';  // Assuming SignUp is a separate component
import SignIn from './Signin';  // Assuming SignIn is a separate component

// Static movie data
const movieData = {
  netflixOriginals: [
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 4, title: 'Breaking Bad', poster: 'https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    
  ],
  trendingNow: [
    { id: 4, title: 'Breaking Bad', poster: 'https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Game of Thrones', poster: 'https://th.bing.com/th/id/OIP.x2m0Rfh8v0371TLGIKAZMQHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 4, title: 'Breaking Bad', poster: 'https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Game of Thrones', poster: 'https://th.bing.com/th/id/OIP.x2m0Rfh8v0371TLGIKAZMQHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }, 
    { id: 4, title: 'Breaking Bad', poster: 'https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Game of Thrones', poster: 'https://th.bing.com/th/id/OIP.x2m0Rfh8v0371TLGIKAZMQHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },   // Add other movies
  ],
  topRated: [
    { id: 7, title: 'Inception', poster: 'https://th.bing.com/th/id/OIP.fYLXgLBnnbp3N8JCRuUIGAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 8, title: 'The Dark Knight', poster: 'https://th.bing.com/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },  // Add other movies
    { id: 4, title: 'Breaking Bad', poster: 'https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Game of Thrones', poster: 'https://th.bing.com/th/id/OIP.x2m0Rfh8v0371TLGIKAZMQHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }, 
    { id: 4, title: 'Breaking Bad', poster: 'https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Game of Thrones', poster: 'https://th.bing.com/th/id/OIP.x2m0Rfh8v0371TLGIKAZMQHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 1, title: 'Stranger Things', poster: 'https://th.bing.com/th/id/R.5ced740212ba4b7404cd633b011f682b?rik=RanCvfApfTEzmA&riu=http%3a%2f%2fwww.kylelambert.com%2fgallery%2fstranger-things-season-4-vol-1-poster%2fimages%2fstranger-things-4-poster-by-kyle-lambert.jpg&ehk=aqvBltY4Z5%2fNLJKhkn17%2fhsgwBPp%2bRLLEpheUPM%2bDSE%3d&risl=&pid=ImgRaw&r=06' },
    { id: 2, title: 'The Witcher', poster: 'https://th.bing.com/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }, 
  ],
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Row title="Netflix Originals" movies={movieData.netflixOriginals} isLargeRow /><Row title="Trending Now" movies={movieData.trendingNow} /><Row title="Top Rated" movies={movieData.topRated} /></>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
