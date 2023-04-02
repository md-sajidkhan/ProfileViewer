
import { useEffect, useState } from 'react';
import './App.css'
import Landingpage from './components/Landingpage'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ProfilePage from './components/Pages/ProfilePage';
import ProfileDetails from './components/Homepage/ProfileDetails';
import PostDetails from './components/Homepage/PostDetails';
import Galleryscreen from './components/Homepage/Galleryscreen';
import ToDoScreen from './components/Homepage/ToDoScreen';

function App() {

  const [profiles, setProfiles] = useState([]);

  //Data fetch on every load
  useEffect(() => {
    axios.get('https://panorbit.in/api/users.json')
      .then(res => setProfiles(res.data.users))
      .catch(err => console.log(err));
  }, [])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage profiles={profiles} />}></Route>
          <Route path='/profile/:id' element={<ProfilePage profiles={profiles} />}>
            <Route index element={<ProfileDetails />} />
            <Route path='profile' element={<ProfileDetails />} />
            <Route path='posts' element={<PostDetails />} />
            <Route path='gallery' element={<Galleryscreen />} />
            <Route path='todo' element={<ToDoScreen />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
