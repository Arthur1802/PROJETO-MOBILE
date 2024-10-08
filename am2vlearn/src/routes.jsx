import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Welcome from "./pages/Welcome"
import LogIn from "./pages/Login&Signin/LogIn.jsx"
import SubjectMenu from "./pages/SubjectMenu.jsx"
import DownloadContent from "./pages/DownloadContent.jsx"
import SignIn from "./pages/Login&Signin/SignIn.jsx"
import GameHtml from './pages/GameHtml.jsx'
import GameCss from './pages/GameCss.jsx'
import GameJs from './pages/GameJs.jsx'
import GameAll from './pages/GameAll.jsx'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Welcome />}/>
                <Route path = "/login" element = {<LogIn />}/>
                <Route path = "/signin" element = {<SignIn />}/>
                <Route path = "/subjectmenu" element = {<ProtectedRoute element = {<SubjectMenu />}/>}/>
                <Route path = "/downloadcontent" element = {<ProtectedRoute element = {<DownloadContent />}/>}/>
                <Route path = "/gamehtml" element = {<ProtectedRoute element = {<GameHtml />}/>}/>
                <Route path = "/gamecss" element = {<ProtectedRoute element = {<GameCss />}/>}/>
                <Route path = "/gamejs" element = {<ProtectedRoute element = {<GameJs />}/>}/>
                <Route path = "/gameall" element = {<ProtectedRoute element = {<GameAll />}/>}/>
            </Routes>
        </BrowserRouter>
    )
}