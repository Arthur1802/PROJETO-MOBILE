import { BrowserRouter, Route, Routes } from "react-router-dom"
// import App from './App.jsx'
// import LogIn from "./pages/LogIn"
import SubjectMenu from "./pages/SubjectMenu.jsx"
import DownloadContent from "./pages/DownloadContent.jsx"
// import SignIn from "./pages/SignIn.jsx"
import GameHtml from './pages/GameHtml.jsx'
import GameCss from './pages/GameCss.jsx'
import GameJs from './pages/GameJs.jsx'
import GameAll from './pages/GameAll.jsx'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SubjectMenu />}/>
                {/* <Route path="/login" element={<LogIn />}/> */}
                {/* <Route path="/signin" element={<SignIn />}/> */}
                <Route path="/downloadcontent" element={<DownloadContent />}/>
                <Route path="/gamehtml" element={<GameHtml />}/>
                <Route path="/gamecss" element={<GameCss />}/>
                <Route path="/gamejs" element={<GameJs />}/>
                <Route path="/gameall" element={<GameAll />}/>
            </Routes>
        </BrowserRouter>
    )
}