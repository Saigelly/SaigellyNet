import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

function App() {

  return (
    <>
      <div className="wrapper-app">
        <Header />
        <NavbarContainer />
        <div className="wrapper-app__content">
          <Routes>
            <Route path="/profile/*"
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
