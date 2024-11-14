import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'




function App( {state} ) {

  return (
    <>
    <BrowserRouter>
      <div className="wrapper-app">
        <Header />
        <Navbar />
        <div className="wrapper-app__content">
          <Routes>
            <Route path="/profile" element={<Profile state={state.profile} />} />
            <Route path="/dialogues/*" element={<Dialogues state={state.dialogues} />} />
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
