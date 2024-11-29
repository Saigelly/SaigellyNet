import { Route, Routes } from 'react-router-dom'
import './App.css'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import MyPostsContainer from './components/Profile/MyPosts/Posts/MyPostsContainer'
import DialoguesContainer from './components/Dialogues/DialoguesContainer'
import LoginContainer from './components/Login/LoginContainer'

function App() {
  return (
    <>
      <div className="wrapper-app">
        <HeaderContainer />
        <NavbarContainer />
        <div className="wrapper-app__content">
          <Routes>
            <Route index element={<ProfileContainer />} />
            <Route path="/profile/:userID?/*" element={<ProfileContainer />}>
              <Route path={`home`} element={<MyPostsContainer />} />
              <Route index element={<MyPostsContainer />} />
              <Route path={`about`} element={<div> Обо МНЕ</div>} />
              <Route path={`friends`} element={<div>Друзья</div>} />
              <Route path={`gallery`} element={<div> Галерея</div>} />
            </Route>
            <Route path={`login`} element={<LoginContainer />}/>
            <Route path="/dialogues/*" element={<DialoguesContainer />} />
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
