import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'

function App() {
  return (
    <>
      <div className="wrapper-app">
        <HeaderContainer />
        <NavbarContainer />
        <div className="wrapper-app__content">
          <Routes>
            <Route path="/profile/:userID?/*"
              element={<ProfileContainer />} />
            <Route path="/dialogues/*"
              element={<Dialogues />} />
            <Route path="/users" element={<UsersContainer />} />
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
