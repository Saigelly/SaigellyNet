import { Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import NavbarContainer from './components/Navbar/NavbarContainer'




function App() {

  return (
    <>
      <div className="wrapper-app">
        <Header />
        <NavbarContainer />
        <div className="wrapper-app__content">
          <Routes>
            <Route path="/profile/*"
              element={<Profile />} />
            <Route path="/dialogues/*"
              element={<Dialogues />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
