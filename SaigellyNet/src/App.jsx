import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'




function App(props) {

  return (
    <>
      <BrowserRouter>
        <div className="wrapper-app">
          <Header />
          <Navbar state={props.state.navbar} />
          <div className="wrapper-app__content">
            <Routes>
              <Route path="/profile/*"
                element={<Profile
                  state={props.state.profile}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />} />
              <Route path="/dialogues/*"
                element={<Dialogues
                  state={props.state.dialogues}
                  addMessage={props.addMessage}
                  updateNewMessageText={props.updateNewMessageText}
                />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />



            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
